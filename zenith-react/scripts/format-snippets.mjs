import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import prettier from 'prettier';

const SNIPPETS_DIRS = [
  'src/features/tables/snippets',
  'src/features/headings/snippets',
  'src/features/forms/snippets',
  'src/features/botones/snippets',
  'src/features/modals/snippets',
  'src/shared/components/doc/snippets',
  'src/features/cards/snippets',
  'src/features/hero/snippets',
  'src/features/paginators/snippets',
];

function findSnippetFiles(dir) {
  const files = [];
  if (!statSync(dir).isDirectory()) return files;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...findSnippetFiles(full));
    } else if (extname(entry) === '.ts' && entry.endsWith('.snippet.ts')) {
      files.push(full);
    }
  }
  return files;
}

async function formatHtmlInTemplate(content) {
  // Use regex to find and format template literals
  let result = content;

  // Format _HTML = `...` template literals
  result = result.replace(
    /(export const \w+_HTML\s*=\s*`)([\s\S]*?)(`;)/g,
    async (match, prefix, templateContent, suffix) => {
      try {
        const formatted = await prettier.format(templateContent, {
          parser: 'html',
          printWidth: 120,
          tabWidth: 2,
          singleQuote: true,
        });
        return prefix + '\n' + formatted.trim() + '\n' + suffix;
      } catch (e) {
        console.warn('Failed to format HTML template:', e.message);
        return match;
      }
    }
  );

  // Format _TSX = `...` or _JSX = `...` template literals
  result = result.replace(
    /(export const \w+_(?:TSX|JSX)\s*=\s*`)([\s\S]*?)(`;)/g,
    async (match, prefix, templateContent, suffix) => {
      try {
        const formatted = await prettier.format(templateContent, {
          parser: 'babel-ts',
          printWidth: 120,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'es5',
        });
        return prefix + '\n' + formatted.trim() + '\n' + suffix;
      } catch (e) {
        console.warn('Failed to format TSX template:', e.message);
        return match;
      }
    }
  );

  // Since replace with async callback doesn't work directly, we need a different approach
  return result;
}

async function formatFile(content) {
  let result = content;

  // Find all _HTML templates
  const htmlRegex = /(export const \w+_HTML\s*=\s*`)([\s\S]*?)(`;)/g;
  let match;
  const htmlMatches = [];
  while ((match = htmlRegex.exec(content)) !== null) {
    htmlMatches.push({ match: match[0], prefix: match[1], content: match[2], suffix: match[3], index: match.index });
  }

  // Find all _TSX/_JSX templates
  const tsxRegex = /(export const \w+_(?:TSX|JSX)\s*=\s*`)([\s\S]*?)(`;)/g;
  const tsxMatches = [];
  while ((match = tsxRegex.exec(content)) !== null) {
    tsxMatches.push({ match: match[0], prefix: match[1], content: match[2], suffix: match[3], index: match.index });
  }

  // Process from end to start to maintain indices
  const allMatches = [...htmlMatches, ...tsxMatches].sort((a, b) => b.index - a.index);

  for (const m of allMatches) {
    const isHtml = m.match.includes('_HTML');
    try {
      const formatted = await prettier.format(m.content, {
        parser: isHtml ? 'html' : 'typescript',
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: isHtml ? 'none' : 'es5',
      });
      const replacement = m.prefix + '\n' + formatted.trim() + '\n' + m.suffix;
      result = result.slice(0, m.index) + replacement + result.slice(m.index + m.match.length);
    } catch (e) {
      console.warn(`Failed to format ${isHtml ? 'HTML' : 'TSX'} in ${m.match.slice(0, 50)}...:`, e.message);
    }
  }

  return result;
}

async function main() {
  const allFiles = SNIPPETS_DIRS.flatMap(findSnippetFiles);
  console.log(`Found ${allFiles.length} snippet files`);

  for (const file of allFiles) {
    const content = readFileSync(file, 'utf-8');
    const formatted = await formatFile(content);
    if (formatted !== content) {
      writeFileSync(file, formatted, 'utf-8');
      console.log(`Formatted: ${file}`);
    }
  }
  console.log('Done!');
}

main().catch(console.error);
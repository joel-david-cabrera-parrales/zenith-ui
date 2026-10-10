import fs from 'fs';
import path from 'path';

const BASE = 'zenith-react';
const DOC_DIRS = [
  'src/features/cards/docs',
  'src/features/hero/docs',
];

function updateDocFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already updated
  if (content.includes("maxWidth={maxWidth}")) {
    console.log(`Skipping (already updated): ${filePath}`);
    return;
  }

  // Find component name
  const componentMatch = content.match(/export const (\w+Doc) = \(\) => \{/);
  if (!componentMatch) {
    console.log(`No match for: ${filePath}`);
    return;
  }
  const componentName = componentMatch[1];

  // Step 1: Add import after existing imports
  const importLines = content.match(/^import .*? from .*?;/gm);
  let insertAfter = 0;
  if (importLines) {
    const lastImport = importLines[importLines.length - 1];
    insertAfter = content.indexOf(lastImport) + lastImport.length;
  }

  let newContent = content.slice(0, insertAfter + 1) +
    `\nimport type { MaxWidth } from '@/shared/components/doc';\n` +
    content.slice(insertAfter + 1);

  // Step 2: Add interface and update component signature
  newContent = newContent.replace(
    `export const ${componentName} = () => {`,
    `\ninterface ${componentName}Props {\n  maxWidth?: MaxWidth;\n}\n\nexport const ${componentName} = ({ maxWidth = '4xl' }: ${componentName}Props) => {`
  );

  // Step 3: Add maxWidth={maxWidth} to ComponentDoc
  // Find ComponentDoc and add maxWidth before the closing />
  const lines = newContent.split('\n');
  let inComponentDoc = false;
  let newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    // Detect start of ComponentDoc
    if (line.trim().startsWith('<ComponentDoc')) {
      inComponentDoc = true;
    }

    // Detect end of ComponentDoc (the closing /> at the right indent)
    if (inComponentDoc && line.trim() === '/>') {
      // Insert maxWidth prop before the closing />
      const indent = ' '.repeat(6); // 6 spaces for prop indent
      newLines[newLines.length - 1] = `${indent}maxWidth={maxWidth}\n${line}`;
      inComponentDoc = false;
    }
  }

  newContent = newLines.join('\n');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`Could not update: ${filePath}`);
  }
}

function processDir(dir) {
  const fullDir = path.join('zenith-react', dir);
  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('Doc.tsx'));
  for (const file of files) {
    updateDocFile(path.join(fullDir, file));
  }
}

for (const dir of ['src/features/cards/docs', 'src/features/hero/docs']) {
  processDir(dir);
}

console.log('Done!');
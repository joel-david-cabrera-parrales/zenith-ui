import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import type { HighlighterCore } from 'shiki/core';

export type CodeLanguage = 'html' | 'tsx';

export interface HighlightToken {
  content: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export type HighlightLine = HighlightToken[];

export const CODE_THEME = 'github-dark' as const;
export const CODE_FALLBACK_COLOR = '#ffffff';

let highlighterPromise: Promise<HighlighterCore> | null = null;

function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      themes: [import('@shikijs/themes/github-dark')],
      langs: [import('@shikijs/langs/html'), import('@shikijs/langs/tsx')],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang: CodeLanguage,
): Promise<HighlightLine[]> {
  const highlighter = await getHighlighter();
  const result = highlighter.codeToTokens(code, {
    lang,
    theme: CODE_THEME,
  });
  return result.tokens.map((line) =>
    line.map((token) => {
      const style = token.fontStyle ?? 0;
      return {
        content: token.content,
        color: token.color,
        bold: (style & 2) !== 0,
        italic: (style & 1) !== 0,
        underline: (style & 4) !== 0,
      };
    }),
  );
}

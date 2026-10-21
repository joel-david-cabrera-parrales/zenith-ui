import { useEffect, useState } from 'react';
import { useCopyToClipboard } from '../../hooks';
import {
  CODE_FALLBACK_COLOR,
  highlightCode,
} from '../../utils/highlight';
import type {
  CodeLanguage,
  HighlightLine,
} from '../../utils/highlight';
import { useTheme } from '@/shared/hooks/useTheme';

interface CodeBlockProps {
  code: string;
  label: string;
  language: CodeLanguage;
}

export const CodeBlock = ({ code, label, language }: CodeBlockProps) => {
  const { dark } = useTheme();
  const { copied, copy } = useCopyToClipboard();
  const [lines, setLines] = useState<HighlightLine[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    highlightCode(code, language)
      .then((tokens) => {
        if (!cancelled) setLines(tokens);
      })
      .catch(() => {
        if (!cancelled) setLines(null);
      });
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  return (
    <div className={`relative ${dark ? "bg-slate-900" : "bg-slate-100"}`}>
      <button
        type="button"
        onClick={() => void copy(code)}
        aria-label={copied ? `${label} copiado` : `Copiar ${label}`}
        title={copied ? 'Copiado' : 'Copiar'}
        className={`absolute top-2 right-2 z-10 rounded-md p-1.5 transition-colors ${dark ? "bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white" : "bg-black/10 text-slate-700 hover:bg-black/20 hover:text-slate-900"}`}
      >
        {copied ? (
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M13.5 4.5 6 12 2.5 8.5" />
          </svg>
        ) : (
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
            <path d="M10.5 5.5v-2a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 3.5v5A1.5 1.5 0 0 0 4 10h1.5" />
          </svg>
        )}
      </button>
      <div className="overflow-x-auto p-4 pr-12">
        <pre className="text-sm leading-6">
          <code>
            {lines === null ? (
              <span style={{ color: CODE_FALLBACK_COLOR }}>{code}</span>
            ) : (
              lines.map((line, i) => (
                <span key={i} className="flex min-w-max">
                  <span
                    aria-hidden="true"
                    className={`w-8 shrink-0 pr-4 text-right select-none ${dark ? "text-slate-500" : "text-slate-400"}`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 whitespace-pre">
                    {line.length === 0 ? (
                      <span>{'\n'}</span>
                    ) : (
                      line.map((token, j) => (
                        <span
                          key={j}
                          style={{
                            color: token.color ?? CODE_FALLBACK_COLOR,
                            fontWeight: token.bold ? 700 : undefined,
                            fontStyle: token.italic ? 'italic' : undefined,
                            textDecoration: token.underline
                              ? 'underline'
                              : undefined,
                          }}
                        >
                          {token.content}
                        </span>
                      ))
                    )}
                  </span>
                </span>
              ))
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

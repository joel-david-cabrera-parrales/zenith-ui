import { useId, useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/shared/hooks/useLanguage';
import { useTheme } from '@/shared/hooks/useTheme';
import { LANGUAGE_OPTIONS } from '@/shared/utils/language-storage';

export const LanguageSelect = () => {
  const { dark } = useTheme();
  const { language, setLanguage } = useLanguage();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const popoverId = useId();
  const current = LANGUAGE_OPTIONS.find((o) => o.code === language) ?? LANGUAGE_OPTIONS[0];
  const filtered = LANGUAGE_OPTIONS.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase().trim()),
  );

  const closeDropdown = () => {
    detailsRef.current?.removeAttribute('open');
    setIsOpen(false);
    setQuery('');
  };

  const toggleDropdown = () => {
    const nextOpen = !detailsRef.current?.open;
    setIsOpen(nextOpen);
  };

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (detailsRef.current && !detailsRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeDropdown();
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      id={popoverId}
      className="group/language relative"
      onToggle={toggleDropdown}
    >
      <summary
        className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 text-sm font-medium transition-colors select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
          dark
            ? 'border-slate-700 bg-slate-800/50 text-slate-100 hover:bg-slate-800'
            : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
        }`}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-controls={`${popoverId}-list`}
      >
        <span className="text-base" aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-sm transition-transform group-open/language:rotate-180 ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          expand_more
        </span>
      </summary>

      <div
        id={`${popoverId}-list`}
        className={`absolute top-full right-0 z-[100] mt-1.5 min-w-[10rem] sm:min-w-[12rem] max-w-[16rem] rounded-lg shadow-lg border overflow-hidden ${
          dark
            ? 'border-slate-700 bg-slate-900'
            : 'border-slate-200 bg-white'
        }`}
        role="listbox"
        aria-label="Idiomas disponibles"
      >
        <div className="relative mb-1 flex items-center p-1.5">
          <span
            aria-hidden="true"
            className={`material-symbols-outlined pointer-events-none absolute left-2.5 text-base ${
              dark ? 'text-slate-400' : 'text-slate-400'
            }`}
          >
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar idiomas..."
            aria-label="Filtrar idiomas"
            className={`h-8 w-full rounded-md border bg-white/50 pr-2 pl-8 text-xs outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              dark
                ? 'border-slate-600 bg-slate-800 text-slate-100'
                : 'border-slate-300 bg-white text-slate-900'
            }`}
          />
        </div>

        <div className="max-h-48 space-y-0.5 overflow-y-auto p-1">
          {filtered.map((option) => {
            const isCurrent = option.code === language;
            return (
              <button
                key={option.code}
                type="button"
                role="option"
                aria-selected={isCurrent}
                onClick={() => {
                  setLanguage(option.code);
                  closeDropdown();
                }}
                className={`flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                  isCurrent
                    ? dark
                      ? 'bg-blue-600/20 text-blue-100'
                      : 'bg-blue-50 text-blue-700'
                    : dark
                    ? 'text-slate-100 hover:bg-slate-800'
                    : 'text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span className="text-base" aria-hidden="true">{option.flag}</span>
                <span className="flex-1 truncate">{option.label}</span>
                {isCurrent && (
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-base ${
                      dark ? 'text-blue-300' : 'text-blue-600'
                    }`}
                  >
                    check
                  </span>
                )}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className={`px-2.5 py-2 text-xs text-center ${
              dark ? 'text-slate-500' : 'text-slate-500'
            }`}>
              Sin resultados
            </p>
          )}
        </div>
      </div>
    </details>
  );
};
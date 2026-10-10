import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { RepoCard, SHOWCASE_REPOS, filterRepos } from '../components';
import type {
  ShowcaseFilter,
  ShowcaseView,
} from '../components';
import {
  SHOWCASE_GRID_LIST_HTML,
  SHOWCASE_GRID_LIST_TSX,
} from '../snippets';

const FILTERS: Array<{ id: ShowcaseFilter; label: string }> = [
  { id: 'all', label: 'All Repositories' },
  { id: 'production', label: 'Production' },
  { id: 'staging', label: 'Staging' },
  { id: 'archived', label: 'Archived' },
];

export function ShowcaseGridListDoc() {
  const [filter, setFilter] = useState<ShowcaseFilter>('all');
  const [view, setView] = useState<ShowcaseView>('grid');
  const visible = filterRepos(SHOWCASE_REPOS, filter);

  return (
    <ComponentDoc
      title="Showcase grid vs list en vivo"
      description="Sección 05 aplicada: toolbar con filtros por entorno y conmutador grid/list que reorganiza los 6 repositorios."
      preview={
        <div className="w-full space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="font-mono text-[9px] text-slate-500 uppercase mr-1">
                Filter:
              </span>
              {FILTERS.map((option) => {
                const active = option.id === filter;
                const count =
                  option.id === 'all'
                    ? SHOWCASE_REPOS.length
                    : filterRepos(SHOWCASE_REPOS, option.id).length;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setFilter(option.id)}
                    aria-pressed={active}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                      active
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-50 text-slate-500 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {option.label} ({count})
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="font-mono text-[9px] text-slate-500 uppercase">
                Display Layout:
              </span>
              <div className="inline-flex p-1 rounded-lg bg-slate-50 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setView('grid')}
                  aria-pressed={view === 'grid'}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[9px] transition-all ${
                    view === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-900 font-medium'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px]"
                  >
                    grid_view
                  </span>
                  GRID
                </button>
                <button
                  type="button"
                  onClick={() => setView('list')}
                  aria-pressed={view === 'list'}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[9px] transition-all ${
                    view === 'list'
                      ? 'bg-white text-blue-600 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-900 font-medium'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[16px]"
                  >
                    view_list
                  </span>
                  LIST
                </button>
              </div>
            </div>
          </div>
          {visible.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-300 rounded-xl p-8 text-center text-sm text-slate-500">
              Sin repositorios en este entorno.
            </div>
          ) : (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300'
                  : 'flex flex-col space-y-3 transition-all duration-300'
              }
            >
              {visible.map((repo) => (
                <RepoCard
                  key={repo.name}
                  repo={repo}
                  icon={repo.icon}
                  className={view === 'list' ? 'w-full' : ''}
                />
              ))}
            </div>
          )}
        </div>
      }
      htmlCode={SHOWCASE_GRID_LIST_HTML}
      jsxCode={SHOWCASE_GRID_LIST_TSX}
    />
  );
}

import type { HTMLAttributes } from 'react';

export interface RepoInfo {
  name: string;
  branch: string;
  status: 'live' | 'staging' | 'archived';
  description: string;
  language: string;
  languageColor: string;
  updated: string;
}

export interface RepoCardProps extends HTMLAttributes<HTMLDivElement> {
  repo?: RepoInfo;
  icon?: string;
}

const STATUS_LABEL: Record<RepoInfo['status'], string> = {
  live: 'LIVE',
  staging: 'STAGING',
  archived: 'ARCHIVED',
};

export function RepoCard({
  repo = {
    name: 'zenith-ingress-router',
    branch: 'git: main (v2.8.1)',
    status: 'live',
    description:
      'Core Envoy-backed API gateway managing edge SSL termination, circuit breakers, and rate limiting rules.',
    language: 'TypeScript',
    languageColor: 'bg-blue-600',
    updated: 'Updated 2h ago',
  },
  icon = 'terminal',
  className = '',
  ...rest
}: RepoCardProps) {
  const live = repo.status === 'live';

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200">
              <span aria-hidden="true" className="material-symbols-outlined">
                {icon}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {repo.name}
              </h3>
              <span className="font-mono text-[9px] text-slate-500">
                {repo.branch}
              </span>
            </div>
          </div>
          <span
            className={`px-2 py-0.5 rounded font-mono text-[9px] font-semibold border border-slate-200 ${
              live
                ? 'bg-slate-100 text-emerald-700'
                : 'bg-slate-50 text-slate-500'
            }`}
          >
            {STATUS_LABEL[repo.status]}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-4">{repo.description}</p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4 font-mono text-[9px] text-slate-500">
          <span className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${repo.languageColor}`}
            />
            {repo.language}
          </span>
          <span>{repo.updated}</span>
        </div>
        <button
          type="button"
          className="text-blue-600 hover:underline font-mono text-[9px] font-bold"
        >
          OPEN REPO →
        </button>
      </div>
    </div>
  );
}

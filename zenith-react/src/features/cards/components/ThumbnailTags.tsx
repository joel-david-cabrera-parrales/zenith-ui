import { useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ThumbnailTagsProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  tags?: string[];
  title?: string;
  excerpt?: string;
  author?: string;
  initials?: string;
}

export function ThumbnailTags({
  badge = 'GUIDE',
  tags = ['Security', 'IAM'],
  title = 'Configuring Mutual TLS for Microservices',
  excerpt = 'Step-by-step cryptographic setup for secure pod-to-pod mesh networking.',
  author = 'M. Rostova',
  initials = 'MR',
  className = '',
  ...rest
}: ThumbnailTagsProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="aspect-video w-full relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-900 to-slate-900 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[56px] text-blue-300/70"
          >
            lan
          </span>
          <div className="absolute bottom-2 left-2 flex gap-1">
            <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur text-slate-900 font-mono text-[9px] font-medium">
              {badge}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded font-mono text-[9px] ${index === 0 ? 'bg-slate-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2">{excerpt}</p>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="w-6 h-6 rounded-full bg-blue-100 border border-slate-200 flex items-center justify-center text-blue-700 text-[9px] font-bold"
            >
              {initials}
            </div>
            <span className="text-xs text-slate-900 font-medium">{author}</span>
          </div>
          <button
            type="button"
            onClick={() => setSaved((previous) => !previous)}
            aria-pressed={saved}
            aria-label={saved ? 'Quitar marcador' : 'Guardar marcador'}
            className={`transition-colors p-1 ${saved ? 'text-blue-600' : 'text-slate-400 hover:text-blue-600'}`}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
              {saved ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

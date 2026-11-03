import type { ReactNode } from 'react';

export const ProfileSection = ({ id, title, description, icon, action, children }: {
  id: string;
  title: string;
  description: string;
  icon: string;
  action?: ReactNode;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <span aria-hidden="true" className="material-symbols-outlined text-2xl text-sky-700">{icon}</span>{title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {action}
    </div>
    <div className="pt-6">{children}</div>
  </section>
);

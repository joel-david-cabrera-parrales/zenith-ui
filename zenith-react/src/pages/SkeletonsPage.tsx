import {
  SkeletonArticleDoc,
  SkeletonCardDoc,
  SkeletonFormDoc,
  SkeletonListDoc,
  SkeletonProductDoc,
  SkeletonProfileDoc,
  SkeletonStatsDoc,
  SkeletonTableDoc,
} from '@/features/skeletons/docs';

export const SkeletonsPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Skeletons</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Card piloto con pulse/shimmer, lista, artículo, perfil, tabla, stats, formulario y
          producto
        </p>
      </header>
      <SkeletonCardDoc />
      <SkeletonListDoc />
      <SkeletonArticleDoc />
      <SkeletonProfileDoc />
      <SkeletonTableDoc />
      <SkeletonStatsDoc />
      <SkeletonFormDoc />
      <SkeletonProductDoc />
    </div>
  </div>
);

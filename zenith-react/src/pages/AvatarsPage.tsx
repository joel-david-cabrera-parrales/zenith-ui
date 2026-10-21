import { useTranslation } from "@/shared/hooks/useTranslation";
import {
  AvatarFallbacksDoc,
  AvatarGroupsDoc,
  AvatarMasksDoc,
  AvatarPresenceDoc,
  AvatarRingsDoc,
  AvatarShapesDoc,
  AvatarSizesDoc,
  AvatarTableDoc,
} from '@/features/avatars/docs';

export const AvatarsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.avatars.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.avatars.subtitle')}</p>
        </header>
        <AvatarSizesDoc />
        <AvatarShapesDoc />
        <AvatarMasksDoc />
        <AvatarGroupsDoc />
        <AvatarRingsDoc />
        <AvatarPresenceDoc />
        <AvatarFallbacksDoc />
        <AvatarTableDoc />
      </div>
    </div>
  );
};

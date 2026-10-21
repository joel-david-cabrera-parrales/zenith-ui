import { useTranslation } from "@/shared/hooks/useTranslation";
import { TextInputDoc } from '@/features/forms/docs/TextInputDoc';
import { InputAccessoriesDoc } from '@/features/forms/docs/InputAccessoriesDoc';
import { InputStatesDoc } from '@/features/forms/docs/InputStatesDoc';
import { SelectsDoc } from '@/features/forms/docs/SelectsDoc';
import { NumericInputsDoc } from '@/features/forms/docs/NumericInputsDoc';
import { SelectionControlsDoc } from '@/features/forms/docs/SelectionControlsDoc';
import { TextareaUploadDoc } from '@/features/forms/docs/TextareaUploadDoc';
import { EventFormDoc } from '@/features/forms/docs/EventFormDoc';

export const FormsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t('pages.forms.title')}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('pages.forms.subtitle')}</p>
        </header>
        <TextInputDoc />
        <InputAccessoriesDoc />
        <InputStatesDoc />
        <SelectsDoc />
        <NumericInputsDoc />
        <SelectionControlsDoc />
        <TextareaUploadDoc />
        <EventFormDoc />
      </div>
    </div>
  );
};
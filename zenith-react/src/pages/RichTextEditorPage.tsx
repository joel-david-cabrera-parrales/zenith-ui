import { useTranslation } from '@/shared/hooks/useTranslation';
import { RichTextEditorDoc, RichTextEditorUseCasesDoc } from '@/features/rich-text-editor';
import { TerminalCommand } from '@/shared/components/doc';

const TIPTAP_INSTALL_COMMAND = [
  'npm install',
  '@tiptap/react@^2.27.3',
  '@tiptap/starter-kit@^2.27.3',
  '@tiptap/extension-link@^2.27.3',
  '@tiptap/extension-placeholder@^2.27.3',
  '@tiptap/extension-underline@^2.27.3',
].join(' ');

export const RichTextEditorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl space-y-8 p-4 sm:p-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('pages.richTextEditor.title')}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t('pages.richTextEditor.subtitle')}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t('pages.richTextEditor.description')}
          </p>
        </header>
        <TerminalCommand
          command={TIPTAP_INSTALL_COMMAND}
          accentPrefix="npm install"
          label={t('pages.richTextEditor.terminal')}
          copyLabel={t('pages.richTextEditor.copyCommand')}
          copiedLabel={t('pages.richTextEditor.copied')}
          className="max-w-4xl"
        />
        <RichTextEditorDoc />
        <RichTextEditorUseCasesDoc />
      </div>
    </div>
  );
};

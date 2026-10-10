import {
  AuditLogTableDoc,
  BatchTableFooterDoc,
  ClassicPaginationDoc,
  CompactPaginationDoc,
  CompactTableFooterDoc,
  InfiniteFeedStatusDoc,
  LoadMoreButtonDoc,
  PageJumpControlDoc,
  PageSizeSelectorDoc,
  StandardTableFooterDoc,
  StepDotsDoc,
  WizardStepperDoc,
} from "./features/paginators";
import {
  ButtonGroupsDoc,
  ButtonIconsDoc,
  ButtonSizesDoc,
  ButtonStatesDoc,
  ButtonVariantsDoc,
  FullWidthButtonsDoc,
  IconButtonsDoc,
  SemanticButtonsDoc,
} from "./features/botones";
import {
  ApiKeyModalDoc,
  BottomSheetDoc,
  ClusterDrawerDoc,
  ConnectionDrawerDoc,
  DangerModalDoc,
  FiltersDrawerDoc,
  FormModalDoc,
  FullscreenModalDoc,
  InfoModalDoc,
  LargeModalDoc,
  MediumModalDoc,
  NavDrawerDoc,
  SettingsPanelDoc,
  SmallModalDoc,
  SuccessModalDoc,
  WarningModalDoc,
} from "./features/modals";
import {
  EventFormDoc,
  InputAccessoriesDoc,
  InputStatesDoc,
  NumericInputsDoc,
  SelectionControlsDoc,
  SelectsDoc,
  TextInputDoc,
  TextareaUploadDoc,
} from "./features/forms";
import {
  BodyTextDoc,
  EditorialDoc,
  HeadingsScaleDoc,
  MicrocopyDoc,
  MonoDataDoc,
} from "./features/headings";

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center gap-12 bg-slate-100 px-4 py-10">
      <TextInputDoc />
      <InputStatesDoc />
      <InputAccessoriesDoc />
      <SelectsDoc />
      <NumericInputsDoc />
      <SelectionControlsDoc />
      <TextareaUploadDoc />
      <EventFormDoc />
      <ButtonSizesDoc />
      <ButtonVariantsDoc />
      <SemanticButtonsDoc />
      <ButtonIconsDoc />
      <IconButtonsDoc />
      <ButtonGroupsDoc />
      <ButtonStatesDoc />
      <FullWidthButtonsDoc />
      <SmallModalDoc />
      <MediumModalDoc />
      <LargeModalDoc />
      <FullscreenModalDoc />
      <InfoModalDoc />
      <SuccessModalDoc />
      <WarningModalDoc />
      <DangerModalDoc />
      <FormModalDoc />
      <SettingsPanelDoc />
      <ApiKeyModalDoc />
      <ConnectionDrawerDoc />
      <ClusterDrawerDoc />
      <NavDrawerDoc />
      <BottomSheetDoc />
      <FiltersDrawerDoc />
      <ClassicPaginationDoc />
      <CompactPaginationDoc />
      <PageJumpControlDoc />
      <PageSizeSelectorDoc />
      <StandardTableFooterDoc />
      <CompactTableFooterDoc />
      <BatchTableFooterDoc />
      <LoadMoreButtonDoc />
      <InfiniteFeedStatusDoc />
      <WizardStepperDoc />
      <StepDotsDoc />
      <AuditLogTableDoc />
      <HeadingsScaleDoc />
      <BodyTextDoc />
      <EditorialDoc />
      <MicrocopyDoc />
      <MonoDataDoc />
    </main>
  );
}

export default App;

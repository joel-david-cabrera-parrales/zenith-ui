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
import { ModalSizesDoc } from "./features/modals";
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
      <ModalSizesDoc />
    </main>
  );
}

export default App;

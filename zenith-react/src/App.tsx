import { ComponentDoc } from "./shared/components/doc";
import {
  HELLO_WORLD_HTML,
  HELLO_WORLD_TSX,
} from "./shared/components/doc/snippets";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-100 p-4">
      <ComponentDoc
        title="Hola mundo"
        description="Ejemplo completo con preview, HTML y JSX."
        preview={<h1 className="text-3xl font-bold">Hola mundo</h1>}
        htmlCode={HELLO_WORLD_HTML}
        jsxCode={HELLO_WORLD_TSX}
      />
      <ComponentDoc
        title="Hola mundo sin JSX"
        preview={<h1 className="text-3xl font-bold">Hola mundo</h1>}
        htmlCode={HELLO_WORLD_HTML}
      />
    </main>
  );
}

export default App;

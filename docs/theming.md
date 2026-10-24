# Tema claro/oscuro en React: guía paso a paso

Esta guía muestra cómo implementar un tema claro/oscuro que funcione en toda una aplicación React, persista la elección y se integre con Tailwind CSS. Está pensada para poder adaptar los pasos a otros proyectos.

En este repositorio, `ThemeProvider` gestiona `light | dark`, guarda la elección en `localStorage` y aplica la clase `dark` al elemento `<html>`. Los estilos se escriben con utilidades de Tailwind y tokens CSS.

## 1. Define el modelo y la preferencia guardada

Empieza con dos valores explícitos y una clave de almacenamiento estable. Comprueba el valor leído: `localStorage` puede contener datos antiguos o estar bloqueado por el navegador.

```ts
export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'my-app:theme';
const DEFAULT_THEME: Theme = 'light';

export function readTheme(): Theme {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (value === 'light' || value === 'dark') return value;
  } catch {
    // Continúa con el tema por defecto si el almacenamiento no está disponible.
  }
  return DEFAULT_THEME;
}
```

Si quieres usar la preferencia del sistema operativo cuando aún no hay una elección guardada, incorpórala como una regla única de inicialización y úsala tanto en React como en el script de carga inicial.

## 2. Crea el contexto, proveedor y hook

El contexto debe exponer el valor actual, una función para establecerlo y otra para alternarlo:

```ts
interface ThemeContextValue {
  theme: Theme;
  dark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
```

Inicializa el estado desde `readTheme()`. Cuando cambie, actualiza la clase raíz y persiste la elección:

```tsx
const [theme, setTheme] = useState<Theme>(() => readTheme());

useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // La app sigue funcionando aunque no se pueda guardar la preferencia.
  }
}, [theme]);

const toggleTheme = () => {
  setTheme((current) => (current === 'light' ? 'dark' : 'light'));
};
```

Expón el contexto mediante un hook como `useTheme()`. Haz que el hook lance un error descriptivo si se usa fuera de `ThemeProvider`; así se detecta una configuración incorrecta pronto.

## 3. Envuelve la aplicación

Monta el proveedor por encima de los layouts y las rutas, normalmente en `main.tsx`:

```tsx
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
```

En este repositorio se monta junto a `LanguageProvider` en `zenith-react/src/main.tsx`.

## 4. Configura Tailwind CSS

Con Tailwind CSS v4, declara la variante para que `dark:` dependa de la clase `.dark` en el documento, no solo del sistema operativo:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

Ahora puedes definir juntos los estilos de ambos temas:

```tsx
<section className="border border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
  ...
</section>
```

El tema claro es el estilo base; añade el par `dark:` para cada superficie, texto, borde e interacción que deba cambiar. No uses `dark:` como sustituto de un estado de componente (por ejemplo, seleccionado o deshabilitado).

### Áreas que deben permanecer claras

Si una parte de la interfaz debe conservar su aspecto claro aunque el documento esté en modo oscuro, puedes definir un alcance local. En este repositorio se usa `data-theme="light"` para los ejemplos de Landing y Authentication. La variante personalizada excluye sus descendientes:

```css
@custom-variant dark (&:where(.dark, .dark *):not([data-theme="light"] *));
```

```tsx
<div data-theme="light">
  <ExamplePage />
</div>
```

Este selector afecta a las utilidades `dark:` dentro de ese subárbol; no cambia el estado React del proveedor.

## 5. Añade un control para cambiar el tema

Conecta un botón o switch al contexto. El control debe indicar la acción y el estado de forma accesible:

```tsx
const { dark, toggleTheme } = useTheme();

<button
  type="button"
  onClick={toggleTheme}
  aria-label={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
>
  {dark ? 'Tema claro' : 'Tema oscuro'}
</button>
```

Colócalo en un lugar persistente, como la barra superior. Al recargar, el tema debe mantenerse porque el proveedor restaura la preferencia guardada.

## 6. Define una pequeña escala de superficies

Evita asignar colores oscuros de forma aislada. Define niveles y reutilízalos:

| Nivel | Ejemplo en Zenith UI | Uso habitual |
|---|---|---|
| Base | `--color-dark-base: #141417` | fondo general, barra lateral |
| Elevada | `--color-dark-raised: #16171d` | tarjetas, menús |
| Superpuesta | `--color-dark-overlay: #1b1c22` | campos y capas flotantes |
| Hover | `--color-dark-hover: #1f2026` | estado hover |
| Focus | `--color-dark-focus: #20222a` | controles enfocados |
| Borde | `--color-dark-border: #272930` | divisores y contornos |

En Tailwind v4 puedes registrar tokens con `@theme` y consumirlos como utilidades. Mantén el contraste de texto y controles como criterio principal; el azul de marca y los colores semánticos pueden necesitar tonos distintos en dark.

## 7. Evita el destello de tema al cargar

Si el navegador dibuja la página antes de que React restaure el estado, puede aparecer brevemente el tema equivocado. Un script pequeño en el `<head>` puede aplicar `.dark` antes del primer render:

```html
<script>
  try {
    const savedTheme = localStorage.getItem('my-app:theme');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  } catch {}
</script>
```

El script y el proveedor deben usar la misma clave y la misma regla por defecto. Si el script consulta `prefers-color-scheme` pero React arranca en `light`, ambos pueden discrepar hasta que se ejecute el efecto.

## 8. Prueba el tema

1. Cambia entre claro y oscuro desde el control real de la aplicación.
2. Recorre páginas, formularios, menús, modales y estados de error/carga.
3. Recarga y confirma que la elección se conserva.
4. Revisa contraste de texto, bordes, placeholders, foco y hover.
5. Si hay subárboles fijos en claro, verifica el comportamiento de `data-theme="light"`.

En Zenith UI la clave actual es `zenith-dash:theme`, el valor inicial del proveedor es `light` y el control está en `Topbar`. Para adaptar esta guía, sustituye el nombre y la clave por los de tu aplicación.

### Archivos de referencia de Zenith UI

- Estado y persistencia: `zenith-react/src/shared/components/theme/ThemeProvider.tsx`
- Contrato del contexto: `zenith-react/src/shared/components/theme/ThemeContext.tsx`
- Hook: `zenith-react/src/shared/hooks/useTheme.ts`
- Variante y tokens: `zenith-react/src/index.css`
- Montaje del proveedor: `zenith-react/src/main.tsx`
- Script de carga inicial: `zenith-react/index.html`

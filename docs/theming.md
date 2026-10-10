# Sistema de Temas (Dark / Light) — Zenith Dash

Adaptación a React + Vite del sistema documentado en
`task-app/user-web-portal/docs/theming.md`. Diferencias clave: sin backend
(persistencia en `localStorage`), contexto de React en vez de signals de
Angular, y rampa dark unificada tomada del diseño topbar.

## 1. Arquitectura

```
ThemeProvider (contexto React)
  └─ state theme: 'light' | 'dark' (default 'light')
  └─ useEffect → document.documentElement.classList.toggle('dark')
  └─ persiste en localStorage["zenith-dash:theme"]
  └─ index.html trae script anti-flash (aplica la clase antes del render)

<html class="dark">  →  Tailwind v4 @custom-variant dark  →  clases dark:*
```

Pilares:

1. **Persistencia**: `localStorage`, clave `zenith-dash:theme`.
2. **Estado global**: `ThemeContext` (`shared/components/theme/ThemeProvider.tsx`),
   consumo vía `useTheme()` (`shared/hooks/useTheme.ts`).
3. **Efecto**: alterna la clase `dark` en `<html>` y guarda el valor.
4. **Tailwind v4**: `@custom-variant dark (&:where(.dark, .dark *))` en
   `src/index.css` — el `dark:` responde a la clase, no al SO.
5. **Toggles reales**: botón de tema en `TopbarActions` y switch "Modo Oscuro"
   en `ProfileMenuPopover`, ambos conectados a `toggleTheme()`.

## 2. Rampa dark unificada

Se usa **un solo tono** (rampa del diseño topbar) en todo el sistema:

| Token (`@theme`) | Valor | Uso |
|---|---|---|
| `dark-base` | `#141417` | sidebar, topbar, layout |
| `dark-raised` | `#16171d` | popovers, flyouts, cards |
| `dark-overlay` | `#1b1c22` | inputs idle, headers (`#1b1c23` absorbido) |
| `dark-hover` | `#1f2026` | hovers, botones secundarios |
| `dark-focus` | `#20222a` | inputs en focus |
| `dark-border` | `#272930` | bordes y separadores |

Acentos literales de los diseños (iguales en sidebar y topbar, no se tocan):
iconos activos `blue-400`, L3 activo `blue-950/60` + `blue-800/40`,
`emerald/amber/red-400`, badge `bg-[#22c55e]`, bordes de popovers
`slate-700/80`, avatar `stone-700`.

## 3. Mapa de conversión aplicado

| Light | Dark |
|---|---|
| `bg-white` (superficies) | `dark:bg-dark-base` / `dark:bg-dark-raised` (popovers) |
| `bg-slate-100` (inputs) | `dark:bg-dark-overlay` |
| `bg-slate-50`, `hover:bg-slate-50/100` | `dark:hover:bg-dark-hover` |
| `text-slate-900` (títulos) | `dark:text-white` |
| `text-slate-800/700/600` | `dark:text-slate-200/300` |
| `text-slate-500` | `dark:text-slate-400` |
| `border-slate-100/200` | `dark:border-dark-border` |
| `shadow-2xl/xl` (popovers) | `dark:shadow-none` (el borde sustituye la sombra) |
| guías de árbol `#e2e8f0` | variable `--tree-line` → `:root.dark #272930` |
| scrollbars `rgba(156,163,175,.3)` | `:root.dark rgba(75,85,99,.4)` |

## 4. Cómo agregar dark mode a un componente nuevo

1. Identificar los colores light del componente.
2. Aplicar el mapa de arriba con pares `dark:` (siempre en pares).
3. Verificar en el navegador alternando la clase `dark` en `<html>` (DevTools).
4. Probar el toggle real (topbar o menú de perfil) y recargar (persistencia).

## 5. Reglas de oro

1. Cada clase light lleva su par `dark:`.
2. En dark, las sombras se reemplazan por bordes (`dark:shadow-none`).
3. El acento azul de interactivos no se toca (solo cambia de tono donde el
   diseño lo indica, ej. icono `blue-600` → `dark:text-blue-400`).
4. Las opacidades se heredan (`bg-slate-50/70` → `dark:bg-dark-overlay/60`).
5. Probar ambos modos antes de dar por terminado (texto ilegible, bordes
   perdidos y restos de `tree-line-light` son los errores típicos).

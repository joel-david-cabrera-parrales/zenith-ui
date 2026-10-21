import { createContext } from "react";

type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  dark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

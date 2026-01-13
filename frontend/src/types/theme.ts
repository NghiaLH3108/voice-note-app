export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemContextProps {
    theme: ThemeMode;
    isDark: boolean;
    setTheme: (mode: ThemeMode) => void;
}
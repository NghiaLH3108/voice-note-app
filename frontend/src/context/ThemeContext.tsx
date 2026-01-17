import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { useColorScheme as useSystemScheme } from 'react-native';
import { ThemContextProps, ThemeMode } from '../types/theme';
import { updateThemeApi } from '../api/user.api';

export const ThemeContext = createContext<ThemContextProps>(null as any);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useSystemScheme();
  const { setColorScheme } = useColorScheme();

  const [theme, setThemeState] = useState<ThemeMode>('system');

  const applyTheme = async (mode: ThemeMode, sync = true) => {
    setThemeState(mode);
    await AsyncStorage.setItem('theme', mode);

    const appliedScheme = mode === 'system' ? systemScheme ?? 'light' : mode;

    setColorScheme(appliedScheme === 'unspecified' ? 'light' : appliedScheme);

    if (sync) {
      try {
        await updateThemeApi(mode);
      } catch (err) {
        console.warn('Update theme failed');
      }
    }
  };

  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        applyTheme(savedTheme as ThemeMode, false);
      }
    })();
  }, []);

  const isDark =
    theme === 'dark' || (theme === 'system' && systemScheme === 'dark');

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

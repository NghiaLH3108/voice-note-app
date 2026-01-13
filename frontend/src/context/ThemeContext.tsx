import React, { createContext, useContext, useState, useEffect, Children } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { ThemContextProps, ThemeMode } from '../types/theme';

const ThemeContext = createContext<ThemContextProps>(null as any);

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    const systemScheme = Appearance.getColorScheme();
    const { setColorScheme } = useColorScheme();

    const [ theme, setThemeState ] = useState<ThemeMode>('system');

    const applyTheme = (mode: ThemeMode) => {
        setThemeState(mode);
        AsyncStorage.setItem('theme', mode);

        if (mode === 'system') {
            setColorScheme(systemScheme === 'dark' ? 'dark' : 'light');
        } else {
            setColorScheme(mode);
        }
    };

    useEffect(() => {
        (async () => {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme) {
                applyTheme(savedTheme as ThemeMode);
            } else {
                applyTheme('system');
            }
        })();
    }, []);

    const isDark = theme ==='dark' || (theme === 'system' && systemScheme === 'dark');

    return (
        <ThemeContext.Provider value={{ theme, isDark, setTheme: applyTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
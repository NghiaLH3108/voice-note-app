import api from "./api";

export const updateThemeApi = (theme: 'light' | 'dark' | 'system') => api.put('/user/theme', { theme });
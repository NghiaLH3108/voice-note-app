import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api/api';
import { User } from '../types/user';
import { loginApi } from '../api/auth.api';


export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(null as any);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');

      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      }
    } finally {
      setLoading(false);
    }
  };

  // AUTO LOGIN
  useEffect(() => {
    loadUser();
  }, []);

  // LOGIN
  const login = async (email: string, password: string) => {
    const res = await loginApi(email.trim(), password);

    const { token, user } = res.data;

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    setUser(user);
  };

  // LOGOUT
  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(['token', 'user']);
    } catch (error) {
      console.warn('Logout error:', error);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

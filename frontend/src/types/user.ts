export interface User {
  id: number;
  fullName: string;
  email: string;
  avatar?: string | null;
  theme?: 'light' | 'dark' | 'system';
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

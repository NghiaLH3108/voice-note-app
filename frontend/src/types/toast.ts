export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top' | 'bottom';

export interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
  position: ToastPosition;  
};
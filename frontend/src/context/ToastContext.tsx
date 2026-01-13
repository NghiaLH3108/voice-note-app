import React, { createContext, useContext, useState } from 'react';
import { ToastItem, ToastPosition, ToastType } from '../types/toast';
import Toast from '../components/common/Toast';
import { View } from 'react-native';

interface ToastContextProps {
    queue: ToastItem[];
    showToast: (
        type: ToastType,
        message: string,
        position?: ToastPosition
    ) => void;
    removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps>(null as any);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [queue, setQueue] = useState<ToastItem[]>([]);

    const showToast = (
        type: ToastType,
        message: string,
        position: ToastPosition = 'top'
    ) => {
        const id = Date.now();
        setQueue(prev => [...prev, { id, type, message, position }]);
    };

    const removeToast = (id: number) => {
        setQueue(prev => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ queue, showToast, removeToast }}>
            {children}
        </ToastContext.Provider>
        
    );
};

export const useToastContext = () => useContext(ToastContext);

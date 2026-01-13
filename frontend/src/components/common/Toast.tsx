import { Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeInUp, FadeOutDown, FadeOutUp } from 'react-native-reanimated';
import React, { useEffect, useMemo } from 'react';
import { ToastItem } from '../../types/toast';
import Icon from '@react-native-vector-icons/ionicons';

const styles = {
  success: { bg: 'bg-success', icon: 'checkmark-circle' },
  error: { bg: 'bg-error', icon: 'alert-circle' },
  warning: { bg: 'bg-warning', icon: 'warning' },
  info: { bg: 'bg-info', icon: 'information-circle' },
} as const;

export default function Toast({ 
    toast, 
    index, 
    onDismiss 
}: {
    toast: ToastItem; 
    index: number;
    onDismiss: (id: number) => void;
}) {
    const { id, type, message, position } = toast;
    const style = styles[type];

    useEffect(() => {
        const timer = setTimeout(() => onDismiss(id), 2000);
        return () => clearTimeout(timer);
    }, []);

    const offset = index * 70 + 40;

    const containerStyle = position === 'top'
        ? { top: offset }
        : { bottom: offset };

    const entering = position === 'top' ? FadeInDown : FadeInUp;
    const exiting = position === 'top' ? FadeOutUp : FadeOutDown;

    return (
        <Animated.View
            entering={entering}
            exiting={exiting}
            style={containerStyle}
            className={`absolute left-4 right-4 ${style.bg} rounded-xl p-4 flex-row items-center`}
        >
            <Icon name={style.icon} size={24} color="white" />
            <Text className="flex-1 text-white text-base font-medium ml-3">
                {message}
            </Text>
            <TouchableOpacity onPress={() => onDismiss(id)}>
                <Icon name="close" size={22} color="white" />
            </TouchableOpacity>
        </Animated.View>
    );
}
import { View } from "react-native";
import Toast from "./Toast";
import { useToast } from "../../hooks/useToast";

export const ToastHost = () => {
    const { queue, removeToast } = useToast();

    return (
        <View className="absolute inset-0" pointerEvents="box-none">
            {queue.map((toast, index) => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    index={index}
                    onDismiss={() => removeToast(toast.id)}
                    />
                ))}
        </View>
    );
};
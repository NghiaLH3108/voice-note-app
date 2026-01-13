import { View } from "react-native";
import { useToastContext } from "../../context/ToastContext";
import Toast from "./Toast";

export const ToastHost = () => {
    const { queue, removeToast } = useToastContext();

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
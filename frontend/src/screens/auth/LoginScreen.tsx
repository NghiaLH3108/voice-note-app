import { Text, View } from "react-native";
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useToast } from "../../hooks/useToast";
import { useEffect } from "react";

export default function LoginScreen() {
    const { showToast } = useToast();
    const testQueue = () => {
        showToast('info', 'Uploading audio...', 'top');
        setTimeout(() => showToast('success', 'Audio uploaded', 'top'), 300);
        setTimeout(() => showToast('success', 'Note saved', 'top'), 600);
        setTimeout(() => showToast('warning', 'Sync pending', 'top'), 900);
    };

    useEffect(() => {
        testQueue();
    }, []);
    return (
        <SafeAreaProvider>
            <View className="flex-1 items-center justify-center bg-green">
                <Text className="text-xl font-bold text-white-500">
                    Login Screen!
                </Text>
            </View>
        </SafeAreaProvider>
    );
}
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RegisterScreen() {
    return (
        <SafeAreaProvider>
                    <View className="flex-1 items-center justify-center bg-green">
                        <Text className="text-xl font-bold text-white-500">
                            Register Screen!
                        </Text>
                    </View>
                </SafeAreaProvider>
    );
}
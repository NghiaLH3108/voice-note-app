import { Text, TouchableOpacity, View } from "react-native";
import { useToast } from "../../hooks/useToast";
import { useEffect } from "react";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

export default function LoginScreen({ navigation }: any) {
    const { showToast } = useToast();
    // const testQueue = () => {
    //     showToast('info', 'Uploading audio...', 'top');
    //     setTimeout(() => showToast('success', 'Audio uploaded', 'top'), 300);
    //     setTimeout(() => showToast('success', 'Note saved', 'top'), 600);
    //     setTimeout(() => showToast('warning', 'Sync pending', 'top'), 900);
    // };

    const handleLogin = () => {};
    const navigateRegister = () => navigation.navigate('Register');

    useEffect(() => {
        // testQueue();
    }, []);
    return (
        <View className="flex-1 bg-white">
            <View className="mt-10 py-4 px-8">
                <Text className="text-4xl font-bold mt-28">
                    Let's Login
                </Text>
                <Text className="text-lg top-2 font-regular">
                    And notes your idea
                </Text>
            </View>
            <View className="mt-8 py-4 px-8 mb-10">
                <InputField
                    label="Email Address"
                    placeholder="Example: jonhdoe@gmail.com"
                    caption="Invalid email"/>
                <InputField
                    label="Password"
                    placeholder="******"
                    caption="Invalid password"/>
                <Button
                    title="Login"
                    onPress={handleLogin}
                />
                
                <View className="flex-row justify-center">
                    <Text className="text-xl font-medium text-primary dark:text-white">
                        Don’t have any account?
                    </Text>

                    <TouchableOpacity onPress={navigateRegister}>
                        <Text className="ml-1 text-xl font-medium text-primary dark:text-white">
                            Register here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
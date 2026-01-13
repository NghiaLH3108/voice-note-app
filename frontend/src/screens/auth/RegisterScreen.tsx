import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

export default function RegisterScreen({ navigation }: any) {
    const handleRegister = () => {};
    const navigateLogin = () => navigation.goBack();
    return (
            <View className="flex-1 bg-white">
                <View className="mt-10 py-4 px-8">
                    <Text className="text-4xl font-bold mt-28">
                        Register
                    </Text>
                    <Text className="text-lg top-2 font-regular">
                        And start taking notes
                    </Text>
                </View>
                <View className="mt-8 py-4 px-8 mb-10">
                    <InputField
                        label="Full Name"
                        placeholder="Example: Jonh Doe"
                        caption="Invalid Name"/>
                    <InputField
                        label="Email Address"
                        placeholder="Example: jonhdoe@gmail.com"
                        caption="Invalid email"/>
                    <InputField
                        label="Password"
                        placeholder="******"
                        caption="Invalid password"/>
                    <Button
                        title="Register"
                        onPress={handleRegister}
                    />
                    
                    <View className="flex-row justify-center">
                        <Text className="text-xl font-medium text-primary dark:text-white">
                        Already have an account?
                        </Text>
    
                        <TouchableOpacity onPress={navigateLogin}>
                        <Text className="ml-1 text-xl font-medium text-primary dark:text-white">
                            Login here
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
}
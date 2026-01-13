import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images, Icons } from '../../constants';

export default function OnboardingScreen({ navigation }: any) {
    
    const handleGetStarted = () => {
        navigation.replace('Login');
    }
        
    return (
        <View className="flex-1 bg-primary dark:bg-dark px-6 justify-between">
        {/* Spacer top */}
        <View />

        {/* Image center */}
        <View className="items-center">
            <Image
            source={Images.getStartedLightMode}
            resizeMode="contain"
            className="w-72 h-72"
            />
        </View>

        <View className="space-y-2">
            <Text className="text-white dark:text-white text-3xl font-bold">
            Jot Down anything you want to
            </Text>
            <Text className="text-white dark:text-white text-3xl font-bold">
            achieve, today or in the future
            </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
            onPress={handleGetStarted}
            className="h-14 rounded-full bg-white dark:bg-lightGrey flex-row items-center justify-center mb-10"
        >
            <Text className="text-primary text-lg font-semibold mr-2">
            Let’s Get Started
            </Text>
            <Image
            source={Icons.arrowRight}
            resizeMode="contain"
            className="w-5 h-5"
            />
        </TouchableOpacity>
        </View>
    );
}
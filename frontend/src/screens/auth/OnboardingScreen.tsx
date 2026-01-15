import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Images, Icons } from '../../constants';
import Button from '../../components/common/Button';

export default function OnboardingScreen({ navigation }: any) {
  const handleGetStarted = () => {
    navigation.replace('Login');
  };

  return (
    <View className="flex-1 bg-primary dark:bg-dark px-8 justify-between">
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
          Jot Down anything you want
        </Text>
        <Text className="text-white dark:text-white text-3xl font-bold">
          to achieve, today or in the future
        </Text>
      </View>

      <Button
        title="Let's Get Started"
        onPress={handleGetStarted}
        bgColor="bg-white"
        textColor="text-black dark:bg-dark"
        iconColor="primary"
      />
    </View>
  );
}

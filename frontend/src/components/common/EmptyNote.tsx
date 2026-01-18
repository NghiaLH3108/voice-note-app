import { Image, Text, View } from "react-native";
import { Images } from "../../constants";

export default function EmptyNote() {
  return (
    <View className="flex-1 items-center justify-center mt-40">
      <Image
        source={Images.zeroNote}
        resizeMode="contain"
        className="w-72 h-72"
      />
      <View className="items-center space-y-2">
        <Text className="text-dark dark:text-white text-3xl font-bold mb-5">
          Start Your Journey
        </Text>
        <Text className="text-darkGrey dark:text-white text-lg font-regular">
          Every big step start with small step.
        </Text>
        <Text className="text-darkGrey dark:text-white text-lg font-regular">
          Notes your first idea and start your journey!
        </Text>
      </View>
    </View>
  );
}

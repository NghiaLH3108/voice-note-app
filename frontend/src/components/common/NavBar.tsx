import { Text, TouchableOpacity, View } from "react-native";
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from "../../constants";

interface NavBarProps {
  navigation: any;
  title?: string;
  showBack?: boolean;
  backLabel?: string;
  rightText?: string;
  onRightPress?: () => void;
}

export default function NavBar({
  navigation,
  title = '',
  showBack = true,
  backLabel = 'Back to Login',
  rightText,
  onRightPress,
}: NavBarProps) {
  return (
    <View className="absolute h-28 flex-row items-center justify-between py-4 px-6 bg-white">
      {/* LEFT */}
      <View className="flex-row items-center">
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-row items-center"
          >
            <Icon name="chevron-back" size={22} color={colors.primary} />
            <Text className="ml-3 text-xl font-medium text-primary dark:text-white">{backLabel}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* CENTER */}
      <Text className="text-base font-semibold text-dark">{title}</Text>

      {/* RIGHT */}
      <View>
        {rightText && (
          <TouchableOpacity onPress={onRightPress}>
            <Text className="text-primary text-sm font-medium">
              {rightText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';

interface NavBarProps {
  navigation: any;
  title?: string;
  boxShadow?: boolean;
  showBack?: boolean;
  backLabel?: string;
  rightText?: string;
  onRightPress?: () => void;
}

export default function NavBar({
  navigation,
  title = '',
  boxShadow = false,
  showBack = true,
  backLabel = 'Back to Login',
  rightText,
  onRightPress,
}: NavBarProps) {
  return (
    <View className="absolute top-0 right-0 left-0 bg-white dark:bg-dark">
      <View className="h-24 pt-8 px-6 flex-row items-center justify-between">
        {/* LEFT */}
        <View className="flex-row items-center">
          {showBack && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="flex-row items-center"
            >
              <Icon name="chevron-back" size={22} color={colors.primary} />
              <Text className="ml-3 text-xl font-medium text-primary dark:text-white">
                {backLabel}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* CENTER */}
        <Text className="text-xl font-semibold text-black dark:text-white">
          {title}
        </Text>

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
      {boxShadow && <View className="h-0.5 bg-black/10 dark:bg-white/10" />}
    </View>
  );
}

import { Text, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';

export function TabItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: any;
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center justify-center"
      activeOpacity={0.7}
    >
      <Icon
        name={icon}
        size={26}
        color={active ? colors.primary : colors.darkGrey}
      />
      <Text
        className={`mt-1 text-sm ${active ? 'text-primary dark:text-white' : 'text-darkGrey dark:text-baseGrey'}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

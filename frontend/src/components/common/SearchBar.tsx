import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onPressMenu?: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  onPressMenu,
}: SearchBarProps) {
  return (
    <View>
      <View className="flex-row items-center px-4 py-3 bg-white dark:bg-dark">
        <View className="flex-1 flex-row items-center bg-lightGrey dark:bg-white rounded-xl px-4 h-12">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.darkGrey}
            className="flex-1 ml-2 text-base text-darkGrey"
            returnKeyType="search"
          />
          {value.length > 0 && (
            <TouchableOpacity onPress={() => onChangeText('')}>
              <Icon name="close-circle" size={18} color={colors.darkGrey} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={onPressMenu} className="ml-4" hitSlop={10}>
          <Icon name="menu" size={26} color={colors.darkGrey} />
        </TouchableOpacity>
      </View>
      <View className="h-px bg-lightGrey" />
    </View>
  );
}

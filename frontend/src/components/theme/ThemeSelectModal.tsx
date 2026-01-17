import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { useTheme } from '../../hooks/useTheme';
import { colors } from '../../constants';

const OPTIONS = [
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
  { key: 'system', label: 'System' },
] as const;

export default function ThemeSelectModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const { theme, setTheme } = useTheme();

  const handleSelect = (value: typeof theme) => {
    setTheme(value, true);
    onClose();
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
    >
      <View className="flex-1 bg-black/40 justify-center items-center">
      <View className="absolute top-96 right-5 bg-white dark:bg-dark w-[180px] rounded-2xl px-6 py-6">
        {/* <Text className="text-xl font-bold text-center mb-6 dark:text-white">
          App Theme
        </Text> */}

        {OPTIONS.map(option => (
          <TouchableOpacity
            key={option.key}
            onPress={() => handleSelect(option.key)}
            className="flex-row items-center justify-between py-3"
          >
            <Text className="text-lg dark:text-white">{option.label}</Text>

            {theme === option.key && (
              <Icon name="checkmark" size={22} color={colors.black} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </Modal>
  );
}

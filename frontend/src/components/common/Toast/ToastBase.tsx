import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../../constants';

const styles = {
  success: { bg: colors.success, icon: 'checkmark-circle' },
  error: { bg: colors.error, icon: 'alert-circle' },
  warning: { bg: colors.warning, icon: 'warning' },
  info: { bg: colors.info, icon: 'information-circle' },
} as const;

interface ToastBaseProps {
  type: keyof typeof styles;
  message: string;
  onClose: () => void;
}

export default function ToastBase({ type, message, onClose }: ToastBaseProps) {
  const style = styles[type];

  return (
    <View
      style={{
        backgroundColor: style.bg,
        marginHorizontal: 16,
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {/* Icon trái */}
      <Icon name={style.icon} size={24} color="white" />

      {/* Text */}
      <Text
        style={{
          flex: 1,
          color: 'white',
          fontSize: 16,
          fontWeight: '500',
          marginLeft: 12,
        }}
      >
        {message}
      </Text>

      {/* Close */}
      <TouchableOpacity onPress={onClose}>
        <Icon name="close" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}

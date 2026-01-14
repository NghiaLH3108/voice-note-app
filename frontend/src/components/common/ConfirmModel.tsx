import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  description: string;
  leftText?: string;
  rightText?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  onClose?: () => void;
}

export default function ConfirmModal({
  visible,
  title,
  description,
  leftText = 'Cancel',
  rightText = 'Confirm',
  onLeftPress,
  onRightPress,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      className='absolute inset-0'
    >
      <View className="flex-1 bg-black/40 items-center justify-center">
        <View className="w-72 h-56 bg-white dark:bg-primary rounded-2xl px-8 py-6 justify-between">
          <View className="items-center">
            <Text className="text-xl font-bold text-black dark:text-white text-center">
              {title}
            </Text>
            <Text className="mt-2 text-base text-darkGrey dark:text-lightGrey text-center">
              {description}
            </Text>
          </View>

          <View className="h-12" />

          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={onLeftPress}
              className="flex-1 mr-3 border border-primary dark:border-white rounded-xl py-3 items-center"
            >
              <Text className="text-primary dark:text-white font-medium">
                {leftText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onRightPress}
              className="flex-1 ml-3 bg-primary dark:bg-white rounded-xl py-3 items-center"
            >
              <Text className="text-white dark:text-primary font-medium">
                {rightText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

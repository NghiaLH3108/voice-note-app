import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';

interface NoteCardProps {
  title: string;
  content: string;
  date: string;
  hasAudio?: boolean;
  hasImage?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
}

export default function NoteCard({
  title,
  content,
  date,
  hasAudio = false,
  hasImage = false,
  onPress,
  onDelete,
}: NoteCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="bg-noteLight dark:bg-noteDark rounded-2xl p-4 mx-4 mt-4"
    >
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Text
          className="text-base font-bold text-noteDark dark:text-noteLight flex-1 p-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={onDelete} hitSlop={10}>
          <Icon name="close" size={20} color={colors.darkGrey} />
        </TouchableOpacity>
      </View>

      <View className="h-px bg-darkGrey dark:bg-lightGrey opacity-40" />

      {/* Content */}
      <Text
        className="mt-2 p-2 text-sm text-noteDark dark:text-noteLight"
        numberOfLines={3}
      >
        {content}
      </Text>

      {/* Footer */}
      <View className="mt-4 p-2 flex-row items-center justify-between">
        <Text className="text-xs text-noteDark dark:text-noteLight">
          {date}
        </Text>
        <View className="flex-row items-center justify-between w-12">
          {hasAudio && (
            <Icon
              name="volume-high-outline"
              size={18}
              color={colors.darkGrey}
            />
          )}
          {hasImage && (
            <Icon name="image-outline" size={18} color={colors.darkGrey} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

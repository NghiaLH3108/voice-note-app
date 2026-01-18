import { Text, TouchableOpacity, View } from 'react-native';
import AudioPlayer from './AudioPlayer';

type Props = {
  audios: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export default function AudioList({ audios, onAdd, onRemove }: Props) {
  return (
    <View className="gap-3">
        {audios.map((uri, index) => (
          <AudioPlayer key={uri} uri={uri} onRemove={() => onRemove(index)} />
        ))}
      {audios.length < 6 && (
        <TouchableOpacity onPress={onAdd}>
          <Text className="text-primary dark:text-white font-medium">
            + Add Audio ({audios.length}/5)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

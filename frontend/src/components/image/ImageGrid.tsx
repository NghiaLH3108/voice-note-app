import { Text, TouchableOpacity, View } from 'react-native';
import ImageReview from './ImagePreview';

type Props = {
  images: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export default function ImageGrid({ images, onAdd, onRemove }: Props) {
  return (
    <View className="gap-3">
      <View className="flex-row flex-wrap justify-between gap-y-3">
        {images.map((uri, index) => (
          <ImageReview key={uri} uri={uri} onRemove={() => onRemove(index)} />
        ))}
      </View>
      {images.length < 6 && (
        <TouchableOpacity onPress={onAdd}>
          <Text className="text-primary dark:text-white font-medium">
            + Add Image ({images.length}/5)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

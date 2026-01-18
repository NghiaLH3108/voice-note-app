import { Image, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';

type Props = {
  uri: string;
  onRemove: () => void;
};

export default function ImageReview({ uri, onRemove }: Props) {
  return (
    <View className="relative w-[48%] aspect-4/3 rounded-xl overflow-hidden">
      <Image source={{ uri }} className="w-full h-full" />

      <TouchableOpacity
        onPress={onRemove}
        className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
      >
        <Icon name="close" size={16} color={colors.darkGrey} />
      </TouchableOpacity>
    </View>
  );
}

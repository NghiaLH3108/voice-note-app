import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from "../../constants";

type Props = {
    uri: string;
    onRemove: () => void;
}

export default function AudioPlayer({ uri, onRemove }: Props) {
    // const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = async () => {};

    return (
        <View className="flex-row items-center gap-3 bg-baseGrey dark:bg-lightGrey rounded-xl px-4 py-3">
            <TouchableOpacity onPress={togglePlay}>
                <Icon name={playing ? "pause" : "play"} size={22} color={colors.darkGrey}/>
            </TouchableOpacity>

            <Text className="flex-1 text-darkGrey">00:00</Text>

            <TouchableOpacity onPress={onRemove}>
                <Icon name="close" size={22} color={colors.darkGrey}/>
            </TouchableOpacity>
        </View>
    )
}
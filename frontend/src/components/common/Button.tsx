import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images, Icons } from '../../constants';
import Icon from '@react-native-vector-icons/ionicons';

type IoniconName = React.ComponentProps<typeof Icon>['name'];

interface ButtonProps {
    title: string;
    onPress: () => void;
    bgColor?: string;
    textColor?: string;
    iconName?: IoniconName;
    iconColor?: string;
    disabled?: boolean;
}

export default function Button({
    title,
    onPress,
    bgColor = 'bg-primary dark:bg-dark',
    textColor = 'text-white dark:text-dark',
    iconName = 'arrow-forward',
    iconColor = 'white',
    disabled = false,
}: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            disabled={disabled}
            onPress={onPress}
            className={`
                h-14 rounded-full px-6 flex-row items-center justify-center mb-10
                ${bgColor}
                ${disabled ? 'opacity-50' : ''}
                `}
        >
            <Text className={`text-lg font-medium ${textColor}`}>
                {title}
            </Text>

            {iconName && (
                <View className="ml-3 absolute right-5">
                    <Icon name={iconName} size={22} color={iconColor} />
                </View>
            )}

            {/* <Image
            source={Icons.arrowRight}
            resizeMode="contain"
            className="w-5 h-5"
            /> */}
        </TouchableOpacity>
    );
}
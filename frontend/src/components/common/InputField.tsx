import { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputFieldProps extends TextInputProps {
    label: string;
    caption?: string;
    error?: boolean;
}

export default function InputFile({
    label,
    caption,
    error = false,
    value,
    ...props
}: InputFieldProps) {
    const [ focused, setFocused ] = useState(false);

    const borderColor = error
        ? 'border-error'
        : focused
        ? 'border-primary'
        : 'border-baseGrey';

    const captionColor = error ? 'text-error' : 'text-baseGrey';

    return (
        <View className="mb-6">
            <Text className="mb-2 text-lg font-medium dark:text-white">
                {label}
            </Text>

            <View className={`rounded-xl border px-4 py-3 bg-white dark:bg-dark ${borderColor}`}>
                <TextInput
                    {...props}
                    value={value}
                    className="text-base text-dark dark:text-white"
                    placeholderTextColor="#C8C5CB"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </View>
            {caption && (
                <Text className={`mt-2 text-sm ${captionColor}`}>
                {caption}
                </Text>
            )}
        </View>
    );
}
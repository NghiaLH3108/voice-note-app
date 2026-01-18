import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import Icon from '@react-native-vector-icons/ionicons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabItem } from "./TabItem";



export default function CustomTabBar({
    state,
    navigation,
}: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    return (
        <View
            className="flex-row items-center justify-between bg-lightGrey dark:bg-primary py-5 px-20"
            style={{ paddingBottom: insets.bottom + 12, height: 90 + insets.bottom }}
        >
            {/* LEFT TAB */}
            <TabItem
                icon="document-text-outline"
                label="Notes"
                active={state.index === 0}
                onPress={() => navigation.navigate('Notes')}
            />

            {/* CENTER BUTTON */}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.getParent()?.navigate('CreateNote')}
                className="w-20 h-20 bg-primary dark:bg-white rounded-full items-center justify-center -mt-1shadow-lg"
            >
                <Icon name="add" size={32} color="white" />
            </TouchableOpacity>

            {/* RIGHT TAB */}
            <TabItem
                label="Profile"
                icon="person-outline"
                active={state.index === 2}
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}
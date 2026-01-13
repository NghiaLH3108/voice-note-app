import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigations";
import TabNavigator from "./TabNavigator";
import NoteDetailScreen from "../screens/notes/NoteDetailScreen";
import EditNoteScreen from "../screens/notes/EditNoteScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Tabs"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="NoteDetail"
                component={NoteDetailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="EditNote"
                component={EditNoteScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
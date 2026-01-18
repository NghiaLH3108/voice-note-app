import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types/navigations';
import TabNavigator from './TabNavigator';
import NoteDetailScreen from '../screens/notes/NoteDetailScreen';
import EditNoteScreen from '../screens/notes/EditNoteScreen';
import CreateNoteScreen from '../screens/notes/CreateNoteScreen';
import NavBar from '../components/common/NavBar';

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
        name="CreateNote"
        component={CreateNoteScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <NavBar
              navigation={navigation}
              backLabel="Back"
              title="New Note"
              rightText="Save"
              boxShadow={true}
            />
          ),
        })}
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

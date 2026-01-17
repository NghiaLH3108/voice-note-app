import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types/navigations';
import { colorScheme } from 'nativewind';
import { colors } from '../constants';
import NotesScreen from '../screens/notes/NotesScreen';
import CreateNoteScreen from '../screens/notes/CreateNoteScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import NavBar from '../components/common/NavBar';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="CreateNote" component={CreateNoteScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <NavBar 
            navigation={navigation} 
            title='Profile'
            boxShadow={true}
            showBack={false}
            backLabel=''
          />,
        })}
      />
    </Tab.Navigator>
  );
}

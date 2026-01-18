import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../types/navigations';
import { colors } from '../constants';
import NotesScreen from '../screens/notes/NotesScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import NavBar from '../components/common/NavBar';
import CustomTabBar from '../components/common/CustomTabBar';
import CreateNoteScreen from '../screens/notes/CreateNoteScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <NavBar
              navigation={navigation}
              title="Profile"
              boxShadow={true}
              showBack={false}
              backLabel=""
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

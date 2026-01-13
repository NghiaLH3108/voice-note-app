import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types/navigations";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import OnboardingScreen from "../screens/auth/OnboardingScreen";
import NavBar from "../components/common/NavBar";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    header: () => <NavBar navigation={navigation}/>,
                })}
            />
        </Stack.Navigator>
    );
}
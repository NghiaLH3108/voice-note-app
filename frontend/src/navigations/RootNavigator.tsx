import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default function RootNavigator() {
    const { user, loading} = useAuth();

    if (loading) return null;

    return (
        <NavigationContainer>
            {/* {user ? <AppNavigator/> : <AuthNavigator/>} */}
            <AppNavigator/>
        </NavigationContainer>
    );
}
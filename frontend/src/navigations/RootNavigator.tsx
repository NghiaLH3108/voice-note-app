import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../hooks/useAuth';

export default function RootNavigator() {
    const { user, loading} = useAuth();

    if (loading) return null;

    return (
        <NavigationContainer>
            {user ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}
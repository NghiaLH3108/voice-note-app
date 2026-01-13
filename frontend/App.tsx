/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './app/global.css';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import OnboardingScreen from './src/screens/auth/OnboardingScreen';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigations/RootNavigator';
import { ToastProvider } from './src/context/ToastContext';
import { ToastHost } from './src/components/common/ToastHost';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <RootNavigator />
            <ToastHost />
          </AuthProvider>
        </ToastProvider>
        {/* <SafeAreaProvider>
          <View className="flex-1 items-center justify-center bg-green">
            <Text className="text-xl font-bold text-white-500">
              Welcome to Nativewind!
            </Text>
          </View>
        </SafeAreaProvider> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

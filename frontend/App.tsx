/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './app/global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigations/RootNavigator';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/common/Toast/toastConfig';
import { ModelProvider } from './src/context/ModalContext';

function App() {
  return (
    <ModelProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <RootNavigator />
            <Toast config={toastConfig} />
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </ModelProvider>
  );
}

export default App;

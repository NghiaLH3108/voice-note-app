import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import {
  validateEmail,
  validatePassword,
} from '../../utils/validators';
import { useAuth } from '../../hooks/useAuth';
import Toast from 'react-native-toast-message';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState<{
    email?: string | null;
    password?: string | null;
  }>({});

  const handleLogin = async () => {
    if (loading) return;

    const trimmedData = {
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    const inputErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };
    if (inputErrors.email || inputErrors.password) {
      setErrors(inputErrors);
      return;
    }

    try {
      setLoading(true);

      await login(trimmedData.email, trimmedData.password);

      Toast.show({
        type: 'success',
        text1: 'Login successful',
        visibilityTime: 2000,
        autoHide: true,
      });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      Toast.show({
        type: 'error',
        text1: errorMessage,
        visibilityTime: 2000,
        autoHide: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const navigateRegister = () => navigation.navigate('Register');

  return (
    <View className="flex-1 bg-white">
      <View className="mt-10 py-4 px-8">
        <Text className="text-4xl font-bold mt-28">Let's Login</Text>
        <Text className="text-lg top-2 font-regular">And notes your idea</Text>
      </View>
      <View className="mt-8 py-4 px-8 mb-10">
        <InputField
          label="Email Address"
          value={formData.email}
          onChangeText={value => handleInputChange('email', value)}
          error={!!errors.email}
          placeholder="Example: jonhdoe@gmail.com"
          caption={errors.email}
        />
        <InputField
          label="Password"
          value={formData.password}
          onChangeText={value => handleInputChange('password', value)}
          error={!!errors.password}
          secureTextEntry
          placeholder="******"
          caption={errors.password}
        />
        <Button
          title={loading ? 'Processing...' : 'Login'}
          onPress={handleLogin}
          disabled={loading}
        />

        <View className="flex-row justify-center">
          <Text className="text-xl font-medium text-primary dark:text-white">
            Don’t have any account?
          </Text>

          <TouchableOpacity onPress={navigateRegister}>
            <Text className="ml-1 text-xl font-medium text-primary dark:text-white">
              Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

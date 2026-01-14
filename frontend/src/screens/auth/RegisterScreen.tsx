import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import {
  validateEmail,
  validateFullName,
  validatePassword,
} from '../../utils/validators';
import { useState } from 'react';
import { registerApi } from '../../api/auth.api';
import { useToast } from '../../hooks/useToast';

export default function RegisterScreen({ navigation }: any) {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
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
    fullName?: string | null;
    email?: string | null;
    password?: string | null;
  }>({});

  const handleRegister = async () => {
    if (loading) return;

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    const inputErrors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };
    if (inputErrors.fullName || inputErrors.email || inputErrors.password) {
      setErrors(inputErrors);
      return;
    }

    try {
      setLoading(true);

      await registerApi(trimmedData);

      showToast('success', 'Register successful');
      navigation.goBack();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Register failed';
      showToast('error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const navigateLogin = () => navigation.goBack();

  return (
    <View className="flex-1 bg-white">
      <View className="mt-10 py-4 px-8">
        <Text className="text-4xl font-bold mt-28">Register</Text>
        <Text className="text-lg top-2 font-regular">
          And start taking notes
        </Text>
      </View>
      <View className="mt-8 py-4 px-8 mb-10">
        <InputField
          label="Full Name"
          value={formData.fullName}
          onChangeText={value => handleInputChange('fullName', value)}
          error={!!errors.fullName}
          placeholder="Example: Jonh Doe"
          caption={errors.fullName}
        />
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
          title={loading ? 'Processing...' : 'Register'}
          onPress={handleRegister}
          disabled={loading}
        />

        <View className="flex-row justify-center">
          <Text className="text-xl font-medium text-primary dark:text-white">
            Already have an account?
          </Text>

          <TouchableOpacity onPress={navigateLogin}>
            <Text className="ml-1 text-xl font-medium text-primary dark:text-white">
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

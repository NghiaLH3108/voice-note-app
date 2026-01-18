import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useConfirmModel } from '../../context/ModalContext';
import { useAuth } from '../../hooks/useAuth';
import Icon from '@react-native-vector-icons/ionicons';
import { colors } from '../../constants';
import { useState } from 'react';
import ThemeSelectModal from '../../components/theme/ThemeSelectModal';
import { useTheme } from '../../hooks/useTheme';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { showConfirm } = useConfirmModel();
  const [openTheme, setOpenTheme] = useState(false);
  const { theme } = useTheme();

  const handleLogout = () => {
    showConfirm({
      title: 'Log Out',
      description: 'Are you sure you want to log out from the application?',
      leftText: 'Cancel',
      rightText: 'Yes',
      onConfirm: logout,
    });
  };

  return (
    <View className="flex-1 bg-white dark:bg-dark px-6 pt-10 mt-28">
      {/* ===== USER INFO ===== */}
      <View className="items-center">
        <View className="flex-row">
          <Image
            source={{ uri: user?.avatar ?? undefined }}
            className="w-24 h-24 rounded-full"
          />
          <View className="ml-8">
            <Text className="mt-4 text-2xl font-bold text-black dark:text-white">
              {user?.fullName}
            </Text>
            <View className="flex-row items-center mt-2">
              <Icon name="mail-outline" size={18} color={colors.baseGrey} />
              <Text className="ml-2 text-base text-baseGrey">
                {user?.email}
              </Text>
            </View>
          </View>
        </View>

        {/* Change Avatar */}
        <TouchableOpacity
          className="mt-6 w-full border border-primary dark:border-white rounded-full py-3 flex-row justify-center items-center"
          activeOpacity={0.7}
        >
          <Icon name="create-outline" size={20} color={colors.primary} />
          <Text className="ml-2 text-primary dark:text-white font-medium text-lg">
            Change Avatar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="h-px bg-lightGrey my-10" />

      {/* ===== APP SETTINGS ===== */}
      <Text className="text-lg text-baseGrey mb-4">APP SETTINGS</Text>

      {/* Theme */}
      <TouchableOpacity
        className="relative flex-row items-center justify-between pt-4"
        onPress={() => setOpenTheme(true)}
      >
        <View className="flex-row items-center">
          <Icon name="text-sharp" size={24} color={colors.primary} />
          <Text className="ml-8 text-xl font-bold text-primary dark:text-white">
            App Theme
          </Text>
        </View>
        <Text className="text-base text-baseGrey capitalize">{theme}</Text>
        <ThemeSelectModal
          visible={openTheme}
          onClose={() => setOpenTheme(false)}
        />
      </TouchableOpacity>

      {/* Divider */}
      <View className="h-px bg-lightGrey my-10" />

      {/* ===== LOGOUT ===== */}
      <TouchableOpacity
        className="flex-row items-center"
        onPress={handleLogout}
      >
        <Icon name="log-out-outline" size={24} color={colors.error} />
        <Text className="ml-8 text-xl font-bold text-error">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

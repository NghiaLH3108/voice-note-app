import { Button, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ConfirmModal from '../../components/common/ConfirmModel';
import { useState } from 'react';
import { useConfirmModel } from '../../context/ModalContext';
import { useAuth } from '../../hooks/useAuth';

export default function ProfileScreen() {
  const { logout } = useAuth();
  const { showConfirm } = useConfirmModel();

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
    <View className="flex-1 items-center justify-center">
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

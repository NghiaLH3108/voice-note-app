import { ToastConfigParams } from "react-native-toast-message";
import ToastBase from "./ToastBase";

type ToastProps = ToastConfigParams<{
  message?: string;
}>;

export const toastConfig = {
  success: ({ text1, hide }: ToastProps) => (
    <ToastBase
      type="success"
      message={text1 ?? ''}
      onClose={hide}
    />
  ),
  error: ({ text1, hide }: ToastProps) => (
    <ToastBase
      type="error"
      message={text1 ?? ''}
      onClose={hide}
    />
  ),
  warning: ({ text1, hide }: ToastProps) => (
    <ToastBase
      type="warning"
      message={text1 ?? ''}
      onClose={hide}
    />
  ),
  info: ({ text1, hide }: ToastProps) => (
    <ToastBase
      type="info"
      message={text1 ?? ''}
      onClose={hide}
    />
  ),
};

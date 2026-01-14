import { createContext, useContext, useState } from 'react';
import ConfirmModal from '../components/common/ConfirmModel';

interface ConfirmOptions {
  title: string;
  description: string;
  leftText?: string;
  rightText?: string;
  onConfirm?: () => void;
}

interface ModelContextProps {
  showConfirm: (options: ConfirmOptions) => void;
  hide: () => void;
}

const ModelContext = createContext<ModelContextProps>(null as any);

export const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);

  const showConfirm = (opts: ConfirmOptions) => {
    setOptions(opts);
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
    setOptions(null);
  };

  return (
    <ModelContext.Provider value={{ showConfirm, hide }}>
      {children}
      <ConfirmModal
        visible={visible}
        title={options?.title ?? ''}
        description={options?.description ?? ''}
        leftText={options?.leftText}
        rightText={options?.rightText}
        onLeftPress={hide}
        onRightPress={() => {
          options?.onConfirm?.();
          hide();
        }}
        onClose={hide}
      />
    </ModelContext.Provider>
  );
};

export const useConfirmModel = () => useContext(ModelContext);
export type ModalConnectWalletState = {
  isOpen: boolean;
  walletAddress: string;
  toggle: () => void;
  open: () => void;
  close: () => void;
  setWalletAddress: (address: string) => void;
};

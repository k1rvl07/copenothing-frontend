export type ModalConnectWalletState = {
  isOpen: boolean;
  walletAddress: string | null;
  open: () => void;
  close: () => void;
  toggle: () => void;
  setWalletAddress: (address: string | null) => void;
  reset: () => void;
};

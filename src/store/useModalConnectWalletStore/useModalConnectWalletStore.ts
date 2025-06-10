import { create } from "zustand";
import type { ModalConnectWalletState } from "./types";

export const useModalConnectWalletStore = create<ModalConnectWalletState>((set) => ({
  isOpen: false,
  walletAddress: "",
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setWalletAddress: (address) => set({ walletAddress: address }),
}));

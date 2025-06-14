import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ModalConnectWalletState } from "./types";

export const useModalConnectWalletStore = create<ModalConnectWalletState>()(
  persist(
    (set) => ({
      isOpen: false,
      walletAddress: null,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      setWalletAddress: (address) => set({ walletAddress: address }),
      reset: () => set({ walletAddress: null }),
    }),
    {
      name: "wallet-storage",
      partialize: (state) => ({
        walletAddress: state.walletAddress,
      }),
    },
  ),
);

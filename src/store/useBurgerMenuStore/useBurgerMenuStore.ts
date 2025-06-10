import { create } from "zustand";
import type { BurgerMenuState } from "./types";

export const useBurgerMenuStore = create<BurgerMenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

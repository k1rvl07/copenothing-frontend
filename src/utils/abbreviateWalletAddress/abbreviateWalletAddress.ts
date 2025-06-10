import type { WalletAddress } from "./types";
export const abbreviateWalletAddress = (address: WalletAddress): WalletAddress => {
  if (!address || address.length < 10) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

import { useModalConnectWalletStore } from "@/stores";
import { Shared_Button as Button } from "@components";
import { abbreviateWalletAddress } from "@utils";
import React from "react";
import { basicWithShadow } from "./motion";
import styles from "./styles.module.scss";
import type { ButtonConnectWalletProps } from "./types";

export const Shared_ButtonConnectWallet = ({ className, onClick, disabled }: ButtonConnectWalletProps) => {
  const { walletAddress } = useModalConnectWalletStore();
  const abbreviatedWalletAddress = walletAddress ? abbreviateWalletAddress(walletAddress) : "";

  return (
    <Button
      className={`${styles["button-connect-wallet"]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      motionProps={basicWithShadow}
    >
      {walletAddress ? abbreviatedWalletAddress : "CONNECT WALLET"}
    </Button>
  );
};

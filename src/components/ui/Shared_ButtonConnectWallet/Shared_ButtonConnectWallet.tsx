import { useModalConnectWalletStore } from "@/stores";
import { Shared_Button as Button } from "@components";
import { abbreviateWalletAddress } from "@utils";
import classNames from "classnames";
import React from "react";
import { buttonMotionProps } from "./motion";
import styles from "./styles.module.scss";
import type { ButtonConnectWalletProps } from "./types";

export const Shared_ButtonConnectWallet = ({ className, onClick, disabled }: ButtonConnectWalletProps) => {
  const { walletAddress } = useModalConnectWalletStore();
  const abbreviatedWalletAddress = walletAddress ? abbreviateWalletAddress(walletAddress) : "";

  return (
    <Button
      className={classNames(styles["button-connect-wallet"], className)}
      onClick={onClick}
      disabled={disabled}
      motionProps={buttonMotionProps}
    >
      {walletAddress ? abbreviatedWalletAddress : "CONNECT WALLET"}
    </Button>
  );
};

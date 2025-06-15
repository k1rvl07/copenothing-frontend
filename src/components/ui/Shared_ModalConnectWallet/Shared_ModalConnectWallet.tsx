"use client";
import { useModalConnectWalletStore } from "@/stores";
import {
  Shared_Button as Button,
  Shared_Form as Form,
  Shared_Input as Input,
  Shared_Section as Section,
  Shared_Text as Text,
} from "@components";
import { abbreviateWalletAddress } from "@utils";
import { AnimatePresence } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { modalMotionProps } from "./motion";
import { buttonMotionProps } from "./motion";
import styles from "./styles.module.scss";

export const Shared_ModalConnectWallet = () => {
  const { isOpen, close, walletAddress, setWalletAddress } = useModalConnectWalletStore();
  const [inputValue, setInputValue] = useState(walletAddress || "");
  const abbreviatedWalletAddress = walletAddress ? abbreviateWalletAddress(walletAddress) : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWalletAddress(inputValue);
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Section
          as="div"
          className={styles["modal-connect-wallet"]}
          containerClassName={styles["modal-connect-wallet__container"]}
          onClick={close}
          motionProps={{
            ...modalMotionProps,
          }}
        >
          <Form action="" className={styles.form} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
            <Text as="h2" className={styles.form__title}>
              PEPE WALLET
            </Text>
            <Input
              className={styles.form__input}
              id="wallet"
              type="text"
              placeholder={abbreviatedWalletAddress || "Wallet Address"}
              required={true}
              onChange={(e) => setInputValue(e.target.value)}
              minLength={27}
              maxLength={44}
            />
            <Button className={styles.form__button} type="submit" motionProps={buttonMotionProps}>
              CONNECT
            </Button>
          </Form>
        </Section>
      )}
    </AnimatePresence>
  );
};

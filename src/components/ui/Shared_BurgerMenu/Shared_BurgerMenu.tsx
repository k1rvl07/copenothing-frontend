"use client";
import { useBurgerMenuStore, useModalConnectWalletStore } from "@/stores";
import {
  Shared_ButtonConnectWallet as ButtonConnectWallet,
  Shared_Item as Item,
  Shared_List as List,
  Shared_Nav as Nav,
  Shared_RouterLink as RouterLink,
  Shared_Section as Section,
} from "@components";
import { NAV } from "@content";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { burgerMenuMotionProps, routerLinkMotionProps } from "./motion";
import styles from "./styles.module.scss";
import type { NavLink } from "./types";

export const Shared_BurgerMenu = () => {
  const pathname = usePathname();
  const { isOpen: isBurgerMenuOpen, close: burgerMenuClose } = useBurgerMenuStore();
  const { isOpen: isConnectWalletModalOpen, open: connectWalletModalOpen } = useModalConnectWalletStore();

  const isActiveLink = (link: NavLink) => link.link === pathname;

  return (
    <AnimatePresence>
      {isBurgerMenuOpen && (
        <Section
          as="div"
          key="burger-menu"
          className={styles["burger-menu"]}
          containerClassName={styles["burger-menu__container"]}
          motionProps={burgerMenuMotionProps}
        >
          <Nav className={styles.nav}>
            <List className={styles.nav__list} as="ul">
              {NAV.map((item) => {
                const isActive = isActiveLink(item);

                return (
                  <Item key={item.id} className={styles.nav__item}>
                    <RouterLink
                      href={item.link}
                      className={styles.nav__link}
                      onClick={() => {
                        setTimeout(() => burgerMenuClose(), 500);
                      }}
                      motionProps={{
                        ...routerLinkMotionProps,
                        custom: isActive,
                        animate: isActive ? "active" : "initial",
                      }}
                    >
                      {item.name}
                    </RouterLink>
                  </Item>
                );
              })}
            </List>
          </Nav>
          <ButtonConnectWallet
            className={styles.button}
            disabled={isConnectWalletModalOpen}
            onClick={() => {
              burgerMenuClose();
              setTimeout(() => connectWalletModalOpen(), 500);
            }}
          />
        </Section>
      )}
    </AnimatePresence>
  );
};

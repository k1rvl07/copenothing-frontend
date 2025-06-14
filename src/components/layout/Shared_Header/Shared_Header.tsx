"use client";
import { useBurgerMenuStore, useModalConnectWalletStore } from "@/stores";
import {
  Shared_Box as Box,
  Shared_Button as Button,
  Shared_ButtonConnectWallet as ButtonConnectWallet,
  Shared_Image as Image,
  Shared_Item as Item,
  Shared_List as List,
  Shared_Nav as Nav,
  Shared_RouterLink as RouterLink,
  Shared_Section as Section,
} from "@components";
import { NAV } from "@content";
import { useMediaQueries } from "@hooks";
import { env } from "@utils";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { basicWithShadow, burgerMenuButtonMotionProps, routerLinkMotionProps } from "./motion";
import styles from "./styles.module.scss";
import type { NavLink } from "./types";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export const Shared_Header = () => {
  const pathname = usePathname();
  const { isOpen: isBurgerMenuOpen, toggle: burgerMenuToggle, close: burgerMenuClose } = useBurgerMenuStore();
  const { toggle: connectWalletModalToggle } = useModalConnectWalletStore();
  const { isDesktop } = useMediaQueries();

  useEffect(() => {
    if (isDesktop) {
      burgerMenuClose();
    }
  }, [isDesktop, burgerMenuClose]);

  const isActiveLink = (link: NavLink) => link.link === pathname;

  return (
    <>
      <Section as="header" className={styles.header} containerClassName={styles.header__container}>
        <Image className={styles.header__logo} src={`${MINIO_BUCKET_URL}/header/logo.svg`} alt="logo" />
        <Nav className={styles.nav}>
          <List className={styles.nav__list}>
            {NAV.map((item) => {
              const isActive = isActiveLink(item);
              return (
                <Item key={item.id} className={styles.nav__item}>
                  <RouterLink
                    href={item.link}
                    className={styles.nav__link}
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
        <Box className={styles["header__buttons-bar"]}>
          <Button className={styles.header__button} motionProps={basicWithShadow}>
            <Image src={`${MINIO_BUCKET_URL}/icons/shopping-bag.svg`} />
          </Button>
          <ButtonConnectWallet className={styles.header__button} onClick={connectWalletModalToggle} />
          <Button className={styles.header__button} motionProps={basicWithShadow} onClick={burgerMenuToggle}>
            <AnimatePresence mode="wait" custom={isBurgerMenuOpen}>
              <Image
                key={isBurgerMenuOpen ? "close" : "bars"}
                src={isBurgerMenuOpen ? `${MINIO_BUCKET_URL}/icons/close.svg` : `${MINIO_BUCKET_URL}/icons/bars.svg`}
                motionProps={{
                  ...burgerMenuButtonMotionProps,
                  animate: isBurgerMenuOpen ? "open" : "closed",
                  custom: isBurgerMenuOpen,
                }}
              />
            </AnimatePresence>
          </Button>
        </Box>
      </Section>
    </>
  );
};

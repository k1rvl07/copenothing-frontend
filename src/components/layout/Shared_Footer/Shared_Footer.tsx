"use client";
import {
  Shared_Box as Box,
  Shared_Image as Image,
  Shared_Item as Item,
  Shared_Link as Link,
  Shared_List as List,
  Shared_Nav as Nav,
  Shared_RouterLink as RouterLink,
  Shared_Section as Section,
  Shared_Text as Text,
} from "@components";
import { env } from "@utils";
import React from "react";
import { NAV } from "./content";
import { buttonMotionProps } from "./motion";
import styles from "./styles.module.scss";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export const Shared_Footer = () => {
  return (
    <Section as="footer" className={styles.footer} containerClassName={styles.footer__container}>
      <Box className={styles.footer__wrapper}>
        <Box className={styles.banner}>
          <Image src={`${MINIO_BUCKET_URL}/shared/logo.png`} alt="logo" className={styles.banner__logo} />
          <Text className={styles.banner__text}>Not only stylish and unique, but also comfortable</Text>
          <Image src={`${MINIO_BUCKET_URL}/shared/pond.png`} alt="pond" className={styles.banner__background} />
          <Image src={`${MINIO_BUCKET_URL}/shared/cap.png`} alt="cap" className={styles.banner__background} />
          <Image src={`${MINIO_BUCKET_URL}/shared/tshirt.png`} alt="tshirt" className={styles.banner__background} />
        </Box>
      </Box>
      <Box className={styles.footer__wrapper}>
        <Box className={styles["nav-contact-wrapper"]}>
          <Nav className={styles.nav}>
            <List className={styles.nav__list}>
              {NAV.map((item) => {
                return (
                  <Item key={item.id} className={styles.nav__item}>
                    <RouterLink href={item.link} className={styles.nav__link} motionProps={buttonMotionProps}>
                      {item.name}
                    </RouterLink>
                  </Item>
                );
              })}
            </List>
          </Nav>
          <Box className={styles.contact__wrapper}>
            <Box className={styles.contact}>
              <Text className={styles.contact__text}>
                ARE THERE ANY ISSUES WITH THE DELIVERY OR PAYMENT CONFIRMATION?
              </Text>
              <Link className={styles.contact__link} href="#" motionProps={buttonMotionProps}>
                CONTACT SUPPORT
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footer__wrapper}>
        <Box className={styles.copyright}>
          <Link className={styles.copyright__text} href="#">
            TERMS OF SERVICE
          </Link>
          <Link className={styles.copyright__text} href="#">
            PRIVACY POLICY
          </Link>
          <Text className={styles.copyright__text}>
            COPYRIGHT {new Date().getFullYear()} COPENOTHING. ALL RIGHTS RESERVED
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

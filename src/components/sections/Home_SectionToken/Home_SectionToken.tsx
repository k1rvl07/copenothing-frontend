import {
  Shared_Box as Box,
  Shared_Image as Image,
  Shared_Link as Link,
  Shared_Section as Section,
  Shared_Text as Text,
} from "@components";
import { env } from "@utils";
import React from "react";
import { buttonMotionProps } from "./motion";
import styles from "./styles.module.scss";
import type { SectionTokenProps } from "./types";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export const Home_SectionToken = ({ id, img, name, description, link }: SectionTokenProps) => {
  return (
    <Section className={styles.token} containerClassName={styles.token__container}>
      <Box
        className={`${styles.token__wrapper} ${id === "token-pndc" ? styles["token__wrapper-pndc"] : id === "token-pepe" ? styles["token__wrapper-pepe"] : ""}`}
      >
        <Image className={styles.token__image} src={`${MINIO_BUCKET_URL}/home/token/${img}`} alt="token" />
        <Box
          className={`${styles.token__content} ${id === "token-pndc" ? styles["token__content-pndc"] : id === "token-pepe" ? styles["token__content-pepe"] : ""}`}
        >
          <Text className={styles.token__title}>
            TOKEN{" "}
            <Text as="span" className={styles["token__title-highlight"]}>
              ${name}
            </Text>
          </Text>
          <Text className={styles.token__description}>{description}</Text>
          <Link href={link} className={styles.token__link} motionProps={buttonMotionProps}>
            TOKEN CONTRACT
          </Link>
        </Box>
      </Box>
    </Section>
  );
};

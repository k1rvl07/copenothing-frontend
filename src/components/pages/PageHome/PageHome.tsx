"use client";
import {
  Shared_Box as Box,
  Shared_Image as Image,
  Shared_RouterLink as RouterLink,
  Shared_Section as Section,
  Shared_Text as Text,
} from "@components";
import { env } from "@utils";
import { useAnimation } from "framer-motion";
import { mainButtonImageCapMotionProps, mainButtonImageTshirtMotionProps, mainButtonMotionProps } from "./motion";
import styles from "./styles.module.scss";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export const PageHome = () => {
  const mainButtonControls = useAnimation();
  return (
    <Section className={styles.main} containerClassName={styles.main__container}>
      <Image src={`${MINIO_BUCKET_URL}/shared/pepe.png`} alt="pepe" className={styles.main__background} />
      <Image src={`${MINIO_BUCKET_URL}/shared/pond.png`} alt="pond" className={styles.main__background} />
      <Image src={`${MINIO_BUCKET_URL}/shared/cap.png`} alt="cap" className={styles.main__background} />
      <Image src={`${MINIO_BUCKET_URL}/shared/tshirt.png`} alt="tshirt" className={styles.main__background} />
      <Text as="h1" className={styles.main__text}>
        MERCH STORE
      </Text>
      <Image src={`${MINIO_BUCKET_URL}/shared/logo.png`} alt="logo" className={styles.main__logo} />
      <Box className={styles["main__button-container"]}>
        <RouterLink
          href="/shop"
          className={styles.main__button}
          motionProps={{
            ...mainButtonMotionProps,
            onHoverStart: () => mainButtonControls.start("hover"),
            onHoverEnd: () => mainButtonControls.start("exit"),
            onTapStart: () => mainButtonControls.start("tap"),
          }}
        >
          SHOP NOW
        </RouterLink>
        <Image
          src={`${MINIO_BUCKET_URL}/shared/cap.png`}
          alt="cap"
          className={styles["main__button-image"]}
          motionProps={{
            ...mainButtonImageCapMotionProps,
            animate: mainButtonControls,
          }}
        />
        <Image
          src={`${MINIO_BUCKET_URL}/shared/tshirt.png`}
          alt="tshirt"
          className={styles["main__button-image"]}
          motionProps={{
            ...mainButtonImageTshirtMotionProps,
            animate: mainButtonControls,
          }}
        />
      </Box>
    </Section>
  );
};

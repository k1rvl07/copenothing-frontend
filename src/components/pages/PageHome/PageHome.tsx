"use client";
import {
  Shared_Box as Box,
  Shared_Image as Image,
  Shared_Link as Link,
  Shared_RouterLink as RouterLink,
  Shared_Section as Section,
  Home_SectionToken as SectionToken,
  Shared_Text as Text,
} from "@components";
import { env } from "@utils";
import { useAnimation } from "framer-motion";
import { TOKEN } from "./content";
import {
  buttonBasicWithShadowMotionProps,
  mainButtonImageCapMotionProps,
  mainButtonImageTshirtMotionProps,
  mainButtonMotionProps,
} from "./motion";
import styles from "./styles.module.scss";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export const PageHome = () => {
  const mainButtonControls = useAnimation();
  return (
    <main>
      <Section id="main" className={styles.main} containerClassName={styles.main__container}>
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
      <Section id="about" className={styles.about} containerClassName={styles.about__container}>
        <Box className={styles.about__wrapper}>
          <Image src={`${MINIO_BUCKET_URL}/home/about/image.png`} alt="image" className={styles.about__image} />
          <Box className={styles.about__content}>
            <Text className={styles.about__title}>
              ABOUT{" "}
              <Text as="span" className={styles["about__title-highlight"]}>
                COPENOTHING
              </Text>
            </Text>
            <Text className={styles.about__text}>
              Are you ready for COPE? Our team has worked hard to create a unique merch for pepe & pndc holders. All our
              products are manufactured using the most modern technologies and high-quality materials. They are not only
              stylish and unique, but also comfortable to use. We strive to provide our customers with a high level of
              satisfaction and joy from shopping.
            </Text>
            <Link href="#" className={styles.about__button} motionProps={buttonBasicWithShadowMotionProps}>
              <Image
                src={`${MINIO_BUCKET_URL}/icons/twitter.svg`}
                alt="twitter"
                className={styles["about__button-icon"]}
              />
              <Text className={styles["about__button-text"]}>TWITTER</Text>
            </Link>
          </Box>
        </Box>
      </Section>
      {TOKEN.map((token) => (
        <SectionToken
          key={token.id}
          id={token.id}
          img={token.img}
          name={token.name}
          description={token.description}
          link={token.link}
        />
      ))}
    </main>
  );
};

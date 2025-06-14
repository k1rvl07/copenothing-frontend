import type { WithChildren } from "@/types/types";
import "../styles/_global.scss";
import {
  Shared_BurgerMenu as BurgerMenu,
  Shared_Footer as Footer,
  Shared_Header as Header,
  Shared_ModalConnectWallet as ModalConnectWallet,
} from "@components";
import { env } from "@utils";
import { Comic_Neue, Krona_One, Poppins, Rubik_Bubbles } from "next/font/google";
import styles from "./styles.module.scss";

const { MINIO_BUCKET_URL } = env;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-krona-one",
});

const rubikBubbles = Rubik_Bubbles({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-bubbles",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
});

const fonts = {
  poppins,
  kronaOne,
  rubikBubbles,
  comicNeue,
};

export const metadata = {
  title: "Copenothing",
  description: "Online merch store",
};

export default function Layout({ children }: WithChildren) {
  return (
    <html
      lang="en"
      className={`${styles.html} ${fonts.poppins.variable} ${fonts.kronaOne.variable} ${fonts.rubikBubbles.variable} ${fonts.comicNeue.variable}`}
    >
      <head>
        <link rel="icon" href={`${MINIO_BUCKET_URL}/favicon/logo.ico`} />
      </head>
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
        <BurgerMenu />
        <ModalConnectWallet />
      </body>
    </html>
  );
}

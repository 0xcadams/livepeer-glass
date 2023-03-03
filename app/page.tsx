import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Player } from "./player";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={inter.className}>
          Get started with the <code className={styles.code}>Player</code>
        </p>
      </div>
      <div className={styles.player}>
        <Player />
      </div>
    </main>
  );
}

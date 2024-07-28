import Head from "next/head";
import Notification from "../components/Notification";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notification UI</title>
        <meta name="description" content="Notification UI with a bell icon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Notification />
      </main>
    </div>
  );
}

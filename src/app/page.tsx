import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Добро пожаловать!</h1>
      <p className={styles.description}>Здесь собраны лучшие треки!</p>
    </main>
  );
}

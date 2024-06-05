import styles from './page.module.scss';

const HomePage = () => {
  return (
    <main className={styles['main']}>
      <h1 className={styles['header']}>Добро пожаловать!</h1>
      <p className={styles['description']}>Здесь собраны лучшие треки!</p>
    </main>
  );
};

export default HomePage;

import styles from './page.module.scss';

const Tracks = () => {
  return (
    <main className={styles.main}>
      <h1>Список треков</h1>
      <button type="button" className={styles['button-load']}>
        Загрузить
      </button>
      <ul className={styles['track-list']}>
        
      </ul>
    </main>
  );
};

export default Tracks;

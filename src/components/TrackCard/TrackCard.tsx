import { FC } from 'react';

import styles from './TrackCard.module.scss';
import Image from 'next/image';

interface TrackCardProps {
  name: string;
  artist: string;
  picture: string;
}

const TrackCard: FC<TrackCardProps> = (props) => {
  const { name, artist, picture } = props;

  return (
    <li>
      <div className={styles['left-container']}>
        {/* 
        в css менять svg для кнопки через background
        с использованием модификатора played
        менять стили в зависимости от нажатия на кнопку
        */}
        <button className={styles['btn-play']} type="button"></button>
        <Image className={styles.image} src={picture} alt='Обложка' />
        <div className={styles['info-container']}>
          <p className={styles.name}>{name}</p>
          <p className={styles.artist}>{artist}</p>
        </div>
      </div>
      <div className={styles['right-container']}></div>
    </li>
  );
};

export default TrackCard;

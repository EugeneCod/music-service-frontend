import { FC } from 'react';

import styles from './TrackCard.module.scss';


interface TrackCardProps {
  name: string;
  artist: string;
  picture: string;
}

const TrackCard: FC<TrackCardProps> = (props) => {
  const { name, artist, picture } = props;

  return (
    <li>
      
    </li>
  );
};

export default TrackCard;

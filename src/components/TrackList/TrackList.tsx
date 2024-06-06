import { TrackItem } from '../';

import s from './TrackList.module.scss';

import type { Track } from '@/@types/track';

interface Props {
  tracks: Track[];
}

const TrackList = (props: Props) => {
  const { tracks } = props;
  return (
    <ul className={s['list']}>
      {tracks.map((track) => {
        return (
          <li key={track.id} className={s['list-item']}>
            <TrackItem track={track} />
          </li>
        );
      })}
    </ul>
  );
};

export default TrackList;

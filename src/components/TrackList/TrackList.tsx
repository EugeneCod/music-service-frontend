import { Track } from '@/@types/track';
import React from 'react';
import s from './TrackList.module.scss';
import { TrackItem } from '../';

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

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';

import trashImage from '@/assets/images/trash.svg';
import { ROUTES } from '@/utils/constants';

import s from './TrackItem.module.scss';

import type { Track } from '@/@types/track';

interface Props {
  track: Track;
}

const TrackItem = (props: Props) => {
  const { track } = props;
  const { name, artist, picture, id } = track;
  const [isPlaying, setIsPlaying] = useState(false);
  const cx = classNames.bind(s);

  const btnClass = cx({
    'btn-play': true,
    'btn-play_is-playing': isPlaying,
  });

  function handlePlayBtnClick() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <article className={s['track-item']}>
      <div className={s['left-container']}>
        <button
          className={btnClass}
          type="button"
          onClick={handlePlayBtnClick}
        />
        <Image
          width={50}
          height={50}
          className={s['image']}
          src={picture}
          alt="Обложка"
        />
        <div className={s['info-container']}>
          <Link href={ROUTES.TRACKS.PATH + '/' + id} className={s['name']}>
            {name}
          </Link>
          <p className={s['artist']}>{artist}</p>
        </div>
      </div>
      <div className={s['right-container']}>
        <p className={s['duration']}>00:00/00:00</p>
        <Image
          width={15}
          height={15}
          className={s['trash']}
          src={trashImage}
          alt="Обложка"
        />
      </div>
    </article>
  );
};

export default TrackItem;

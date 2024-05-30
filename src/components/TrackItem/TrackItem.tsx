'use client';

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import s from './TrackItem.module.scss';

import type { Track } from '@/@types/track';

interface Props {
  track: Track;
}

const TrackItem = (props: Props) => {
  const { track } = props;
  const { name, artist, picture } = track;
  const [isPlaying, setIsPlaying] = useState(false);
  const cx = classNames.bind(s);

  const btnClass = cx({
    'btn-play': true,
    'btn-play_is-playing': isPlaying,
  });

  function handlePlayBtnClick() {
    setIsPlaying(prev => !prev);
  }

  return (
    <article className={s['track-item']}>
      <div className={s['left-container']}>
        {/* 
        в css менять svg для кнопки через background
        с использованием модификатора played
        менять стили в зависимости от нажатия на кнопку
        */}
        <button className={btnClass} type="button" onClick={handlePlayBtnClick} />
        <Image width={50} height={50} className={s.image} src={picture} alt="Обложка" />
        <div className={s['info-container']}>
          <p className={s.name}>{name}</p>
          <p className={s.artist}>{artist}</p>
        </div>
      </div>
      <div className={s['right-container']}></div>
    </article>
  );
};

export default TrackItem;

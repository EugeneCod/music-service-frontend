'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ROUTES, tracks } from '@/utils/constants';
import { CommentForm } from '@/components';

import s from './page.module.scss';

const Page = () => {
  const track = tracks[0];
  const { id, name, artist, text, listens, audio, picture, albumId, comments } = track;

  function handleSubmitComment(nameValue: string, commentValue: string) {
    console.table({nameValue, commentValue})
  }

  return (
    <main className={s['page']}>
      <Link href={ROUTES.TRACKS.PATH} className={s['link-to-tracks']}>
        К списку
      </Link>
      <article className={s['track-container']}>
        <Image className={s['image']} width={50} height={50} src={picture} alt="Обложка" />
        <div className={s['info-block']}>
          <p className={s['artist']}>Исполнитель: {artist}</p>
          <h1 className={s['name']}>Название трека: {name}</h1>
          <p className={s['listens']}>Прослушиваний: {listens}</p>
        </div>
        <div className={s['description-block']}>
          <h2 className={s['description-header']}>Текст</h2>
          <p className={s['description-text']}>{text}</p>
        </div>
        <CommentForm onSubmit={handleSubmitComment} />
      </article>
    </main>
  );
};

export default Page;

import Link from 'next/link';
import s from './page.module.scss';

import { ROUTES, tracks } from '@/utils/constants';
import Image from 'next/image';

const page = () => {
  const track = tracks[0];
  const { id, name, artist, text, listens, audio, picture, albumId, comments } = track;
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
        <form className={s['comment-form']}>
          <input type="text" className={s['input-name']} placeholder="Ваше имя" />
          <input type="text" className={s['input-comment']} placeholder="Ваш комментарий" />
          <button className={s['comment-submit']}>Отправить</button>
        </form>
      </article>
    </main>
  );
};

export default page;

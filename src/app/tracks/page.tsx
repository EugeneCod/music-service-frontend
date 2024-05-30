import { ROUTES, tracks } from '@/utils/constants';
import s from './page.module.scss';
import Link from 'next/link';
import { TrackList } from '@/components';

const Tracks = () => {
  return (
    <main className={s['main']}>
      <div className={s['top-container']}>
        <h1 className={s['header']}>Список треков</h1>
        <Link href={ROUTES.TRACKS.CREATE.PATH} type="button" className={s['button-load']}>
          Загрузить
        </Link>
      </div>
      <TrackList tracks={tracks} />
    </main>
  );
};

export default Tracks;

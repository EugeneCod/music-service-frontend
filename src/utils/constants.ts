import { Track } from '@/@types/track';

export const ROUTES = {
  HOME: { PATH: '/' },
  TRACKS: { PATH: '/tracks', CREATE: { PATH: '/tracks/create' } },
  ALBUMS: { PATH: '/albums' },
};

export const NAV_OPTIONS = {
  HOME: { TEXT: 'Главная', HREF: ROUTES.HOME.PATH },
  TRACKS: { TEXT: 'Треки', HREF: ROUTES.TRACKS.PATH },
  ALBUMS: { TEXT: 'Альбомы', HREF: ROUTES.ALBUMS.PATH },
};

export const tracks: Track[] = [
  {
    id: '1',
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Something text',
    listens: 0,
    audio:
      'http://localhost:5000/audio/54f96260-9800-4e99-b962-5fc39f606b24.mp3',
    picture:
      'http://localhost:5000/image/a71b1e7d-65b8-4aef-bedf-2acf39683ed5.jpg',
    albumId: '1',
    comments: [],
  },
  {
    id: '2',
    name: 'Track 2',
    artist: 'Artist 2',
    text: 'Something text',
    listens: 0,
    audio:
      'http://localhost:5000/audio/54f96260-9800-4e99-b962-5fc39f606b24.mp3',
    picture:
      'http://localhost:5000/image/a71b1e7d-65b8-4aef-bedf-2acf39683ed5.jpg',
    albumId: '2',
    comments: [],
  },
  {
    id: '3',
    name: 'Track 3',
    artist: 'Artist 3',
    text: 'Something text',
    listens: 0,
    audio:
      'http://localhost:5000/audio/54f96260-9800-4e99-b962-5fc39f606b24.mp3',
    picture:
      'http://localhost:5000/image/a71b1e7d-65b8-4aef-bedf-2acf39683ed5.jpg',
    albumId: '1',
    comments: [],
  },
];

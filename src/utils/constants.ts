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
    audio: 'http://localhost:5000/audio/c14d04fe-f6c9-4c90-99cd-2cf65588d4fc.mp3',
    picture: 'http://localhost:5000/image/1526c948-b87e-4e34-b26c-d105d90bcc05.jpg',
    albumId: '1',
    comments: [],
  },
  {
    id: '2',
    name: 'Track 2',
    artist: 'Artist 2',
    text: 'Something text',
    listens: 0,
    audio: 'http://localhost:5000/audio/c14d04fe-f6c9-4c90-99cd-2cf65588d4fc.mp3',
    picture: 'http://localhost:5000/image/1526c948-b87e-4e34-b26c-d105d90bcc05.jpg',
    albumId: '2',
    comments: [],
  },
  {
    id: '3',
    name: 'Track 3',
    artist: 'Artist 3',
    text: 'Something text',
    listens: 0,
    audio: 'http://localhost:5000/audio/c14d04fe-f6c9-4c90-99cd-2cf65588d4fc.mp3',
    picture: 'http://localhost:5000/image/1526c948-b87e-4e34-b26c-d105d90bcc05.jpg',
    albumId: '1',
    comments: [],
  },
];

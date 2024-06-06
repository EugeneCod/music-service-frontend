export interface Album {
  id: string;
  name: string;
  author: string;
  picture: string;
  tracks: Track[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  trackId: string;
}

export interface Track {
  id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  albumId: string;
  comments: Comment[];
}

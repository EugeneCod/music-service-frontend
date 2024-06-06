import React from 'react';

import { Comment } from '@/@types/track';

import s from './CommentsList.module.scss';

interface Props {
  comments: Comment[];
}

const CommentsList = (props: Props) => {
  const { comments } = props;

  return comments.length ? (
    <ul className={s['list']}>
      {comments.map((comment) => (
        <li className={s['list-item']} key={comment.id}>
          <p className={s['username']}>{comment.username}</p>
          <p className={s['text']}>{comment.text}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={s['no-comments']}>Комментариев пока нет.</p>
  );
};

export default CommentsList;

'use client';

import { useState } from 'react';

import s from './CommentForm.module.scss';

import { Textarea } from '@/components';

import type { FormEvent } from 'react';

interface Props {
  onSubmit: (nameValue: string, commentValue: string) => void;
}

const CommentForm = (props: Props) => {
  const { onSubmit } = props;
  const [nameValue, setNameValue] = useState('');
  const [commentValue, setCommentValue] = useState('');

  const disabled = !nameValue || !commentValue;

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (!nameValue || !commentValue) {
      return;
    }
    onSubmit(nameValue, commentValue);
  }
  
  return (
    <form onSubmit={handleSubmit} className={s['comment-form']}>
      <input
        value={nameValue}
        onChange={(evt) => {
          setNameValue(evt.target.value);
        }}
        type="text"
        className={s['input']}
        id="name"
        placeholder="Ваше имя"
      />
      <Textarea
        value={commentValue}
        id="comment"
        placeholder="Ваш комментарий"
        minHeight={51}
        onChange={(evt) => {
          setCommentValue(evt.target.value);
        }}
      />
      <button className={`${s['comment-submit']} ${disabled && s['disabled']}`}>Отправить</button>
    </form>
  );
};

export default CommentForm;

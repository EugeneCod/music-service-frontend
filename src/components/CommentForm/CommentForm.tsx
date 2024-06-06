'use client';

import { useState } from 'react';

import { TextInput, Textarea } from '@/components';

import s from './CommentForm.module.scss';

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
      <TextInput
        name="name"
        placeholder="Ваше имя"
        value={nameValue}
        onChange={(evt) => {
          setNameValue(evt.target.value);
        }}
      />
      <Textarea
        value={commentValue}
        name="comment"
        placeholder="Ваш комментарий"
        minHeight={51}
        onChange={(evt) => {
          setCommentValue(evt.target.value);
        }}
      />
      <button className={`${s['comment-submit']} ${disabled && s['disabled']}`}>
        Отправить
      </button>
    </form>
  );
};

export default CommentForm;

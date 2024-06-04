'use client';

import { ChangeEvent, useRef, useLayoutEffect, MutableRefObject } from 'react';

import s from './Textarea.module.scss';

interface Props {
  id: string;
  placeholder: string;
  minHeight?: number;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: Props) => {
  const { id, value, placeholder, minHeight = 50, onChange } = props;
  const textareaRef: MutableRefObject<HTMLTextAreaElement | null> = useRef(null);

  useLayoutEffect(() => {
    if (textareaRef.current === null) {
      return;
    }

    // Сброс высоты требуется при каждой перерисовке
    textareaRef.current.style.height = '0px';
    // Установка высоты
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      minHeight,
    )}px`;
    
  }, [value, minHeight]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event);
  }

  return (
    <textarea
      id={id.toString()}
      className={s['root']}
      ref={textareaRef}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      style={{ minHeight }}
    />
  );
};

export default Textarea;

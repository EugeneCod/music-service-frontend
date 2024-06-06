import React from 'react';

import s from './TextInput.module.scss';

interface Props {
  name: string;
  placeholder: string;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: Props) => {
  const { name, placeholder, value, onChange } = props;

  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className={s['input']}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

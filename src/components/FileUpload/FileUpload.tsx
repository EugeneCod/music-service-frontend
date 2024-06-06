'use client';
import { useRef } from 'react';

import type { ChangeEvent, MutableRefObject, ReactElement } from 'react';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFile: Function;
  accept: string;
  children: ReactElement | ReactElement[];
}

const FileUpload = (props: Props) => {
  const { setFile, accept, children } = props;

  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    console.log(evt.target.files);
    if (evt.target.files !== null) {
      setFile(evt.target.files[0]);
    }
  }

  return (
    <div
      onClick={() => {
        inputRef?.current?.click();
      }}
    >
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;

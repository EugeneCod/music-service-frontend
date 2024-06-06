'use client';

import { useState } from 'react';
import Image from 'next/image';

import { TextInput, StepWrapper, Textarea, FileUpload } from '@/components';
import trackCover from '@/assets/images/track-cover.jpeg';

import s from './page.module.scss';

const TracksCreatePage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const [trackNameValue, setTrackNameValue] = useState('');
  const [artistValue, setArtistValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

  const contentStepOne = (
    <form className={s['form-info']}>
      <h2 className={s['step-header']}>Заполните информацию о треке</h2>
      <TextInput
        name="track-name"
        placeholder="Введите название трека"
        value={trackNameValue}
        onChange={(evt) => {
          setTrackNameValue(evt.target.value);
        }}
      />
      <TextInput
        name="artist"
        placeholder="Введите имя исполнителя"
        value={artistValue}
        onChange={(evt) => {
          setArtistValue(evt.target.value);
        }}
      />
      <Textarea
        name="song-text"
        placeholder="Введите текст песни"
        value={textValue}
        onChange={(evt) => setTextValue(evt.target.value)}
      />
    </form>
  );

  const contentStepTwo = (
    <form className={s['form-cover']}>
      <h2 className={s['step-header']}>Загрузите обложку трека</h2>
      <div className={s['upload-container']}>
        <Image
          className={s['cover-image']}
          src={trackCover}
          alt="Обложка трека"
        />
        {/* accept="image/*" допускает загрузку изображений любых расширений */}
        <FileUpload setFile={() => {}} accept="image/*">
          <button className={s['upload-btn']} type="button">
            Загрузить изображение
          </button>
        </FileUpload>
      </div>
    </form>
  );

  const contentStepThree = (
    <form className={s['form-track']}>
      <h2 className={s['step-header']}>Загрузите трек</h2>
      <div className={s['upload-container']}>
        {/* accept="image/*" допускает загрузку изображений любых расширений */}
        <FileUpload setFile={() => {}} accept="audio/*">
          <button className={s['upload-btn']} type="button">
            Загрузить аудиофайл
          </button>
        </FileUpload>
      </div>
    </form>
  );

  return (
    <main className={s['page']}>
      <h1 className={s['header']}>Добавление трека</h1>
      <StepWrapper activeStep={activeStep} steps={steps}>
        <div className={s['step-wrapper']}>
          <div className={s['step-container']}>
            {activeStep === 1 && contentStepOne}
            {activeStep === 2 && contentStepTwo}
            {activeStep === 3 && contentStepThree}
          </div>
        </div>
      </StepWrapper>
      <div className={s['buttons-block']}>
        <button
          onClick={() => {
            setActiveStep(activeStep - 1);
          }}
          className={`${s['step-btn']} ${activeStep === 1 ? s['disabled'] : ''}`}
        >
          Назад
        </button>
        <button
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
          className={`${s['step-btn']} ${activeStep === steps.length ? s['disabled'] : ''}`}
        >
          Далее
        </button>
      </div>
    </main>
  );
};

export default TracksCreatePage;

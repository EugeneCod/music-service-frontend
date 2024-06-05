'use client';

import { useState } from 'react';

import { StepWrapper, Textarea } from '@/components';

import s from './page.module.scss';

const TracksCreatePage = () => {
  const [activeStep, setActiveStep] = useState(1);

  const [textValue, setTextValue] = useState('');

  const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

  return (
    <main className={s['page']}>
      <h1 className={s['header']}>Добавление трека</h1>
      <StepWrapper activeStep={activeStep} steps={steps}>
        <div className={s['step-container']}>
          <form>
            <input type="text" placeholder='Введите название трека' />
            <input type="text" placeholder='Введите имя исполнителя'/>
            <Textarea id={'song-text'} placeholder='Введите текст песни' value={textValue} onChange={(evt) => setTextValue(evt.target.value)}/>
          </form>
        </div>
      </StepWrapper>
      <div className={s['buttons-block']}>
        <button
          onClick={() => {
            setActiveStep(activeStep - 1);
          }}
          className={`${s['step-btn']} ${activeStep === 1 ? s['disabled'] : ''}`}>
          Назад
        </button>
        <button
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
          className={`${s['step-btn']} ${activeStep === steps.length ? s['disabled'] : ''}`}>
          Далее
        </button>
      </div>
    </main>
  );
};

export default TracksCreatePage;

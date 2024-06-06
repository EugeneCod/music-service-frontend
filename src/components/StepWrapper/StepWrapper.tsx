import React from 'react';
import classNames from 'classnames/bind';

import s from './StepWrapper.module.scss';

import type { ReactElement } from 'react';

interface Props {
  activeStep: number;
  children: ReactElement | ReactElement[];
  steps: string[];
}

const StepWrapper = (props: Props) => {
  const { children, activeStep, steps } = props;

  const cx = classNames.bind(s);

  function getClassName(stepNumber: number) {
    const className = cx({
      step: true,
      active: activeStep === stepNumber,
      completed: activeStep > stepNumber,
    });
    return className;
  }

  return (
    <div>
      <ol className={s['list']}>
        {steps.map((step, index) => (
          <li key={step + index} className={getClassName(index + 1)}>
            <span className={s['marker']}>{index + 1}</span>
            <span className={s['text']}>{step}</span>
          </li>
        ))}
      </ol>
      {children}
    </div>
  );
};

export default StepWrapper;

'use client';

import { FC, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rootStyles = cx({
    root: true,
    opened: isOpen,
  });

  const arrowStyles = cx({
    arrow: true,
    inverted: isOpen,
  });

  function handleOpenNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={rootStyles}>
      <button onClick={handleOpenNavbar} type="button" className={styles.button}>
        <svg
          className={arrowStyles}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M4 12H20M4 12L8 8M4 12L8 16"
              stroke="#e3e3e3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"></path>{' '}
          </g>
        </svg>
      </button>
      <ul className={styles.list}>
        <li className={styles['list-item']}>
          <Link className={styles.link} href="/">
            <svg
              className={styles.image}
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
                  fill="#af56fd"></path>{' '}
              </g>
            </svg>
            Главная
          </Link>
        </li>
        <li className={styles['list-item']}>
          <Link className={styles.link} href="/tracks">
            <svg
              className={styles.image}
              width="101px"
              height="101px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
                  stroke="#af56fd"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>{' '}
              </g>
            </svg>
            Треки
          </Link>
        </li>
        <li className={styles['list-item']}>
          <Link className={styles.link} href="/albums">
            <svg
              className={styles.image}
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g clip-path="url(#clip0_429_11112)">
                  {' '}
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="#af56fd"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></circle>{' '}
                  <circle
                    cx="18"
                    cy="9"
                    r="2"
                    stroke="#af56fd"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></circle>{' '}
                  <path
                    d="M15.318 3.63135C14.2913 3.22394 13.1718 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1514 21 19.6464 18.1892 20.6855 14.3669"
                    stroke="#af56fd"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>{' '}
                  <path
                    d="M20 9V2L22 4"
                    stroke="#af56fd"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"></path>{' '}
                </g>{' '}
                <defs>
                  {' '}
                  <clipPath id="clip0_429_11112">
                    {' '}
                    <rect width="24" height="24" fill="white"></rect>{' '}
                  </clipPath>{' '}
                </defs>{' '}
              </g>
            </svg>
            Альбомы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

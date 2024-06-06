import { Container, Navbar } from '@/components';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/scss/index.scss';

export const metadata: Metadata = {
  title: 'Музыкальный сервис',
  description: 'Сдесь собраны лучшие треки для Вас!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}

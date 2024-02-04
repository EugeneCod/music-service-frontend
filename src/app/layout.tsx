import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import '@/scss/index.scss';
import { Container, Navbar } from '@/components';

// const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: 'Музыкальный сервис',
  description: 'Сдесь собраны лучшие треки для Вас!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        
          <Navbar />
          <Container>
            {children}
          </Container>
        
      </body>
    </html>
  );
}


import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const popins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio made by CojaDev using NextJs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/🔥" />
      </head>
      <body className={popins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

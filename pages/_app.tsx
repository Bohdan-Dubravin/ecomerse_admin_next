import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import MainProvider from '@/lib/providers/MainProvider';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '@/lib/providers/ToastProvider';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <MainProvider>
        <Component {...pageProps} />
        <ToastProvider />
      </MainProvider>
    </SessionProvider>
  );
}

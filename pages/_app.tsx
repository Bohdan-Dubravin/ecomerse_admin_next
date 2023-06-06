import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import MainProvider from "@/providers/Mainprovider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </SessionProvider>
  );
}

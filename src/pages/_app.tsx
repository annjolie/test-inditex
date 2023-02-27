import themes from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import { MainLayout } from '@/containers/layouts/MainLayout';
import React from 'react';
import Provider from '@/containers/provider';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={themes.light}>
      <Provider>
        <GlobalStyle />
        <MainLayout>
          <Component {...pageProps} key={router.asPath} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
}

import '@/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/swiper-bundle.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CommonLayout from '@/components/layouts/CommonLayout';
import Layout from '@/components/layouts/DashboardLayout';
import { NextPageWithLayout } from '@/types';

SwiperCore.use([Navigation, Pagination]);

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? CommonLayout;
  const getLoginLayout = Component.getLayout ?? Layout;

  // Check if the page has disabled the layout
  if (Component.disableLayout) {
    return getLoginLayout(<Component {...pageProps} />);
  }

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

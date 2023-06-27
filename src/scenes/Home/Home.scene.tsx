/* eslint-disable react/no-children-prop */
import Head from 'next/head';

import { NextPageWithLayout } from '@/types';

import Cards from './components/Cards/Cards';
import SearchResultContainer from './containers/SearchResultContainer';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SearchResultContainer /> */}

      <div className="flex flex-grow" />

      {/* <HomepageFooter /> */}
    </>
  );
};

export default Home;
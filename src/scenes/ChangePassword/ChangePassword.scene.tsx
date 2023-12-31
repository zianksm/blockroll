/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import { AuthHeader } from '@/components/layouts/AuthHeader/AuthHeader';
import { NextPageWithLayout } from '@/types';

import ChangePasswordForm from './container/ChangePasswordForm';

const ChangePassword: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthHeader
        title={'Ubah Kata Sandi'}
        desc={'Silakan ubah kata sandi anda!'}
      >
        <div className="flex flex-col min-h-screen">
          <ChangePasswordForm />

          <div className="flex-grow-[0.9]"></div>

          <div className="flex flex-col w-[100%] min-h-full justify-end">
            <label className="flex w-[100%] h-[100%] justify-center">
              Belum memiliki akun?{' '}
              <span className="text-[#E8DC00]">
                <a href="/">&nbsp;Daftar</a>
              </span>
            </label>
          </div>
        </div>
      </AuthHeader>
    </>
  );
};

export default ChangePassword;

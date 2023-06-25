/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import CardPrivateOnline from '@/components/common/Homepage/CardPrivateOnline/CardPrivateOnline';
import EmailForm from '@/components/common/LoginForm/EmailForm/EmailForm';
import LoginForm from '@/components/common/LoginForm/LoginForm';
import PasswordForm from '@/components/common/LoginForm/PasswordForm';
import OTPInput from '@/components/common/OTPInput/OTPInput';
import SecondaryBtnSubmit from '@/components/common/SecondaryButton';
import VerificationChoices from '@/components/common/VerificationChoice/VerificationChoices';
import { AuthHeader } from '@/components/layouts/AuthHeader/AuthHeader';
import Layout from '@/components/layouts/DashboardLayout/Layout';
import RegisterForm from '@/scenes/Register/container/RegisterContainer';
import { NextPageWithLayout } from '@/types';

const Test: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AuthHeader title={'Register'} desc={'Silahkan masuk ke akun anda.'} /> */}
      {/* <Layout>

        
      </Layout> */}
      {/* <LoginForm
        titleEmail={'Email'}
        titlePassword={'Password'}
        placeholderEmail={'Masukan kata sandi anda'}
        placeholderPassword={'Password'}
        required={false}
      /> */}

      <CardPrivateOnline
        title={''}
        price={''}
        cardImgPath={''}
        instructorName={''}
      />

      <VerificationChoices
        title="Email ke"
        desc="alden@123"
        isWhatsapp={false}
      />

      <OTPInput />

      <SecondaryBtnSubmit
        imgMode={false}
        title="Ubah Nomor Telepon"
        imgPath="/assets/IndonesiaFlag.png"
      />
      <RegisterForm />

      <div className="flex w-[100%] justify-between items-center mt-[30px] flex-row mb-[20px]">
        <hr className="w-[100%] border-[1px]" />
        <label className="text-[14px] font-medium text-center text-[#9E9FA2] mx-[39px] w-[250%] sm:w-[100%]">
          Atau masuk dengan
        </label>
        <hr className="w-[100%] border-[1px]" />
      </div>

      <div className="flex flex-col w-[100%] min-h-full justify-end">
        <div className="flex flex-row justify-between w-[100%] gap-[16px]">
          <button className="flex flex-row justify-center items-center gap-[16px] mx-[auto] border-[1px] text-[14px] border-[#F3F3F3] rounded-[12px] w-[100%] py-[10px]">
            <img src="/assets/GoogleIcon.png" alt="/" width={20} height={20} />{' '}
            Google
          </button>
          <button className="flex flex-row justify-center items-center gap-[16px] mx-[auto] border-[1px] text-[14px] border-[#F3F3F3] rounded-[12px] w-[100%] py-[10px]">
            <img
              src="/assets/FacebookIcon.png"
              alt="/"
              width={20}
              height={20}
            />{' '}
            Facebook
          </button>
        </div>

        <label className="flex w-[100%] h-[100%] justify-center mt-[194px]">
          Belum memiliki akun?{' '}
          <span className="text-[#E8DC00]">
            <a href="/">&nbsp;Daftar</a>
          </span>
        </label>
      </div>
    </>
  );
};

export default Test;
/* eslint-disable @next/next/no-html-link-for-pages */
import { Formik } from 'formik';
import { FC, useState } from 'react';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import EmailForm from '@/components/common/AuthForms/TypeEmail';
import PasswordForm from '@/components/common/AuthForms/TypePassword';
import PhoneForm from '@/components/common/AuthForms/TypeTelp/PhoneForm';
import TextForm from '@/components/common/AuthForms/TypeText';

export interface RegisterContainerProps {
  titleEmail?: string;
  titlePassword?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;
  required?: boolean;
}

const RegisterContainer: FC<RegisterContainerProps> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertInputEmail, setAlertInputEmail] = useState(false);
  const [alertInputPassword, setAlertInputPassword] = useState(false);
  return (
    // <Formik>
    <div className="flex flex-col w-full min-h-screen">
      <TextForm
        placeholder="Masukan nama anda disini"
        title="Nama Lengkap"
        required={true}
      />
      <EmailForm
        placeholder="Masukan email anda disini"
        title="Email"
        required={true}
      />
      <PhoneForm placeholder="8123445678" required={true} title="No. Telepon" />
      <PasswordForm
        placeholder="Masukan kata sandi anda"
        required={true}
        title="Kata Sandi"
      />
      <PasswordForm
        placeholder="Masukan kata sandi anda"
        required={true}
        title="Konfirmasi Kata Sandi"
      />
      <div className="flex justify-end w-[100%] pb-[20px]">
        <a href="/" className="text-[14px] font-medium text-[#E8DC00]">
          Lupa Kata Sandi?
        </a>
      </div>
      {/* <AuthBtnSubmit title="Masuk" /> */}

      <label className="flex w-[100%] h-[100%] justify-center items-end">
        Belum memiliki akun?{' '}
        <span className="text-[#E8DC00]">
          <a href="/">&nbsp;Daftar</a>
        </span>
      </label>
    </div>
    // </Formik>
  );
};

export default RegisterContainer;

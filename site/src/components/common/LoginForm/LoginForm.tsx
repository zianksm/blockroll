/* eslint-disable @next/next/no-html-link-for-pages */
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import loginValidationSchema from '@/lib/validation/loginValidation';

import { LoginController } from '../../../apiHandlers/auth/login/mockHandler';
import styles from './LoginForm.module.css';

export interface LoginFormProps {
  titleEmail: string;
  titlePassword: string;
  placeholderEmail: string;
  placeholderPassword: string;
  required: boolean;
}

const LoginForm: FC<LoginFormProps> = ({
  titleEmail,
  titlePassword,
  placeholderEmail,
  placeholderPassword,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertInputEmail, setAlertInputEmail] = useState(false);
  const [alertInputPassword, setAlertInputPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleLogin = async (values: any, { setSubmitting }: any) => {
    // new auth mock
    await new LoginController()
      .submit(values)
      .then((rep) => {
        console.log('response', rep);
        if (
          rep.success === false &&
          rep.message === 'error.login.unauthorized'
        ) {
          // Handle unauthorized login error
          // For example, show an error message to the user
          setShowError(true);
          console.log('Unauthorized login error occurred');
        } else {
          // Handle successful login
          toast.success('Login Berhasil');
          setTimeout(() => {
            router.push('/');
          }, 3000);
        }
      })
      .catch((error: any) => {
        console.log('correct', false);
        setShowError(true);
        console.log(error);
      });
    setSubmitting(false);
  };

  const handleInputChange = (e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  return (
    <Formik
      initialValues={formData}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
      // Pass the validation schema here
    >
      {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
        <>
          <div className="flex flex-col gap-2">
            {' '}
            <p className="text-center font-semibold text-2xl text-black ">
              Einstein Medical
            </p>
            <p className='"text-center text-md font-normal text-[#5F6063]'>
              Silakan masuk ke akun anda.
            </p>
          </div>
          {showError && (
            <div className="flex flex-row h-10 w-full items-center bg-[#FEECEB] rounded-xl gap-4 p-5">
              <img src="/assets/Icons/alertError.svg" alt="" />
              <p className="text-[#F04438]">Email atau Password salah!</p>
            </div>
          )}
          <div className="flex flex-col w-full px-[16px]">
            <label htmlFor="email" className="flex flex-col w-[100%] pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                {titleEmail}{' '}
                <span>
                  {' '}
                  <span>
                    {''}
                    {required && (
                      <label className="text-[#E8DC00] text-[16px]">*</label>
                    )}
                  </span>
                </span>
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={placeholderEmail}
                value={values.email}
                onChange={handleChange('email')}
                autoComplete="off"
                className={
                  errors?.email
                    ? 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#F04438] focus:border-b-[1px]'
                    : 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                }
              />
              {errors?.email && (
                <p className="text-[#F04438] mt-0.5">{errors.email}</p>
              )}

              {/* <ErrorMessage name="email" component="div" /> */}
            </label>
            <label className="flex flex-col w-full pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                {titlePassword}
                <span>
                  {''}
                  {required && (
                    <label className="text-[#E8DC00] text-[16px]">*</label>
                  )}
                </span>
              </span>
              <div className="flex flex-row w-[100%]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={placeholderPassword}
                  value={values.password}
                  onChange={handleChange('password')}
                  autoComplete="off"
                  className={
                    errors?.password
                      ? 'mt-[6px] flex flex-row min-w-full h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#F04438] focus:border-b-[1px]'
                      : 'mt-[6px] flex flex-row min-w-full h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                  }
                />
                {/* <ErrorMessage name="password" component="div" /> */}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-[-20px]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {showPassword ? (
                      <path
                        d="M10 7.50418C10.884 7.50418 11.7321 7.85537 12.3572 8.48049C12.9823 9.10561 13.3335 9.95346 13.3335 10.8375C13.3335 11.7216 12.9823 12.5694 12.3572 13.1945C11.7321 13.8197 10.884 14.1708 10 14.1708C9.11604 14.1708 8.26818 13.8197 7.64307 13.1945C7.01795 12.5694 6.66675 11.7216 6.66675 10.8375C6.66675 9.95346 7.01795 9.10561 7.64307 8.48049C8.26818 7.85537 9.11604 7.50418 10 7.50418ZM10 4.58334C13.8441 4.58334 17.1633 7.20834 18.0841 10.8867C18.1245 11.0475 18.0993 11.2177 18.0141 11.3599C17.9289 11.5021 17.7908 11.6047 17.6301 11.645C17.4693 11.6853 17.299 11.6602 17.1568 11.575C17.0146 11.4898 16.9121 11.3516 16.8717 11.1908C16.4866 9.65985 15.6012 8.30134 14.356 7.33088C13.1108 6.36041 11.5771 5.83358 9.99842 5.83396C8.41972 5.83434 6.88635 6.36192 5.64162 7.33299C4.3969 8.30406 3.51212 9.663 3.12765 11.1942C3.08448 11.3516 2.98141 11.4859 2.8405 11.5684C2.69959 11.6508 2.53201 11.6748 2.37361 11.6353C2.21521 11.5958 2.07856 11.4959 1.99289 11.3569C1.90721 11.2179 1.87931 11.0509 1.91515 10.8917C2.36705 9.08956 3.40803 7.49006 4.87282 6.34715C6.33761 5.20425 8.14224 4.58346 10 4.58334Z"
                        fill="#397BFF"
                      />
                    ) : (
                      <path
                        d="M10 7.50418C10.884 7.50418 11.7321 7.85537 12.3572 8.48049C12.9823 9.10561 13.3335 9.95346 13.3335 10.8375C13.3335 11.7216 12.9823 12.5694 12.3572 13.1945C11.7321 13.8197 10.884 14.1708 10 14.1708C9.11604 14.1708 8.26818 13.8197 7.64307 13.1945C7.01795 12.5694 6.66675 11.7216 6.66675 10.8375C6.66675 9.95346 7.01795 9.10561 7.64307 8.48049C8.26818 7.85537 9.11604 7.50418 10 7.50418ZM10 4.58334C13.8441 4.58334 17.1633 7.20834 18.0841 10.8867C18.1245 11.0475 18.0993 11.2177 18.0141 11.3599C17.9289 11.5021 17.7908 11.6047 17.6301 11.645C17.4693 11.6853 17.299 11.6602 17.1568 11.575C17.0146 11.4898 16.9121 11.3516 16.8717 11.1908C16.4866 9.65985 15.6012 8.30134 14.356 7.33088C13.1108 6.36041 11.5771 5.83358 9.99842 5.83396C8.41972 5.83434 6.88635 6.36192 5.64162 7.33299C4.3969 8.30406 3.51212 9.663 3.12765 11.1942C3.08448 11.3516 2.98141 11.4859 2.8405 11.5684C2.69959 11.6508 2.53201 11.6748 2.37361 11.6353C2.21521 11.5958 2.07856 11.4959 1.99289 11.3569C1.90721 11.2179 1.87931 11.0509 1.91515 10.8917C2.36705 9.08956 3.40803 7.49006 4.87282 6.34715C6.33761 5.20425 8.14224 4.58346 10 4.58334Z"
                        fill="#9E9FA2"
                      />
                    )}
                  </svg>
                </button>
              </div>
              {errors?.password && (
                <p className="text-[#F04438] mt-0.5">{errors.password}</p>
              )}
            </label>
            <div className="flex justify-end w-[100%] pb-[20px]">
              <a
                href="/auth/forgotPassword"
                className="text-[14px] font-medium text-[#E8DC00] "
              >
                Lupa Kata Sandi?
              </a>
            </div>
            <AuthBtnSubmit
              title="Masuk"
              onSubmit={handleSubmit}
              disable={isSubmitting}
            />
          </div>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;

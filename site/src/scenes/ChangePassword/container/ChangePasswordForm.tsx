import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import VerificationPopUp from '@/components/common/VerificationPopUp/VerificationPopUp';
import changePasswordValidationSchema from '@/lib/validation/changePassValidation';
import loginValidationSchema from '@/lib/validation/loginValidation';

export interface ChangePasswordFormProps {
  titleEmail?: string;
  placeholderEmail?: string;
  required?: boolean;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({
  titleEmail,
  placeholderEmail,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    confirmPassword: '',
    password: '',
  });
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
  };

  const router = useRouter();

  const handleChangePassword = async (values: any, { setSubmitting }: any) => {
    // console.log('values', values);

    try {
      openPopup();
      // await registerApi(formData); // Calls the registerUser API function from apiHandlers/api.js or using redux action
      console.log('correct', values);
      // router.push('/login'); // Redirect to the login page
    } catch (error) {
      console.log('error', error);

      // Handle registration error
    }
    setSubmitting(false);
  };

  const handleInputChange = (e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={changePasswordValidationSchema}
      onSubmit={handleChangePassword}
      // Pass the validation schema here
    >
      {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
        <div className="flex flex-col w-full px-[16px]">
          <label className="flex flex-col w-full pb-[20px]">
            <span className="block text-[14px] font-medium text-[#2C3131]">
              Kata Sandi Baru
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
                placeholder="Masukan kata sandi baru"
                name="password"
                id="password"
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

          <label className="flex flex-col w-full pb-[20px]">
            <span className="block text-[14px] font-medium text-[#2C3131]">
              Konfirmasi Kata Sandi Baru
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
                placeholder="Konfirmasi Kata Sandi anda"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                autoComplete="off"
                className={
                  errors?.confirmPassword
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
            {errors?.confirmPassword && (
              <p className="text-[#F04438] mt-0.5">{errors.confirmPassword}</p>
            )}
          </label>

          <AuthBtnSubmit
            title="Kirim Tautan"
            onSubmit={handleSubmit}
            disable={isSubmitting}
          />
          {isPopUpOpen && (
            <div className=" w-[100%] flex flex-col py-[0px]  items-center justify-end bg-black bg-opacity-50 fixed bottom-0 left-0 right-0 top-0 p-4 shadow-lg transition-transform duration-1500 transform translate-y-0">
              <div className="flex flex-col pt-[24px] pb-[40px] items-center bg-white min-w-[100vw] px-[16px]">
                <VerificationPopUp
                  isEmail={false}
                  title="Kata sandi berhasil diubah!"
                  desc="kata sandi anda telah diubah. Silahkan masuk kembali dengan kata sandi baru"
                />
                <button
                  onClick={closePopup}
                  className="w-[100%] text-[14px] font-normal text-center text-[#E8DC00] border-none bg-transparent w-auto h-auto"
                >
                  Kembali
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;

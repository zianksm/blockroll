import { ErrorMessage, Field, Formik, FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import VerificationPopUp from '@/components/common/VerificationPopUp';
import { ForgotPasswordInterface } from '@/interfaces/Auth';
import forgotPasswordValidationSchema from '@/lib/validation/forgotPassValidation';

export interface ForgotPasswordFormProps {
  titleEmail: string;
  placeholderEmail: string;
  required: boolean;
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  titleEmail,
  placeholderEmail,
  required = false,
}) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
  };

  const router = useRouter();

  const handleForgotPass = async (
    values: ForgotPasswordInterface,
    formikHelpers: FormikHelpers<ForgotPasswordInterface>,
  ) => {
    // console.log('values', values);
    const { setSubmitting } = formikHelpers;

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
  return (
    <Formik
      initialValues={formData}
      validationSchema={forgotPasswordValidationSchema}
      onSubmit={handleForgotPass}
      // Pass the validation schema here
    >
      {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
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

          <AuthBtnSubmit
            title="Kirim Tautan"
            onSubmit={handleSubmit}
            disable={isSubmitting}
          />
          {isPopUpOpen && (
            <div className=" w-[100%] flex flex-col py-[0px]  items-center justify-end bg-black bg-opacity-50 fixed bottom-0 left-0 right-0 top-0 p-4 shadow-lg transition-transform duration-1500 transform translate-y-0">
              <div className="flex flex-col pt-[24px] pb-[40px] items-center bg-white min-w-[100vw] px-[16px]">
                <VerificationPopUp
                  isEmail={true}
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

export default ForgotPasswordForm;

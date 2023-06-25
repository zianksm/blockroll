/* eslint-disable @next/next/no-html-link-for-pages */
import 'react-phone-number-input/style.css';

import { Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import PhoneInputWithCountrySelect, {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input';
import { toast } from 'react-toastify';

import { RegisterConroller } from '@/apiHandlers/auth/registerr/handler';
import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import { RegisterInterface } from '@/interfaces/Auth';
import registerValidationSchema from '@/lib/validation/registerValidation';

import VerificationChoices from '../VerificationChoice/VerificationChoices';

export interface RegisterFormProps {
  titleEmail?: string;
  titlePassword?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;
  required?: boolean;
  onModalOpen: () => void; // Callback function prop to open the modal
}

const RegisterForm: FC<RegisterFormProps> = ({ onModalOpen }) => {
  const [countryCode, setCountryCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterInterface>({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isEmailClicked, setEmailClicked] = useState(false);
  const [isWhatsAppClicked, setWhatsAppClicked] = useState(false);
  const openPopup = () => {
    setIsPopUpOpen(true);
  };

  const closePopup = () => {
    setIsPopUpOpen(false);
    router.push('/auth/authOTP');
  };

  const handleRegister = async (
    values: RegisterInterface,
    formikHelpers: FormikHelpers<RegisterInterface>,
  ) => {
    const { setSubmitting } = formikHelpers;
    try {
      const newValues = {
        email: values.email,
        name: values.fullname,
        password: values.password,
        phone_number: values.phoneNumber,
      };
      // new auth mock
      await new RegisterConroller().submit(newValues);
      toast.success('Registrasi Berhasil');
      setTimeout(() => {
        openPopup();
      }, 3000);
      setFormData(values);
      console.log('correct', values);
    } catch (error) {
      console.log('error', error);
    }
    setSubmitting(false);
  };

  const handlePhoneNumberChange = (
    phoneNumber: string,
    formikChange: (field: string, value: any) => void,
  ) => {
    setFormData({ ...formData, phoneNumber });
    formikChange('phoneNumber', phoneNumber);
  };
  const handleEmailClick = () => {
    setEmailClicked(true);
    setWhatsAppClicked(false);
    console.log('isEmailClicked', isEmailClicked);
  };

  const handleWhatsAppClick = () => {
    setEmailClicked(false);
    setWhatsAppClicked(true);
    console.log('isWhatsAppClicked', isWhatsAppClicked);
  };

  console.log('phone', formData);
  return (
    <Formik
      initialValues={formData}
      validationSchema={registerValidationSchema}
      onSubmit={handleRegister}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        setFieldValue,
      }) => (
        <>
          <div className="flex flex-col gap-4">
            {' '}
            <p className="text-center font-semibold text-2xl text-black ">
              Einstein Medical
            </p>
            <p className="text-center text-md font-normal text-[#5F6063] max-w-[424px]">
              Buat akun anda, untuk menikmati layanan belajar Einstein.{' '}
            </p>
          </div>
          <div className="flex flex-col w-full px-[16px]">
            <label className="flex flex-col w-[100%] pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                Nama Lengkap{' '}
                <span>
                  <label className="text-[#E8DC00] text-[16px]">*</label>
                </span>
              </span>
              <input
                name="fullname"
                id="fullname"
                value={values.fullname}
                onChange={handleChange('fullname')}
                type="text"
                placeholder="Masukan nama anda disini"
                className={
                  errors?.fullname
                    ? 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#F04438] focus:border-b-[1px]'
                    : 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                }
              />
              {errors?.fullname && (
                <p className="text-[#F04438] mt-0.5">{errors.fullname}</p>
              )}
            </label>
            <label className="flex flex-col w-[100%] pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                Email{' '}
                <span>
                  <label className="text-[#E8DC00] text-[16px]">*</label>
                </span>
              </span>
              <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                type="email"
                placeholder="Masukan email anda disini"
                className={
                  errors?.email
                    ? 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#F04438] focus:border-b-[1px]'
                    : 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                }
              />
              {errors?.email && (
                <p className="text-[#F04438] mt-0.5">{errors.email}</p>
              )}
            </label>

            <label className="flex flex-col w-full pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                No. Telepon
                <span>
                  <label className="text-[#12B76A] text-[14px]">
                    {' '}
                    (WhatsApp)*
                  </label>
                </span>
              </span>
              <div className="relative flex flex-row w-[100%] items-center gap-[6px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center top-[6px]"></div>
                <PhoneInputWithCountrySelect
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  placeholder="81234567890"
                  international
                  defaultCountry="ID"
                  initialValueFormat="national"
                  className={
                    errors?.phoneNumber
                      ? 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                      : 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                  }
                  value={values.phoneNumber}
                  onChange={(phoneNumber) =>
                    handlePhoneNumberChange(
                      phoneNumber as string,
                      setFieldValue,
                    )
                  }
                />
              </div>
              {errors?.phoneNumber && (
                <p className="text-[#F04438] mt-0.5">{errors.phoneNumber}</p>
              )}
            </label>
            <label className="flex flex-col w-full pb-[20px]">
              <span className="block text-[14px] font-medium text-[#2C3131]">
                Kata sandi
                <span>
                  <label className="text-[#E8DC00] text-[16px]">*</label>
                </span>
              </span>
              <div className="flex flex-row w-[100%]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukan kata sandi anda"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange('password')}
                  className={
                    errors?.password
                      ? 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                      : 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                  }
                />
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
                        fill="#9E9FA2"
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
                Konfirmasi Kata sandi
                <span>
                  <label className="text-[#E8DC00] text-[16px]">*</label>
                </span>
              </span>
              <div className="flex flex-row w-[100%]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukan kata sandi anda"
                  name="password"
                  id="password"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  className={
                    errors?.confirmPassword
                      ? 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                      : 'mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
                  }
                />
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
                        fill="#9E9FA2"
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
                <p className="text-[#F04438] mt-0.5">
                  {errors.confirmPassword}
                </p>
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
              title="Daftar"
              onSubmit={handleSubmit} //to test the popup, change the value handleSubmit to openPopup
              disable={isSubmitting}
            />
            {isPopUpOpen && (
              <div
                id="pop_up"
                className="w-[100%] rounded-md flex flex-col py-auto  items-center justify-center bg-opacity-50 fixed bottom-0 left-0 right-0 top-0 bg-white p-4 shadow-lg transition-transform duration-1500 transform translate-y-0 z-50"
              >
                <div className="flex flex-col pt-[24px] pb-[40px] items-center bg-white min-w-[50vw] px-[16px]">
                  <label className="text-[20px] font-medium">
                    Pilih Metode Verifikasi
                  </label>

                  <label className="text-center text-[16px] font-normal mt-[16px]">
                    Pilih salah satu metode dibawah ini untuk mendapatkan kode
                    verifikasi
                  </label>
                  <div className="mt-[20px] flex flex-col gap-[8px] w-[100%] z-50">
                    <button
                      className={`w-[100%] flex border-[1px] rounded-[12px] ${
                        isEmailClicked
                          ? 'border-yellow-400 drop-shadow-xl'
                          : 'border-[#F3F3F3]'
                      } p-[16px] flex-row items-center gap-[16px] cursor-pointer bg-white`}
                      onClick={handleEmailClick}
                    >
                      <img
                        src={'/assets/EmailIcon.png'}
                        alt="/"
                        width={48}
                        height={48}
                      />
                      <div className="flex flex-col w-[100%] justify-start text-left">
                        <label className="text-[16px] font-semibold">
                          Email ke
                        </label>
                        <label className="text-[14px] font-normal text-[#AEAFB1]">
                          {formData.email}
                        </label>
                      </div>
                    </button>
                    <button
                      className={`w-[100%] flex border-[1px] rounded-[12px] ${
                        isWhatsAppClicked
                          ? 'border-green-400 drop-shadow-xl'
                          : 'border-[#F3F3F3]'
                      } p-[16px] flex-row items-center gap-[16px] cursor-pointer bg-white`}
                      onClick={handleWhatsAppClick}
                    >
                      <img
                        src={'/assets/WhatsappIcon.png'}
                        alt="/"
                        width={48}
                        height={48}
                      />
                      <div className="flex flex-col w-[100%] justify-start text-left">
                        <label className="text-[16px] font-semibold">
                          Whatsapp ke
                        </label>
                        <label className="text-[14px] font-normal text-[#AEAFB1]">
                          {formData.phoneNumber}
                        </label>
                      </div>
                    </button>
                    {/* <VerificationChoices
                      title={'Email ke'}
                      desc={formData.email}
                      isWhatsapp={false}
                    />
                    <VerificationChoices
                      title={'Whatsapp ke'}
                      desc={formData.phoneNumber}
                      isWhatsapp={true}
                    /> */}
                    <button
                      className="w-[100%] justify-center align-middle py-[10px] bg-[#FFF200] rounded-[12px] border-none text-[14px] font-medium"
                      type="button"
                      // onClick={onSubmit}
                      // disabled={disable}
                      onClick={onModalOpen} // Call the onModalOpen prop function to open the modal
                    >
                      Lanjutkan
                    </button>{' '}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;

/* eslint-disable @next/next/no-html-link-for-pages */
import { ErrorMessage, Formik } from 'formik';
import { title } from 'process';
import { FC, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { VerifyRegistrationController } from '@/apiHandlers/auth/verify-registration/handler';
import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import OTPInput from '@/components/common/OTPInput/OTPInput';
import SecondaryBtnSubmit from '@/components/common/SecondaryButton/SecondaryBtnSubmit';
import { OTPInterface } from '@/interfaces/Auth';
import { otpValidationSchema } from '@/lib/validation/otpValidationSchema';

import Modal from './modal/Modal';

// new updated
interface OTPInputProps {
  onSubmit?: (otp: string) => void;
}

const initialOTPState: OTPInterface = {
  otp: ['', '', '', ''],
};
interface AuthOTPContentProps {
  onModalOpen: () => void; // Callback function prop to open the modal
}

const AuthOTPContent: React.FC<AuthOTPContentProps> = ({ onModalOpen }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;

    setOtp(updatedOtp);

    // Move focus to the next input field
    if (e.target.value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move focus to the previous input field on backspace press
      inputRefs.current[index - 1].focus();
    }
  };

  const submit = async (values: string[], { setSubmitting }: any) => {
    try {
      let newValues = '';
      for (const otps of otp) {
        newValues = newValues.concat(otps);
      }
      console.log('new value', newValues);
      const data = {
        uuid: '123841',
        code: newValues,
      };
      await new VerifyRegistrationController().submit(data);
      toast.success('Verifikasi akun berhasil');
      setTimeout(() => {
        onModalOpen();
      }, 2000);
      // setOtp(values);
    } catch (error) {
      toast.error('Invalid OTP');
      console.log('error', error);
    }
    setSubmitting(false);
  };

  const [remainingTime, setRemainingTime] = useState(30);
  // new auth mock

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  const handleRestartTimer = () => {
    setRemainingTime(30);
  };

  return (
    <Formik
      initialValues={otp}
      validationSchema={otpValidationSchema}
      onSubmit={submit}
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
              Masukan OTP
            </p>
            <p className="text-center text-md font-normal text-[#5F6063] max-w-[424px]">
              Kami telah mengirimkan kode OTP ke nomor WhatsApp +628108123456{' '}
            </p>
          </div>
          <div className="flex flex-col w-full">
            {/* <OTPInput /> */}
            <div className="w-[100%] flex flex-row justify-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) =>
                    (inputRefs.current[index] = ref as HTMLInputElement)
                  }
                  id="otp"
                  name="otp"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  className="w-[100%] max-w-[73px] h-[70px]  border-none bg-[#F3F3F3] rounded-[12px] text-4xl font-semibold text-center m-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleInputKeyDown(e, index)}
                />
              ))}
            </div>
            <label className="flex w-[100%] h-[100%] py-[28px] text-[14px] text-[#AEAFB1] items-end">
              Belum menerima kode? &nbsp;
              <span
                className="text-[#E8DC00] cursor-pointer"
                onClick={handleRestartTimer}
              >
                Kirim Ulang ({formatTime(remainingTime)})
              </span>
            </label>
            <AuthBtnSubmit
              title="Lanjutkan"
              onSubmit={handleSubmit}
              disable={isSubmitting}
            />
            <SecondaryBtnSubmit imgMode={false} title="Ubah Nomor Telepon" />
          </div>
        </>
      )}
    </Formik>
  );
};

export default AuthOTPContent;

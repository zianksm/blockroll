/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from 'react';

import { RegisterConroller } from '@/apiHandlers/auth/registerr/handler';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [remainingTime, setRemainingTime] = useState(30);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  const handleRestartTimer = () => {
    new RegisterConroller().MockgenerateOTP();
    setRemainingTime(30);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-10 ">
      <div className="bg-white rounded-lg shadow-lg p-4 z-50 max-w-[375px] w-full gap-4">
        <img
          src="/assets/Icons/emailIcon.svg"
          alt="Modal Image"
          className="flex mx-auto"
        />
        <h2 className="text-center text-xl font-bold mt-4">Cek Email Anda! </h2>
        <p className="text-center text-base text-gray-500 mt-4">
          Kami telah mengirimkan tautan aktivasi akun ke email anda!{' '}
        </p>
        <label className="text-center flex w-[100%] h-[100%] py-[28px] text-[14px] text-[#AEAFB1] mx-auto  items-center justify-center">
          Belum menerima kode? &nbsp;
          <span
            className="text-[#E8DC00] cursor-pointer"
            onClick={handleRestartTimer}
          >
            Kirim Ulang ({formatTime(remainingTime)})
          </span>
        </label>
        <a
          href="/auth/authOTP"
          className="block text-center text-[#E8DC00] mt-4 mb-12"
          // onClick={onClose}
        >
          kembali
        </a>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Modal;

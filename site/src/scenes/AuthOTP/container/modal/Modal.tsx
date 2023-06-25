/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-10 ">
      <div className="bg-white rounded-lg shadow-lg p-4 z-50 max-w-[375px] w-full gap-4">
        <img
          src="/assets/Icons/Success.svg"
          alt="Modal Image"
          className="flex mx-auto"
        />
        <h2 className="text-center text-xl font-bold mt-4">
          Verifikasi Sukses!
        </h2>
        <p className="text-center text-base text-gray-500 mt-4">
          Akun anda telah terverifikasi. Selamat datang di Einstein, User!{' '}
        </p>
        <a href="/" className="block text-center text-[#E8DC00] mt-6 mb-12">
          Beranda
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

import { Formik } from 'formik';
import { FC, useState } from 'react';

import EyeIcon from '../../../../../public/assets/Eye.svg';
// import styles from './PhoneForm.module.css';

export interface PhoneFormProps {
  title: string;
  placeholder: string;
  required: boolean;
}
const PhoneForm: FC<PhoneFormProps> = ({
  title,
  placeholder,
  required = true,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  return (
    <>
      <label className="flex flex-col w-full pb-[20px]">
        <span className="block text-[14px] font-medium text-[#2C3131]">
          {title}
          <span>
            {''}
            {required && (
              <label className="text-[#12B76A] text-[14px]"> (WhatsApp)*</label>
            )}
          </span>
        </span>
        <div className="relative flex flex-row w-[100%] items-center gap-[6px]">
          <select
            className=" mt-[6px] pl-[40px] pl-[20px] h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+1">
              <img
                src="/assets/IndonesiaFlag.png"
                alt="/"
                width={22}
                height={16}
              />{' '}
              +1
            </option>
            <option value="+91">+62</option>
            {/* Add more country options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center top-[6px]">
            <img
              src="/assets/IndonesiaFlag.png"
              alt="/"
              width={22}
              height={16}
            />
          </div>
          <input
            type="number"
            placeholder={placeholder}
            className="mt-[6px] pl-[8px] flex flex-row w-full h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]"
          />
        </div>
      </label>
    </>
  );
};

export default PhoneForm;

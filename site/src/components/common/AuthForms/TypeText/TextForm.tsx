import { Formik } from 'formik';
import { FC } from 'react';

// import styles from './TextForm.module.css';

export interface TextFormProps {
  title: string;
  placeholder: string;
  required: boolean;
}

const TextForm: FC<TextFormProps> = ({
  title,
  placeholder,
  required = false,
}) => (
  <>
    <label className="flex flex-col w-[100%] pb-[20px]">
      <span className="block text-[14px] font-medium text-[#2C3131]">
        {title}{' '}
        <span>
          {''}
          {required && <label className="text-[#E8DC00] text-[16px]">*</label>}
        </span>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]"
      />
    </label>
  </>
);

export default TextForm;
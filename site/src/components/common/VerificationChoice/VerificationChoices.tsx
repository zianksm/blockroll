import { Formik } from 'formik';
import { FC } from 'react';

export interface VerificationChoicesProps {
  title: string;
  desc: string;
  isWhatsapp: boolean;
}

const VerificationChoices: FC<VerificationChoicesProps> = ({
  title,
  desc,
  isWhatsapp = false,
}) => {
  return (
    <button className="w-[100%] flex border-[1px] rounded-[12px] border-[#F3F3F3] p-[16px] flex-row items-center gap-[16px] cursor-pointer bg-white">
      <img
        src={isWhatsapp ? '/assets/WhatsappIcon.png' : '/assets/EmailIcon.png'}
        alt="/"
        width={48}
        height={48}
      />

      <div className="flex flex-col w-[100%] justify-start text-left">
        <label className="text-[16px] font-semibold">{title}</label>
        <label className="text-[14px] font-normal text-[#AEAFB1]">{desc}</label>
      </div>
    </button>
  );
};

export default VerificationChoices;

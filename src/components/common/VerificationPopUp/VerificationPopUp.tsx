import { Formik } from 'formik';
import { FC } from 'react';

export interface VerificationPopUpProps {
  title: string;
  desc: string;
  isEmail: boolean;
}

const VerificationPopUp: FC<VerificationPopUpProps> = ({
  title,
  desc,
  isEmail = false,
}) => {
  return (
    <div className="w-[100%] flex flex-col h-auto px-[14px] pt-[24px] pb-[24px] bg-white justify-center items-center text-center">
      <img
        src={isEmail ? '/assets/EmailIcon.png' : '/assets/SuccessIcon.png'}
        alt="/"
        width={72}
        height={72}
        className="pb-[16px]"
      />
      <label className="w-[100%] text-[20px] font-semibold pb-[16px]">
        {title}
      </label>
      <label className="w-[100%] text-[16px] font-normal text-center pb-[16px]">
        {desc}
      </label>

      {isEmail ? (
        <label className="w-[100%] text-[14px] font-normal text-center pb-[24px] text-[#AEAFB1]">
          Belum menerima email?{' '}
          <span className="text-[#E8DC00]">&nbsp;Kirim ulang</span>
        </label>
      ) : null}
    </div>
  );
};

export default VerificationPopUp;

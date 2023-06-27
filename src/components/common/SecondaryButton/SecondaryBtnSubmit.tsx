import { Formik } from 'formik';
import { FC, useState } from 'react';

import styles from './SecondaryBtnSubmit.module.css';

export interface SecondaryBtnSubmitProps {
  title: string;
  imgMode: boolean;
  imgPath?: string;
}

const SecondaryBtnSubmit: FC<SecondaryBtnSubmitProps> = ({
  title,
  imgMode = false,
  imgPath,
}) => {
  const [isImg, setIsImg] = useState(false);
  return (
    // <Formik>
    <button className="flex w-[100%] justify-center items-center min-h-[40px] mt-[12px] py-[10px] bg-[#FFFEE6] rounded-[12px] border-none text-[14px] font-medium text-[#E8DC00]">
      {imgMode ? <img src={imgPath} alt="/" width={15} height={15} /> : title}
    </button>
    // </Formik>
  );
};

export default SecondaryBtnSubmit;

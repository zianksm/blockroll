import { Formik } from 'formik';
import { FC } from 'react';

import styles from './AuthBtnSubmit.module.css';

export interface AuthBtnSubmitProps {
  title: string;
  onSubmit: () => void;
  disable: boolean;
}

const AuthBtnSubmit: FC<AuthBtnSubmitProps> = ({
  title,
  onSubmit,
  disable,
}) => (
  <button
    className="w-[100%] justify-center align-middle py-[10px] bg-[#FFF200] rounded-[12px] border-none text-[14px] font-medium"
    type="button"
    onClick={onSubmit}
    disabled={disable}
  >
    {disable ? 'loading' : title}
  </button>
);

export default AuthBtnSubmit;

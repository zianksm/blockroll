import Image from 'next/image';
import { FC, ReactElement } from 'react';

import styles from './AuthHeader.module.css';

interface AuthHeaderProps {
  children: ReactElement;
  title: string;
  desc: string;
}

export const AuthHeader: FC<AuthHeaderProps> = ({ title, desc }) => {
  return (
    <div className="relative w-[100vw] px-[16px] pt-[80px] pb-[24px] h-[auto] bg-[none] overflow-hidden mb-[24px]">
      <img
        src="/assets/AuthHeaderBackground.png"
        alt="/"
        className="absolute w-[100%] h-[100%] top-0 left-0 z-[-1] "
      />
      <h1 className="flex text-[30px] font-semibold z-0">{title}</h1>
      <h5 className="flex text-[16px] font-normal">{desc}</h5>
    </div>
  );
};

const getLayout = (page: ReactElement) => (
  <AuthHeader title={''} desc={''}>
    {page}
  </AuthHeader>
);

export default getLayout;

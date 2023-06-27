import { FC } from 'react';

import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  desc: string;
  href: string;
  excerpt: string;
  author: string;
  icon: string;
  value?: string;
  isTeacher?: boolean;
  isStudent?: boolean;
  isParent?: boolean;
}

const Card: FC<CardProps> = ({
  desc,
  href,
  excerpt,
  author,
  icon,
  isTeacher,
  isParent,
  isStudent,
  value,
}) => (
  <div
    className={`bg-white flex rounded-xl drop-shadow-lg flex-col start-0 p-4 gap-4 w-full `}
  >
    {/* ICON */}
    <div className="flex justify-between items-center">
      <div className="bg-[#2C90D1] rounded-full w-10 h-10 justify-center align-middle flex p-2">
        <img src={icon} alt="" />
      </div>
      <h2 className="text-[32px] font-semibold">{value}</h2>
    </div>
    {/* Card Body */}
    <h2 className="text-sm font-semibold">{desc}</h2>
    <div className="flex">
      <p className="text-xs text-[#2C90D1] font-normal mt-2">Detail &gt;</p>
    </div>
  </div>
);

export default Card;

import { FC } from 'react';

import styles from './Card.module.css';

export interface CardExamProps {
  desc: string;
  lecturer: string;
  date: string;
  time: string;
  examTime: string;
  isTeacher?: boolean;
  isStudent?: boolean;
  isParent?: boolean;
  place?: string;
  subject?: string;
}

const CardExam: FC<CardExamProps> = ({
  desc,
  lecturer,
  date,
  time,
  examTime,
  place,
  subject,
  isTeacher,
  isParent,
  isStudent,
}) => (
  <div className="flex bg-white  rounded-xl drop-shadow-lg flex-col  gap-4   h-full ">
    {/* // <a href={href} className={styles.wrapper}> */}
    <div className="flex-col ">
      <div className="flex justify-between p-5">
        <h2 className="text-sm font-semibold">{desc}</h2>
        <div className="rounded-xl bg-[#12B76A] flex justify-center align-middle max-w-[65px] w-full">
          <p className="text-[10px] text-white font-semibold my-auto">{time}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between border-t p-4 gap-4">
        <div
          className={`flex ${
            isTeacher ? 'flex-col' : 'flex-row'
          }  gap-4 max-w-[315px] w-full`}
        >
          <div className="flex gap-3">
            <img className="w-3" src="/assets/Icons/calendar.svg" alt="" />
            <p className="text-xs text-[#86878B] font-normal my-auto">{date}</p>
          </div>
          {!isTeacher && (
            <div className="flex">
              <img src="/assets/Icons/Line.svg" alt="" />
            </div>
          )}
          <div className="flex gap-3">
            <img className="w-3" src="/assets/Icons/time.svg" alt="" />
            <p className="text-xs text-[#86878B] font-normal my-auto">
              {examTime}
            </p>
          </div>
        </div>
        {isTeacher ? (
          <div className="flex flex-row gap-2 max-w-[315px] w-full">
            <img className="w-4" src="/assets/Icons/building.svg" alt="" />
            <p className="text-xs text-[#86878B] font-normal my-auto">
              {place}
            </p>
          </div>
        ) : (
          <div className="flex flex-row gap-2 max-w-[315px] w-full">
            <img className="w-4" src="/assets/Icons/Profile.svg" alt="" />
            <p className="text-xs text-[#86878B] font-normal my-auto">
              {lecturer}
            </p>
          </div>
        )}
      </div>
    </div>
    {/* <p className={styles.excerpt}>{excerpt}</p> */}
    {/* </a> */}
  </div>
);

export default CardExam;

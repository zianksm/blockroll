import { Formik } from 'formik';
// import CreatorIcon from 'public/assets/CreatorIcon';
import { FC } from 'react';

export interface SubjectCardProps {
  title?: string;
  href?: string;
  excerpt?: string;
  price?: string;
  cardImgPath?: string;
  instructorName?: string;
  isPlay?: boolean;
}

const SubjectCard: FC<SubjectCardProps> = ({
  title,
  price,
  cardImgPath,
  instructorName,
  isPlay,
}) => {
  return (
    // <Formik>
    <div
      className={`max-w-[288px] w-[255px] ${
        isPlay ? 'max-h-[310px]' : 'max-h-[310px]'
      }  h-full flex flex-col rounded-[12px] shadow-md`}
    >
      {isPlay && (
        <div className="absolute font-semibold bg-[#FFF200] flex justify-center items-center rounded-full w-[40px] h-[40px] top-[110px] left-[195px]">
          <img
            src="/assets/Icons/playIcon.svg"
            alt="/"
            className="h-[14px] w-[14px]"
          />
        </div>
      )}
      <img
        src="/assets/cardImgExample.png"
        alt="/"
        className=" h-full max-h-[132px] h-[132px] object-cover rounded-tl-[12px]  rounded-tr-[12px]"
      />
      {isPlay ? (
        <div className="absolute top-[138px] left-[12px] flex flex-row gap-2 items-center justify-center bg-[#EAF4FF] h-[26px] w-[76px] rounded-xl ">
          <img
            src="/assets/Icons/playIconBlue.svg"
            alt="/"
            className="h-[14px] w-[14px]"
          />
          <p className="text-[#2E90FA] text-[10px]">10 Video</p>
        </div>
      ) : (
        <div className="absolute top-[106px] flex flex-row gap-2 pl-2 items-center bg-[#F04438]  h-[26px] w-[255px]">
          <img src="/assets/Icons/groupIcon.svg" alt="/" className="" />{' '}
          <p className="text-[10px] text-white">38/40 Sudah Mendaftar!</p>
        </div>
      )}
      <div
        className={`px-[12px] ${
          isPlay ? 'py-[20px] ' : ''
        }flex flex-col gap-1 mt-4`}
      >
        <label className="text-[12px] font-medium">
          Paket Belajar Menempuh Gelar Dokter Lengkap!
        </label>
        <label className="text-[18px] font-bold ">IDR 150.000</label>

        {isPlay ? (
          <>
            <div className="flex flex-row gap-[7px] items-center">
              {/* <CreatorIcon /> */}
              <label className="text-[10px] font-normal text-[#38393A]">
                dr. John Doe, S.Ked., Sp.G.
              </label>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row gap-[7px] items-center">
              {/* <CreatorIcon /> */}
              <label className="text-[10px] font-normal text-[#38393A]">
                dr. John Doe, S.Ked., Sp.G.
              </label>
            </div>
            <div className="flex flex-row gap-[7px] items-center">
              <img
                src="/assets/Icons/calenderYellow.svg"
                alt="/"
                className=""
              />{' '}
              <label className="text-[10px] font-normal text-[#38393A]">
                Sabtu, 27 April 2023 09:00 (GMT +8){' '}
              </label>
            </div>
          </>
        )}
        <div className={`flex ${isPlay ? 'justify-between' : 'justify-end'} `}>
          {isPlay && (
            <div className="flex items-center gap-1">
              <img
                src="/assets/Icons/eyeIcon.svg"
                alt="/"
                className="h-[12px] w-[6px]"
              />{' '}
              <p className="text-[10px] text-[#86878B]">12,109 ditonton</p>
            </div>
          )}
          <div className="flex flex-col items-end gap-1">
            <div className="flex bg-[#DA3E33]  rounded-lg justify-center items-center h-[18px] w-[40px]">
              <p className="text-white font-semibold text-[8px]">Promo!</p>
            </div>
            <p className="text-sm text-[#DA3E33] font-semibold">IDR 150,000</p>
          </div>
        </div>
      </div>
    </div>
    // </Formik>
  );
};

export default SubjectCard;

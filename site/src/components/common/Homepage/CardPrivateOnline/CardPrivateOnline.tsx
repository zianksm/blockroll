import { Formik } from 'formik';
import { useRouter } from 'next/router';
import CreatorIcon from 'public/assets/CreatorIcon';
import { FC } from 'react';

export interface CardPrivateOnlineProps {
  id?: number;
  title?: string;
  href?: string;
  excerpt?: string;
  price?: string;
  cardImgPath?: string;
  instructorName?: string;
}

const CardPrivateOnline: FC<CardPrivateOnlineProps> = ({
  title,
  price,
  cardImgPath,
  instructorName,
  href,
  id,
}) => {
  const history = useRouter();

  const handleButtonClick = () => {
    history.push(`/course/${id}`);
  };
  return (
    // <Formik>
    <div className="max-w-[288px] w-[255px] max-h-[296px] flex flex-col rounded-[12px] shadow-md">
      <div className="absolute px-[16px] py-[4px] text-[10px] font-semibold bg-[#FFF200] flex justify-center items-center rounded-full top-[12px] left-[12px]">
        <label>Private Online</label>
      </div>
      <img
        src={href}
        alt="/"
        className=" h-full max-h-[104px] object-cover rounded-tl-[12px]  rounded-tr-[12px]"
      />
      <div className="px-[12px] py-[20px] flex flex-col">
        <label className="text-[12px] font-medium pb-[8px]">{title}</label>
        <div className="flex flex-row gap-[14px] pb-[8px]">
          <div className="flex justify-center items-center bg-[#FEECEB] text-[#DA3E33] font-bold text-[8px] rounded-[4px]">
            <label>30% DISKON</label>
          </div>
          <div className=" flex justify-center items-center text-[#DA3E33] font-bold text-[8px] rounded-[4px]">
            <label className="relative">
              <span className="absolute top-[6px] left-[35%]">
                <hr className="w-[30px] bg-[#DA3E33] h-[1px] border-[#DA3E33]" />
              </span>{' '}
              IDR 500,000
            </label>
          </div>
        </div>
        <label className="text-[18px] font-bold ">{price}</label>

        <div className="flex flex-row gap-[7px] items-center">
          <CreatorIcon />
          <label className="text-[10px] font-normal text-[#38393A]">
            {instructorName}
          </label>
        </div>
        <button
          className=" justify-center align-middle py-[8px] mt-4 bg-[#FFF200] rounded-[12px] border-none text-[12px] font-medium mb-[8px]"
          type="button"
          onClick={handleButtonClick}
        >
          Beli Paket
        </button>
        {/* <button
          className="w-[100%] justify-center align-middle py-[8px] rounded-[12px] border-none text-[12px] font-medium text-[#9E9FA2]"
          type="submit"
        >
          Lihat Detail
        </button> */}
      </div>
    </div>
    // </Formik>
  );
};

export default CardPrivateOnline;

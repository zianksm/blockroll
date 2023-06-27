import { useRouter } from 'next/router';
import React from 'react';
interface PropsCourse {
  id?: number;
}
export default function LeftContent(props: PropsCourse) {
  const { id } = props;

  const router = useRouter();

  function handleBack() {
    router.push(`/course/${id}`);
  }
  return (
    <div className="flex p-6 h-[399px]  bg-white rounded-xl shadow flex-col justify-start items-start gap-2  w-full lg:w-[100vh]">
      {/* Fee Detail */}
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full gap-2 px-2">
          <p className=" max-w-[614px] text-neutral-700 text-[20px] font-bold">
            Ringkasan Belanja{' '}
          </p>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center justify-between  ">
              <p className=" text-gray-700 text-[12px] font-normal ">
                Total harga
              </p>{' '}
              <p className="text-right text-gray-700 text-[12px] font-bold leading-none">
                IDR 500,000
              </p>
            </div>
            <div className="flex flex-row items-center justify-between  ">
              <p className=" text-gray-700 text-[12px] font-normal ">
                Diskon promo
              </p>{' '}
              <p className="text-right  text-red-500 text-[12px] font-bold leading-none">
                - IDR 10,000
              </p>
            </div>
          </div>
        </div>
        <div className="h-[8px] border border-[#F3F3F3] bg-[#F3F3F3] w-full"></div>
      </div>

      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col w-full gap-2 px-2">
          <div className="flex flex-row items-center justify-between  ">
            <p className=" max-w-[614px] text-neutral-700 text-[20px] font-bold">
              Biaya Transaksi
            </p>
          </div>
          <div className="flex flex-row items-center justify-between  ">
            <p className=" text-gray-700 text-[12px] font-normal ">
              Biaya Jasa Aplikasi{' '}
            </p>{' '}
            <p className="text-right text-gray-700 text-[12px] font-bold leading-none">
              IDR 1,000
            </p>
          </div>
        </div>
        <div className="h-[8px] border border-[#F3F3F3] bg-[#F3F3F3] "></div>
      </div>
      {/* Total */}
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <p className=" text-neutral-700 text-[20px] font-bold ">Total Bayar</p>{' '}
        <p className="text-right text-[#2E90FA] text-[16px font-bold leading-none">
          IDR 500,000
        </p>
      </div>
      {/* Button */}
      <div className="w-full pb-4 ">
        <button
          className="w-full  h-[40px] bg-[#FFF200] rounded-xl justify-center items-center gap-[10px] flex mt-4"
          // onClick={handleClick}
        >
          <div className="text-neutral-700 text-[14px] font-medium leading-tight">
            Lanjutkan
          </div>
        </button>
        <button
          className="w-full  h-[40px] bg-[#FFFBB0] rounded-xl justify-center items-center gap-[10px] flex mt-4"
          onClick={handleBack}
        >
          <div className="text-[#8C8500] text-[14px] font-medium leading-tight">
            Kembali
          </div>
        </button>
      </div>
    </div>
  );
}

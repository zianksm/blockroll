import { useRouter } from 'next/router';
import React from 'react';

interface PropsCourse {
  id?: number;
}

export default function LeftContent(props: PropsCourse) {
  const { id } = props;
  const router = useRouter();
  function handleNext() {
    router.push(`/checkout/${id}`);
  }
  function handleBack() {
    router.back();
  }
  return (
    <div className="flex p-6 h-[252px]  w-full bg-white rounded-xl shadow flex-col justify-start items-start gap-2 lg:w-[100vh] ">
      <p className=" max-w-[614px] text-neutral-700 text-[20px] font-bold">
        Ringkasan Pembayaran{' '}
      </p>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row items-center justify-between  ">
          <p className=" text-gray-700 text-[12px] font-normal ">Harga paket</p>{' '}
          <p className="text-right text-gray-700 text-[12px] font-bold leading-none">
            IDR 500,000
          </p>
        </div>
        <div className="flex flex-row items-center justify-between  ">
          <p className=" text-yellow-400 text-[12px] font-normal ">
            Diskon 50%
          </p>{' '}
          <p className="text-right text-gray-700 text-[12px] font-bold leading-none">
            IDR 250,000
          </p>
        </div>
        <div className="h-[0px] border border-zinc-100"></div>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <p className=" text-gray-700 text-[12px] font-normal ">Total</p>{' '}
        <p className="text-right text-red-500 text-[16px font-bold leading-none">
          IDR 250,000
        </p>
      </div>
      <div className="w-full pb-4 ">
        <button
          className="w-full  h-[50px] bg-[#FFF200] rounded-xl justify-center items-center gap-[10px] flex mt-4"
          onClick={handleNext}
        >
          <div className="text-neutral-700 text-[14px] font-medium leading-tight">
            Lanjutkan
          </div>
        </button>
      </div>
    </div>
  );
}

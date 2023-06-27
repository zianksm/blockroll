import React, { useState } from 'react';

export default function Body() {
  const [activeTab, setActiveTab] = useState('tentang');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="h-[462px] pb-8 bg-white rounded-xl shadow flex-col justify-start items-start gap-[22px] flex">
      <div className="self-stretch px-8 bg-white border-b  justify-start items-start gap-[20px] flex  rounded-t-xl">
        <div
          className={`px-8 py-4  cursor-pointer ${
            activeTab === 'tentang' ? 'border-b-2 border-yellow-400' : ''
          } justify-center items-start gap-2 flex`}
          onClick={() => handleTabClick('tentang')}
        >
          <div className="text-neutral-700 text-[14px] font-medium">
            Tentang
          </div>
        </div>
        <div
          className={`px-8 py-4 cursor-pointer ${
            activeTab === 'review' ? ' border-b-2 border-yellow-400' : ''
          } justify-center items-start gap-2 flex`}
          onClick={() => handleTabClick('review')}
        >
          <div className="text-neutral-400 text-[14px] font-medium">Review</div>
        </div>
      </div>
      <div className=" h-[82px] px-8 flex-col justify-start items-start flex">
        <div className="p-[0px] justify-start items-start gap-2 flex">
          <div className="text-neutral-700 text-[16px] font-semibold leading-normal">
            Mentor
          </div>
        </div>
        <div className=" h-2 relative bg-zinc-100 bg-opacity-0" />
        <div className=" h-2 relative bg-zinc-100 bg-opacity-0" />
        <div className=" p-[0px] justify-start items-start gap-4 flex">
          <div className="w-[42px] h-[42px] relative rounded-full">
            <div className="w-[42px] h-[42px] left-[0px] top-[0px] ">
              <img
                className="w-[42px] h-[42px] left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/Profiles.svg"
              />
            </div>
          </div>
          <div className="grow shrink basis-0 p-[0px] flex-col justify-start items-start flex">
            <div className=" text-neutral-700 text-[14px] font-medium leading-tight">
              dr. John Doe, S.Ked., Sp.G.
            </div>
            <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
            <div className=" text-zinc-500 text-[12px] font-normal leading-none">
              Dokter Spesialis Gizi RSUD Sanglah Denpasar
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[252px] px-8 flex-col justify-start items-start flex">
        <div className="p-[0px] justify-start items-start gap-2 flex">
          <div className="text-neutral-700 text-[16px] font-semibold leading-normal">
            Tentang
          </div>
        </div>
        <div className=" h-2 relative bg-zinc-100 bg-opacity-0" />
        <div className="self-stretch text-zinc-500 text-[14px] font-normal leading-normal">
          Lorem ipsum dolor sit amet consectetur. Molestie risus pellentesque
          accumsan diam condimentum habitant. Mauris egestas odio phasellus dui
          lectus platea in.{' '}
        </div>
        <div className="h-2 relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            21 ribu menit video belajar interaktif
          </div>
        </div>
        <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              {' '}
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            100 ribu video belajar bersama guru
          </div>
        </div>
        <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              {' '}
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            Monitor belajar dengan Jadwal & Laporan Belajar
          </div>
        </div>
        <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              {' '}
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            Akses semua mata pelajaran 5-6 SD
          </div>
        </div>
        <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              {' '}
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            Playlist Belajar (Rencana belajar dari Master Teacher)
          </div>
        </div>
        <div className=" h-[4px] relative bg-zinc-100 bg-opacity-0" />
        <div className="p-[0px] justify-start items-center gap-4 flex">
          <div className="w-[20px] h-[20px] relative">
            <div className="w-[20px] h-[20px] left-[0px] top-[0px]">
              {' '}
              <img
                className="left-[0px] top-[0px]  rounded-full"
                src="/assets/Icons/checkCircle.svg"
              />
            </div>
          </div>
          <div className=" text-zinc-500 text-[14px] font-normal leading-normal">
            Latihan Kuis di setiap akhir video
          </div>
        </div>
      </div>
    </div>
  );
}

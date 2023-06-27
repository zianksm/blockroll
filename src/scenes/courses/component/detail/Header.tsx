import React from 'react';

export default function Header() {
  return (
    <div className="flex  p-8 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 ">
      <p className=" max-w-[614px] text-neutral-700 text-[20px] font-bold">
        Paket Belajar Menempuh Gelar Dokter Lengkap!
      </p>
      <div className="p-[0px] justify-start  gap-4 flex flex-col items-start sm:flex-row sm:items-center">
        <div className="px-4 py-4 h-[30px] bg-yellow-50 rounded-full justify-center items-center gap-2 flex">
          <img className="w-4 h-4 " src="/assets/Icons/user.svg" />
          <p className="max-w-[128px]  text-yellow-400 text-[12px] font-medium ">
            Private Online
          </p>
        </div>
        <div className=" h-[30px] bg-transparent rounded-full justify-center items-center gap-2 flex">
          <img className="w-4 h-4 " src="/assets/Icons/Star.svg" />
          <p className="max-w-[128px]  text-[12px] font-medium ">
            4.8/5 (1,235 reviews)
          </p>
        </div>
        <div className=" h-[30px] bg-transparent rounded-full justify-center items-center gap-2 flex">
          <img className="w-4 h-4 " src="/assets/Icons/group.svg" />
          <p className="text-[12px] font-medium ">2,560 pengguna </p>
        </div>{' '}
        <div className=" h-[30px] bg-transparent rounded-full justify-center items-center gap-2 flex">
          <img className="w-4 h-4 " src="/assets/Icons/Clock.svg" />
          <p className="text-[12px] font-medium ">120 menit </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function LeaveApplication() {
  return (
    <div className="flex flex-col w-full justify-start">
      <div className="flex flex-row justify-between my-auto mt-5">
        <p className="font-semibold text-xl">Pengajuan Cuti</p>
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          Selengkapnya &rarr;{' '}
        </a>
      </div>
      <div className="flex flex-col bg-white rounded-xl shadow-2xl w-full mt-4 xl:mt-4">
        <div className="flex flex-col py-6 px-6  gap-4">
          <div className="bg-[#FFF200] rounded-full w-10 h-10 justify-center align-middle flex p-2">
            <img src="assets/Icons/building.svg" alt="" />
          </div>
          <p className="font-normal text-lg">Pengajuan Cuti</p>
          <p className="font-normal text-sm text-[#86878B]">
            Anda tidak dapat mengisi kelas yang telah diberikan? Ajukan cuti
            anda agar siswa dapat mengetahui ketidakhadiran anda!
          </p>
        </div>
        <hr />
        <div className="flex gap-4 py-6 px-6">
          <button className="bg-[#FFF200] w-[266px] h-[40px] rounded-xl">
            Lanjutkan
          </button>
          <div className="bg-[#FFFBB0] rounded-xl w-10 h-10 justify-center align-middle flex p-2">
            <img src="assets/Icons/timeYellow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

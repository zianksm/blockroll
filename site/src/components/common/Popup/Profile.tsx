import { useEffect } from '@storybook/addons';
import React, { useState } from 'react';

import { LoginController } from '@/apiHandlers/auth/login/mockHandler';
import { Role } from '@/apiHandlers/baseInterface';

interface ProfileProps {
  role: Role | null;
  name?: string | undefined;
  email?: string | undefined;
  selectedStudent?: number | null;
  handleStudentClick?: (id: number) => void;
}

export default function Profile(props: ProfileProps) {
  // useEffect(() => {
  //   getProfile();
  // }, []);

  const { role, name, email, selectedStudent, handleStudentClick } = props;

  const studentList = [
    { id: 1, name: 'John', icon: '/assets/Icons/Profile.svg' },
    { id: 2, name: 'Emily', icon: '/assets/Icons/Profile.svg' },
  ];
  const settingList = [
    { name: 'Pengaturan 1', icon: '/assets/info.svg' },
    { name: 'Pengaturan 2', icon: '/assets/lock.svg' },
    { name: 'Pengaturan 3', icon: '/assets/bookInfo.svg' },
  ];
  const handleClick = (id: number) => {
    if (handleStudentClick) {
      handleStudentClick(id);
    }
  };
  const handleDeleteSelectedStudent = () => {
    localStorage.removeItem('selectedStudent');
    window.location.reload();
  };
  return (
    <div className="z-40 absolute top-[80%] max-w-[352px] w-full right-[0.5%] gap-5 flex flex-col bg-white rounded-xl p-6 sm:max-w-[352px] shadow-2xl mt-2">
      <div className="z-50 flex gap-5">
        <img
          src="/assets/Icons/Profiles.svg"
          className="w-[54px] h-[54px]"
          alt=""
        />
        <div className="flex flex-col my-auto">
          <p className="text-base font-semibold">{name ? name : ''}</p>
          <div className="flex gap-2">
            <p className="text-xs text-[#E8DC00]">
              {role ? role.toUpperCase() : ''}
            </p>
            <p className="text-xs"> · {email ? email : ''}</p>
          </div>
        </div>
      </div>
      {role === 'parent' && (
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-xs font-semibold text-[#9E9FA2] tracking-[0.2rem]">
              GANTI AKUN SISWA
            </p>
            {selectedStudent && (
              <p
                className="text-[#E8DC00] text-[10px] cursor-pointer"
                onClick={handleDeleteSelectedStudent}
              >
                Kembali ke akun parent
              </p>
            )}
          </div>
          {studentList.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedStudent === item.id
                  ? 'bg-gradient-to-r from-[#ffffff] to-[#FFF200]  '
                  : ''
              }`}
              onClick={() => handleClick(item?.id)}
            >
              <div
                key={index}
                className="flex flex-row items-center gap-4 my-auto mt-4"
              >
                <div className="rounded-full w-[20px] h-[20px]">
                  <img src={item.icon} alt="Icon" className="w-10" />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <p className="flex justify-start my-auto">{item.name}</p>
                  <p className="flex justify-end"> &gt;</p>
                </div>
              </div>
              <hr className="mt-3" />{' '}
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-xs font-semibold text-[#9E9FA2] tracking-[0.2rem]">
          PENGATURAN
        </p>
        {settingList.map((item, index) => (
          <div key={index}>
            <div
              key={index}
              className="flex flex-row items-center gap-4 my-auto mt-4"
            >
              <div className="rounded-full w-[20px] h-[20px]">
                <img src={item.icon} alt="Icon" className="w-10" />
              </div>
              <div className="flex flex-row justify-between w-full">
                <p className="flex justify-start my-auto">{item.name}</p>
                <p className="flex justify-end"> &gt;</p>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

import ExamSection from '../../components/ExamSection';
import OverviewCard from '../../components/Schedule';
import AttendenceList from '../../components/teacher/AttendenceList';
import LeaveApplication from '../../components/teacher/LeaveApplication';
import Payroll from '../../components/teacher/Payroll';

export default function TeacherDashboard() {
  const BuildingIcon = 'assets/Icons/building.svg';
  const UserIcon = 'assets/Icons/userNew.svg';
  const moneyIcon = 'assets/Icons/money.svg';

  const cards = [
    {
      desc: 'Total Kelas Anda',
      icon: BuildingIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '15',
    },
    {
      desc: 'Total Siswa Anda',
      icon: UserIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '1500',
    },
    {
      desc: 'Total Pendapatan Anda',
      icon: moneyIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '10.5000k',
    },
  ];

  return (
    <>
      <div className="gap-4 xl:w-[70%] ">
        <OverviewCard isTeacher={true} data={cards} />
        <AttendenceList />
        <div className="flex flex-col gap-4 xl:flex-row">
          <LeaveApplication />
          <Payroll />
        </div>
      </div>
      <div className="col-span-4 w-full xl:w-[30%]">
        {' '}
        <ExamSection isTeacher={true} />
      </div>
    </>
  );
}

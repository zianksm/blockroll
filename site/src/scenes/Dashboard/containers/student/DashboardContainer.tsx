import React, { useState } from 'react';

import Table from '@/components/common/CardProgram/Card';

import Modal from '../../components/dashboard/modal/Modal';

export default function DashboardComponent() {
  const BuildingIcon = 'assets/Icons/employee.svg';
  const UserIcon = 'assets/Icons/salarymoney.svg';
  const moneyIcon = 'assets/Icons/codesandbox 1.svg';
  const cards = [
    {
      desc: 'Employees',
      icon: BuildingIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '15',
    },
    {
      desc: 'Total Salary',
      icon: UserIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '1500',
    },
    {
      desc: 'Total Transaction',
      icon: moneyIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
      value: '10.5000k',
    },
  ];

  const tableData = [
    {
      no: '1',
      name: 'Michael',
      address: '16iVs9qo657pCear655jv36VekYdD7ijn6nu8TT7quMMMxcW',
    },
    {
      no: '2',
      name: 'Angelo',
      address: '16iVs9qo657pCear655jv36VekYdD7ijn6nu8TT7quMMMxcW',
    },
    {
      no: '3',
      name: 'Marco',
      address: '16iVs9qo657pCear655jv36VekYdD7ijn6nu8TT7quMMMxcW',
    },
    {
      no: '4',
      name: 'Polo',
      address: '16iVs9qo657pCear655jv36VekYdD7ijn6nu8TT7quMMMxcW',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {' '}
      <div className="gap-4 w-full">
        <OverviewCard isTeacher={true} data={cards} />
        <Table data={tableData} isExam={true} />
        <div className="flex w-full justify-end">
          <button
            className="flex justify-center items-center gap-4 w-[191px] bg-[#2C90D1] h-[50px] rounded-xl text-white mt-5"
            onClick={openModal}
          >
            Add Employees
            <img src="/assets/Icons/plus 1.svg" alt="" />
          </button>
        </div>
      </div>
      {isOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

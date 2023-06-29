import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import Table from '@/components/common/CardProgram/Card';
import Modal from '../../components/dashboard/modal/Modal';
import OverviewCard from '../../components/Schedule';
import ModalNetwork from '../../components/dashboard/modal/ModalNetwork';
import SendModal from '../../components/dashboard/modal/SendPayrol';

export default function DashboardComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSendModal, setIsSendModal] = useState(false);

  const [isOpenNet, setIsOpenNet] = useState(false);
  const [isBuild, setIsBuild] = useState(false);
  const [employees, setEmployees] = useState<string[] | undefined>([]);

  const [signer, setSigner] = useState<
    ethers.providers.JsonRpcSigner | undefined
  >(undefined);
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

  useEffect(() => {
    connectToMetaMask();
    checkNetwork();
  }, []);

  const connectToMetaMask = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        console.log('Ethereum not available');
        return;
      }

      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);

      const account = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected to MetaMask', account);
    } catch (error) {
      console.error('Failed to connect to MetaMask:', error);
    }
  };

  const checkNetwork = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        console.log('Ethereum not available');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      console.log('Network', network);

      if (network.chainId !== 1287) {
        setIsOpenNet(true);
        console.log('Invalid network');
      } else {
        console.log('Valid network');
      }
    } catch (error) {
      console.error('Failed to check network:', error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    console.log('open');
  };
  const openSendModal = () => {
    setIsSendModal(true);
    console.log('open');
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeSendModal = () => {
    setIsSendModal(false);
  };

  console.log('employees', isBuild);

  return (
    <>
      <div className="gap-4 w-full">
        <OverviewCard isTeacher={true} data={cards} />
        <Table data={tableData} isExam={true} />
        <div className="flex w-full justify-end gap-4">
          <button
            className="flex justify-center items-center gap-4 w-[191px] bg-[#2cd12f] h-[50px] rounded-xl text-white mt-5"
            onClick={openSendModal}
          >
            Send Payroll
            <img src="/assets/Icons/plus 1.svg" alt="" />
          </button>
          <button
            className="flex justify-center items-center gap-4 w-[191px] bg-[#2C90D1] h-[50px] rounded-xl text-white mt-5"
            onClick={openModal}
          >
            Add Employees
            <img src="/assets/Icons/plus 1.svg" alt="" />
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          signer={signer}
          setBuild={setIsBuild}
          setEmployees={setEmployees}
        />
      )}
      {isSendModal && (
        <SendModal
          closeModal={closeSendModal}
          signer={signer}
          setBuild={setIsBuild}
          isBuild={isBuild}
        />
      )}
      {isOpenNet && <ModalNetwork closeModal={closeModal} />}
    </>
  );
}

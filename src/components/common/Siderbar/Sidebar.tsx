import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { LoginController } from '@/apiHandlers/login/mockHandler';

import { Role } from '../../../apiHandlers/baseInterface';

export interface SidebarProps {
  isShow: boolean;
  role: Role | null;
  showSidebar: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isShow, role, showSidebar } = props;
  const router = useRouter();

  const toggleSidebar = () => {
    showSidebar(!isShow);
  };

  // Define the menu items based on the user's role

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/',
      icon: '/assets/Icons/Vector.svg',
    },
    {
      title: 'Employees',
      path: '/employees',
      icon: '/assets/Icons/Vector5.svg',
    },
  ];

  function onLogout() {
    localStorage.removeItem('user');
    router.push('/auth/login');
  }

  const [openSubMenu, setOpenSubMenu] = useState('');

  const handleSubMenuToggle = (path: string) => {
    setOpenSubMenu((prevPath) => (prevPath === path ? '' : path));
  };
  return (
    <div
      className={`lg:flex fixed left-0 top-0 h-screen bg-white w-64 px-8 py-8 z-10 border-r border-gray-50 transition-all duration-300 ${
        isShow ? 'ml-0' : 'hidden'
      }`}
    >
      {/* Menu */}
      <ul className="space-y-6 ">
        <li className="flex justify-between mt-7">
          <img src="/assets/blockLogo.svg" alt="" />
          <img
            src="/assets/Icons/circleLeft.svg"
            alt=""
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Mulai mencari..."
            className="bg-white px-4 py-2 rounded-lg w-full sm:max-w-[585px] border w-full bg-[url(/assets/Icons/search.svg)] bg-no-repeat bg-right bg-center md:hidden"
            style={{ backgroundPositionX: '98%' }}
          />
        </li>
        {menuItems.map((item) => (
          <li key={item.path} className="">
            <Link href={item.path}>
              <a
                className={`flex items-center block py-2 px-4 rounded-md ${
                  router.pathname === item.path
                    ? 'bg-[#2C90D1] text-white font-semibold'
                    : ''
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-4 h-4 mr-2"
                />{' '}
                {/* Replace with the appropriate width and height */}
                {item.title}
              </a>
            </Link>
          </li>
        ))}
        <li>
          <hr className="border-t border-white my-2 w-[200px] mx-auto" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

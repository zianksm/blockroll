import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { LoginController } from '@/apiHandlers/auth/login/mockHandler';
import { Role } from '@/apiHandlers/baseInterface';
import SearchResultContainer from '@/scenes/Home/containers/SearchResultContainer';

import Notification from '../Popup/Notification';
import Profile from '../Popup/Profile';

interface NavbarProps {
  showSidebar: (show: boolean) => void;
  isShow: boolean;
  role: Role | null;
}

const NavbarDetail: React.FC<NavbarProps> = ({ showSidebar, isShow, role }) => {
  const toggleSidebar = () => {
    showSidebar(!isShow);
  };

  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState('');

  function getProfile() {
    const userData = new LoginController().getUserProfile();
    setEmail(userData?.email as string);
    setName(userData?.name as string);
  }

  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const [searchInput, setSearchInput] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleClear = () => {
    setSearchInput('');
    setShowSearchResults(!showSearchResults);
  };
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
    setShowNotification(false);
  };
  const handleShowNotification = () => {
    setShowNotification(!showNotification);
    setShowProfile(false);
  };

  const router = useRouter();

  useEffect(() => {
    getProfile();
    const storedSelectedStudent = localStorage.getItem('selectedStudent');
    if (storedSelectedStudent) {
      setSelectedStudent(parseInt(storedSelectedStudent));
    }
    console.log('use effect on navbar');
    // Check if localStorage is available
    const isLocalStorageAvailable =
      typeof window !== 'undefined' && window.localStorage;

    if (isLocalStorageAvailable) {
      // Check if the 'user' key in local storage is undefined or not present
      const user = localStorage.getItem('user');
      if (user === undefined || user === null) {
        // Redirect to the login page
        router.push('/auth/login');
      }
    } else {
      router.push('/auth/login');
    }
  }, []);

  const handleStudentClick = (id: number) => {
    setSelectedStudent(id);
    localStorage.setItem('selectedStudent', id.toString());
  };
  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className="flex relative z-20 items-center justify-between sm:justify-between bg-[#FFF200] p-4 px-8">
      <div className="flex items-center w-full gap-4">
        {/* Logo */}
        <img
          src="/assets/Icons/arrowLef.svg"
          className="w-5 h-5 transform rotate-180"
          alt=""
          onClick={handleGoBack}
        />
        <div className="text-black font-semibold w-full text-[12px] sm:text-lg ">
          Detail Paket dan Pembayaran{' '}
        </div>
      </div>

      <div className="flex items-center ">
        {/* Notification Icon */}
        <div className="bg-white w-12 h-12 rounded-lg mx-2 justify-center items-center">
          <img
            src="/assets/Icons/notif.svg"
            className="my-auto mx-auto h-full"
            alt=""
            width={18}
            onClick={handleShowNotification}
          />
          {showNotification && (
            <Notification handleShowNotification={handleShowNotification} />
          )}
        </div>

        {/* User Icon */}
        <div className="mx-2 flex  w-12 h-12 gap-4 rounded-lg max-w-[352px]">
          <img
            src="/assets/Icons/Profiles.svg"
            className="my-auto mx-auto w-full h-full"
            alt=""
            onClick={handleShowProfile}
          />
          {showProfile && (
            <Profile
              role={role}
              name={name}
              email={email}
              selectedStudent={selectedStudent}
              handleStudentClick={handleStudentClick}
            />
          )}
        </div>
        {/* <div
          className="lg:hidden flex relative bg-white w-12 h-12 rounded-lg flex justify-center align-middle p-1 mx-2"
          onClick={toggleSidebar}
        >
          <img
            src="/assets/Icons/yellowHamburgerrDarker.svg"
            width={18}
            alt=""
          />
        </div> */}
      </div>
    </nav>
  );
};

export default NavbarDetail;

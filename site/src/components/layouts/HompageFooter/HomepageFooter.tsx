import Image from 'next/image';
import CommunityIcon from 'public/assets/CommunityIcon';
import HomeIcon from 'public/assets/HomeIcon';
import LesOnlineIcon from 'public/assets/LesOnlineIcon';
import ProfileIcon from 'public/assets/ProfileIcon';
import { FC, ReactElement } from 'react';

interface HomepageFooterProps {
  children: ReactElement;
}

export const HomepageFooter: FC<HomepageFooterProps> = ({}) => {
  return (
    <div className="relative flex flex-row w-[100vw] px-[16px] pt-[12px] pb-[42px] h-[auto] bg-[white] mb-[24px] justify-between border-t-2 items-center">
      <div className="flex flex-col items-center gap-[7px] text-[10px] text-[#38393a] w-[55px] font-bold">
        <HomeIcon />
        <label>Beranda</label>
      </div>
      <div className="flex flex-col items-center gap-[7px] text-[10px] text-[#38393a] w-[55px]">
        <LesOnlineIcon />
        <label>Les Online</label>
      </div>
      <div className="relative flex flex-col items-center gap-[7px] text-[10px] text-[#38393a] w-[55px]">
        <button className="flex mt-[-40px] mb-[10px] w-[52px] h-[52px] rounded-full border-[#D9DADB] border-[3px] bg-[#FFF200] justify-center items-center shadow-lg">
          <img src="/assets/LeadingIcon.png" alt="/" width={32} height={32} />
        </button>
        <label>Tanya PR</label>
      </div>
      <div className="flex flex-col items-center gap-[7px] text-[10px] text-[#38393a] w-[55px]">
        <CommunityIcon />
        <label>Komunitas</label>
      </div>
      <div className="flex flex-col items-center gap-[7px] text-[10px] text-[#38393a] w-[55px]">
        <ProfileIcon />
        <label>Profil</label>
      </div>
    </div>
  );
};

const getLayout = (page: ReactElement) => (
  <HomepageFooter>{page}</HomepageFooter>
);

export default getLayout;

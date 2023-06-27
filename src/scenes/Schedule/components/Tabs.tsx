/* eslint-disable import/no-unresolved */

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useEffect, useState } from 'react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ScheduleController } from '@/apiHandlers/schedule/handler';
import {
  ScheduleData,
  ScheduleRequest,
} from '@/apiHandlers/schedule/interface';

interface tabsProps {
  setScheduleData?: React.Dispatch<
    React.SetStateAction<ScheduleData | undefined>
  >;
}

export default function Tabs(props: tabsProps) {
  const { setScheduleData } = props;
  const [activeTab, setActiveTab] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [numDatesToDisplay, setNumDatesToDisplay] = useState(7);

  async function chooseSchedule(date: ScheduleRequest, index: number) {
    setActiveTab(index);
    console.log('date', date);
    console.log('date', index);

    new ScheduleController().getSchedule(date).then((response: any) => {
      console.log('response', response.data);
      if (setScheduleData) {
        setScheduleData(response.data);
      }
    });
  }

  useEffect(() => {
    const date = new Date(currentDate);
    date.setDate(date.getDate());
    console.log('current date', date.getDate());
    chooseSchedule(date as unknown as ScheduleRequest, activeTab);
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      console.log('screen width', screenWidth);

      if (screenWidth >= 1380) {
        setNumDatesToDisplay(7); // Large screen: Display 5 dates
      } else if (screenWidth >= 1200) {
        setNumDatesToDisplay(6); // Medium screen: Display 4 dates
      } else if (screenWidth >= 1100) {
        setNumDatesToDisplay(5); // Medium screen: Display 4 dates
      } else if (screenWidth >= 700) {
        setNumDatesToDisplay(4); // Medium screen: Display 4 dates
      } else if (screenWidth >= 600) {
        setNumDatesToDisplay(3); // Small screen: Display 3 dates
      } else if (screenWidth >= 520) {
        setNumDatesToDisplay(3);
      } else if (screenWidth >= 420) {
        const daysInMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
        ).getDate();
        setNumDatesToDisplay(daysInMonth);
      } else if (screenWidth >= 300) {
        const daysInMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
        ).getDate();
        setNumDatesToDisplay(daysInMonth);
      } else {
        setNumDatesToDisplay(1); // Default: Display 7 dates
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentDate]);

  const goToPreviousMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
    setCurrentDate(newDate);
  };

  const generateDates = () => {
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );

    const dates = Array.from({ length: numDatesToDisplay }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);

      const day = date.toLocaleDateString('id-ID', {
        weekday: 'long',
      });
      const formattedDate = date.toLocaleDateString('id-ID', {
        day: 'numeric',
      });

      return {
        date: formattedDate,
        day: day,
      };
    });

    return dates.map((date, index) => (
      <div
        key={index}
        className="flex drop-shadow-lg justify-center mx-auto rounded-md flex-row"
      >
        <p
          // href="#"
          className={`flex items-center h-auto justify-center px-4 py-2 rounded-md w-auto gap-2 xl:h-[48px] xl:flex-row max-w-[122px] cursor-pointer ${
            activeTab === index
              ? 'bg-[#FFF200] text-[#38393A] font-semibold'
              : 'text-[#AEAFB1] font-semibold bg-white'
          }`}
          onClick={() => chooseSchedule(date, index)}
        >
          <span className="">{date.date}</span>
          <span className="hidden xl:flex">·</span>
          <span>{date.day}</span>
        </p>
      </div>
    ));
  };

  const goToPreviousTab = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - numDatesToDisplay,
    );
    setCurrentDate(newDate);
    setActiveTab(0);
  };

  const goToNextTab = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + numDatesToDisplay,
    );
    setCurrentDate(newDate);
    setActiveTab(0);
  };

  const monthLabel = currentDate
    .toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    })
    .toUpperCase();

  console.log('tabs', numDatesToDisplay);

  return (
    <div>
      <div className="flex items-center mb-4 justify-between gap-4 flex-col sm:flex-row">
        <div className="flex gap-5 flex-col sm:flex-row">
          <p className="text-[#2C3131] text-xl font-semibold text-center sm:text-start">
            {monthLabel}
          </p>
          <div className="flex gap-2 my-auto bg-[#f6f6f6]">
            <button className="mr-2" onClick={goToPreviousMonth}>
              &lt;
            </button>
            <select
              className="text-[#86878B] bg-transparent font-normal appearance-none text-center text-sm my-auto cursor-pointer"
              value={currentDate.getMonth()}
              onChange={(e) => {
                const selectedMonth = parseInt(e.target.value);
                const newDate = new Date(
                  currentDate.getFullYear(),
                  selectedMonth,
                  1,
                );
                setCurrentDate(newDate);
              }}
            >
              <option value="">Change Month</option>
              <option value={0}>January</option>
              <option value={1}>February</option>
              <option value={2}>March</option>
              <option value={3}>April</option>
              <option value={4}>May</option>
              <option value={5}>June</option>
              <option value={6}>July</option>
              <option value={7}>August</option>
              <option value={8}>September</option>
              <option value={9}>October</option>
              <option value={10}>November</option>
              <option value={11}>December</option>
            </select>
            <button className="ml-2" onClick={goToNextMonth}>
              &gt;
            </button>
          </div>
        </div>
        <a href="" className="text-sm text-[#E8DC00] font-normal">
          Tampilkan Program Yang Dimiliki
        </a>
      </div>
      <div className="flex w-full gap-5 lg:flex-row">
        <button
          className="hidden ml-2 px-4 py-2 drop-shadow-lg max-h-[48px] h-full items-center my-auto bg-white rounded-md sm:flex justify-center "
          onClick={goToPreviousTab}
        >
          &lt;
        </button>
        <div className="overflow-x-auto p-4 gap-5 snap-x flex sm:gap-5 xl:gap-4 w-full">
          {generateDates()}

          {/* <ul className="flex gap-3 max-w-[1009px] w-full lg:gap-5 scroll-ml-6 snap-start">
            {generateDates()}
          </ul> */}
        </div>
        <button
          className="hidden ml-2 px-4 py-2 drop-shadow-lg items-center my-auto bg-white rounded-md sm:flex justify-center"
          onClick={goToNextTab}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

import 'swiper/swiper-bundle.css';

import React, { useEffect, useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

export default function AdsBanner() {
  const prevButtonRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLDivElement>(null);
  const swiper = useRef<SwiperCore>();

  const handlePrevClick = () => {
    if (swiper.current) {
      swiper.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper.current) {
      swiper.current.slideNext();
    }
  };

  useEffect(() => {
    if (swiper.current) {
      swiper.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={70}
        slidesPerGroup={1}
        height={800}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiperInstance) => {
          swiper.current = swiperInstance;
        }}
      >
        <SwiperSlide>
          <div className="relative shadow-lg rounded-xl flex justify-center items-center max-h-[130px] h-[130px] bg-gradient-to-r from-[#FBF8CE] to-[#FFF200] mb-4 w-">
            <p className="text-xl text-white font-semibold">ADS BANNER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shadow-lg rounded-xl flex justify-center items-center max-h-[130px] h-[130px] bg-gradient-to-r from-[#FFF200]  to-orange-400 mb-4 w-">
            <p className="text-xl text-white font-semibold">ADS BANNER</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shadow-lg rounded-xl flex justify-center items-center max-h-[130px] h-[130px] bg-gradient-to-r from-orange-400 to-red-400 mb-4 w-">
            <p className="text-xl text-white font-semibold">ADS BANNER</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className="absolute   z-10 flex items-center justify-center -left-4 top-[45%] transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full cursor-pointer"
        ref={prevButtonRef}
        onClick={handlePrevClick}
      >
        &lt;
      </div>
      <div
        className="  z-10 absolute flex items-center justify-center -right-4 top-[45%] transform -translate-y-1/2 w-[40px] h-[40px] bg-white rounded-full cursor-pointer"
        ref={nextButtonRef}
        onClick={handleNextClick}
      >
        &gt;
      </div>
    </div>
  );
}

import 'swiper/swiper-bundle.css';

import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardPrivateOnline from '@/components/common/Homepage/CardPrivateOnline';
import SubjectCard from '@/components/common/Homepage/SubjectCard/SubjectCard';

interface CourseProps {
  title: string;
  isPrivate?: boolean;
  isPlay?: boolean;
  isRelated?: boolean;
  data?: any;
}

export default function Course(props: CourseProps) {
  const { title, isPrivate, isPlay, isRelated, data } = props;
  return (
    <div
      className={`${
        isRelated ? '' : 'mt-8'
      } gap-4 flex flex-col  h-[370px]  xl:w-[100%]`}
    >
      <div className="flex flex-row justify-between my-auto">
        <p className="font-semibold text-xl">{title}</p>
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          Lihat semua &rarr;{' '}
        </a>
      </div>
      <div className="flex flex-row gap-4 max-h-[500px] h-full w-full ">
        {isPrivate ? (
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={70}
            slidesPerGroup={1}
            height={800}
            breakpoints={{
              '@0.05': {
                slidesPerView: 2,
                spaceBetween: 320,
              },

              '@0.20': {
                slidesPerView: 2,
                spaceBetween: 220,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 140,
              },

              '@1.50': {
                slidesPerView: 3,
                spaceBetween: 210,
              },
              '@2.00': {
                slidesPerView: 4,
                spaceBetween: 150,
              },
            }}
          >
            <>
              {data.map((data: any) => (
                <SwiperSlide key={data.id}>
                  <CardPrivateOnline
                    id={data.id}
                    title={data.title}
                    href={data.href}
                    excerpt={data.excerpt}
                    price={data.price}
                    cardImgPath={data.cardImgPath}
                    instructorName={data.instructorName}
                  />
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={70}
            slidesPerGroup={1}
            height={500}
            breakpoints={{
              '@0.05': {
                slidesPerView: 2,
                spaceBetween: 220,
              },
              '@0.20': {
                slidesPerView: 2,
                spaceBetween: 320,
              },

              '@0.10': {
                slidesPerView: 3,
                spaceBetween: 189,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 200,
              },
              '@1.50': {
                slidesPerView: isRelated ? 4 : 3,
                spaceBetween: isRelated ? 50 : 210,
              },
            }}
          >
            {data.map((data: any) => (
              <SwiperSlide key={data.id}>
                <SubjectCard
                  // id={data.id}
                  title={data.title}
                  href={data.href}
                  excerpt={data.excerpt}
                  price={data.price}
                  cardImgPath={data.cardImgPath}
                  instructorName={data.instructorName}
                  isPlay={isPlay}
                />
              </SwiperSlide>
            ))}
            {isRelated && (
              <>
                {data.map((data: any) => (
                  <SwiperSlide key={data.id}>
                    <SubjectCard
                      title={data.title}
                      href={data.href}
                      excerpt={data.excerpt}
                      price={data.price}
                      cardImgPath={data.cardImgPath}
                      instructorName={data.instructorName}
                      isPlay={isPlay}
                    />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        )}
      </div>
    </div>
  );
}

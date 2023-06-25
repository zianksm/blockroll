import React from 'react';

import CardPromo from '@/components/common/CardPromo/Card';

import AdsBanner from '../../components/AdsBanner';
import Course from '../../components/Course';
import DiscussionSection from '../../components/DiscussionSection';
import ExamSection from '../../components/ExamSection';
import InvoiceOverview from '../../components/InvoiceOverview';
import OverviewCard from '../../components/Schedule';

export default function StudentDashboard() {
  const BookIcon = 'assets/Icons/book.svg';

  const cards = [
    {
      desc: 'How to become a Specialist Doctor',
      icon: BookIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
    },
    {
      desc: 'How to become a Specialist Doctor',
      icon: BookIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
    },
    {
      desc: 'How to become a Specialist Doctor',
      icon: BookIcon,
      href: '/',
      excerpt: '',
      author: 'dr. John Doe, S.Ked., Sp.G.',
    },
  ];
  const courses = [
    {
      id: 1,
      title: 'Medical Terminology',
      href: '/assets/cardImgExample.png',
      excerpt: 'This is the excerpt for Card 1.',
      price: 'IDR 99,000',
      cardImgPath: '/path/to/card1-image.jpg',
      instructorName: 'Dr. John Doe, Specialist in Medical Terminology',
      type: 'Private Online',
      theme: 'Medical Courses',
    },
    {
      id: 2,
      title: 'Anatomy and Physiology',
      href: '/assets/cardImgExample.png',
      excerpt: 'This is the excerpt for Card 2.',
      price: 'IDR 199,000',
      cardImgPath: '/path/to/card2-image.jpg',
      instructorName: 'Dr. Jane Smith, Specialist in Anatomy and Physiology',
      type: 'Private Online',
      theme: 'Medical Courses',
    },
    {
      id: 3,
      title: 'Medical Ethics and Law',
      href: '/assets/cardImgExample.png',
      excerpt: 'This is the excerpt for Card 3.',
      price: 'IDR 299,000',
      cardImgPath: '/path/to/card3-image.jpg',
      instructorName: 'Dr. Alex Johnson, Specialist in Medical Ethics and Law',
      type: 'Private Online',
      theme: 'Medical Courses',
    },
    {
      id: 4,
      title: 'Pharmacology Basics',
      href: '/assets/cardImgExample.png',
      excerpt: 'This is the excerpt for Card 4.',
      price: 'IDR 399,000',
      cardImgPath: '/path/to/card4-image.jpg',
      instructorName: 'Dr. Emily Brown, Specialist in Pharmacology Basics',
      type: 'Private Online',
      theme: 'Medical Courses',
    },
    {
      id: 5,
      title: 'Medical Coding and Billing',
      href: '/assets/cardImgExample.png',
      excerpt: 'This is the excerpt for Card 5.',
      price: 'IDR 499,000',
      cardImgPath: '/path/to/card5-image.jpg',
      instructorName:
        'Dr. Michael Wilson, Specialist in Medical Coding and Billing',
      type: 'Private Online',
      theme: 'Medical Courses',
    },
  ];

  return (
    <>
      {' '}
      <div className="gap-4 xl:w-[60%] ">
        <AdsBanner />
        <CardPromo />
        <OverviewCard data={cards} isStudent={true} />
        <InvoiceOverview />
        <Course
          title="Layanan Private Online"
          isPrivate={true}
          data={courses}
        />
        <Course
          title="Materi Online"
          isPrivate={false}
          isPlay={true}
          data={courses}
        />
        <Course
          title="Materi Online"
          isPrivate={false}
          isPlay={false}
          data={courses}
        />
      </div>
      <div className="col-span-4 w-full xl:w-[40%]">
        <ExamSection isStudent={true} />
        <DiscussionSection />
        <InvoiceOverview isRight={true} />
      </div>
    </>
  );
}

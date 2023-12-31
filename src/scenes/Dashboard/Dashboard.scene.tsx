/* eslint-disable react/no-children-prop */
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { LoginController } from '@/apiHandlers/auth/login/mockHandler';
import { Role } from '@/apiHandlers/baseInterface';
// import BookIcon from '@/assets/icons/book.svg';
import { NextPageWithLayout } from '@/types';

import ParentDashboard from './containers/parent/ParentDashboard';
import StudentDashboard from './containers/student/StudentDashboard';
import TeacherDashboard from './containers/teacher/TeacherDashboard';

const Dashboard: NextPageWithLayout = () => {
  const isRight = true;
  const [role, SetRole] = useState<Role | null>(null);

  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-8 xl:flex-row ">
        <StudentDashboard />
      </div>
    </>
  );
};

export default Dashboard;

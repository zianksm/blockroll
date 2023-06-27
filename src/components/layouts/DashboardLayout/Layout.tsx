import React, { ReactElement, useState } from 'react';

import Navbar from '@/components/common/Navbar/Navbar';
import Sidebar, { SidebarProps } from '@/components/common/Siderbar/Sidebar';

export interface Props {
  // title: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* <Navbar showSidebar={toggleSidebar} isShow={isSidebarOpen} /> */}
      {/* <Sidebar isShow={isSidebarOpen} /> */}
      <main className="flex min-h-screen p-8 my-auto ">{children}</main>
      {/* Rest of your layout */}
    </div>
  );
};

const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default getLayout;

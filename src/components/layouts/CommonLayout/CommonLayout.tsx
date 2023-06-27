import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';

import Navbar from '@/components/common/Navbar/Navbar';
import NavbarDetail from '@/components/common/Navbar/NavbarDetail';
import Sidebar from '@/components/common/Siderbar/Sidebar';

import { LoginController } from '../../../apiHandlers/auth/login/mockHandler';
import { Role } from '../../../apiHandlers/baseInterface';

interface CommonLayoutProps {
  children: ReactElement;
  disableLayout: boolean;
}

export const CommonLayout: FC<CommonLayoutProps> = ({
  children,
  disableLayout,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  const { postId } = router.query;
  const [role, setRole] = useState<Role | null>(null);

  console.log('Page URL', asPath.includes('course'));

  useEffect(() => {
    const roleId = new LoginController().getUserRole();
    setRole(roleId);
  });

  const [withoutLayout, setWithoutLayout] = useState(false);
  const isCheckoutPage = asPath.includes('checkout');
  const isCoursePage = asPath.includes('course');
  const disableSidebar = isCheckoutPage || isCoursePage;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log('is open', isSidebarOpen);
  };
  if (disableLayout === true) {
    return <main className="flex min-h-screen p-8 my-auto ">{children}</main>; // Return only the children without the layout
  }
  return (
    <div className="bg-[#F6F6F6] h-full">
      {withoutLayout ? (
        <div>
          <main className="flex min-h-screen p-8 my-auto ">{children}</main>
        </div>
      ) : (
        <div className={isCheckoutPage ? 'bg-white' : 'bg-[#F6F6F6]'}>
          {disableSidebar ? (
            <>
              <NavbarDetail
                showSidebar={toggleSidebar}
                isShow={isSidebarOpen}
                role={role}
              />
              {/* <Sidebar isShow={isSidebarOpen} role={role} /> */}
              <main className="flex min-h-screen p-8 my-auto mx-auto justify-center">
                {children}
              </main>
            </>
          ) : (
            <>
              <Navbar
                showSidebar={toggleSidebar}
                isShow={isSidebarOpen}
                role={role}
              />
              <Sidebar
                isShow={isSidebarOpen}
                role={role}
                showSidebar={toggleSidebar}
              />
              <main
                className={
                  isSidebarOpen
                    ? 'blur-sm ml-8 mr-8 lg:ml-72 mt-10 mr-6 mb-16 md:blur-0 '
                    : `ml-8 mr-8 lg:ml-72 mt-10 mr-6 mb-16`
                }
              >
                {children}
              </main>
            </>
          )}
          {/* Rest of your layout */}
        </div>
      )}
    </div>
  );
};

const getLayout = (page: ReactElement) => (
  <CommonLayout disableLayout={false}>{page}</CommonLayout>
);

export default getLayout;

import React from 'react';

type NotificationProps = {
  handleShowNotification: () => void;
};

export default function Notification(props: NotificationProps) {
  const { handleShowNotification } = props;
  const notifications = [
    {
      name: 'Selamat Datang di Guruku! Selamat Bergabung!',
      durations: '5 minutes ago.',
      icon: '/assets/Icons/Profile.svg',
      link: '',
    },
    {
      name: 'Pembayaran Kelas Online Juli 2022',
      durations: '1 day ago.',
      icon: '/assets/Icons/Profile.svg',
      link: 'Download Attachment',
    },
    {
      name: 'Pembelian Materi Online Berhasil',
      durations: '1 day ago.',
      icon: '/assets/Icons/Profile.svg',
      link: '',
    },
  ];

  return (
    <div className="z-40 absolute top-[80%] max-w-[456px] w-full right-[0.5%] gap-5 flex flex-col bg-gray-100 rounded-xl  sm:max-w-[352px] shadow-2xl mt-2 h-[843px] max-h-[843px]">
      <div className="z-50 flex justify-between items-center gap-5 p-6">
        <p className="text-xl font-medium ">Notifications</p>
        <p
          className="flex justify-end cursor-pointer"
          onClick={handleShowNotification}
        >
          {' '}
          &gt;
        </p>

        {/* <img
          src="assets/Icons/arrowLef.svg"
          className="w-4 h-3 cursor-pointer"
          alt=""
          onClick={handleShowNotification}
        /> */}
      </div>
      <div className="flex flex-col">
        {notifications.map((item, index) => (
          <div key={index}>
            <div
              key={index}
              className="flex flex-row items-center gap-4 my-auto border-b px-6 bg-white h-[74px] w-full"
            >
              <div className="rounded-full w-[8px] h-[8px]">
                <img src={item.icon} alt="Icon" className="w-10" />
              </div>
              <div className="flex flex-col w-full">
                <p className="flex justify-star font-medium my-auto text-sm">
                  {item.name}
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <p className="flex justify-start my-auto text-xs text-[#878FA0]">
                    {item.durations}
                  </p>
                  <a
                    className="flex justify-start my-auto text-xs text-[#E8DC00;]"
                    href=""
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

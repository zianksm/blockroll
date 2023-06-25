import React from 'react';
import { useState } from 'react';
interface ModalPopupProps {
  isOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  setPaymentCode: (code: string) => void;
}
const PaymentMethodPopup = (props: ModalPopupProps) => {
  const { isOpen, setIsModalOpen, setPaymentCode } = props;
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const virtualAccount = [
    {
      id: 1,
      name: 'BCA Virtual Account',
      icon: '/assets/Icons/BCA.svg',
      code: 'BCA',
    },
    {
      id: 2,
      name: 'Mandiri Virtual Account',
      icon: '/assets/Icons/mandiri.svg',
      code: 'MANDIRI',
    },
    {
      id: 3,
      name: 'BRI Virtual Account',
      icon: '/assets/Icons/BRI.svg',
      code: 'BRIVA',
    },
    {
      id: 4,
      name: 'BNI Virtual Account',
      icon: '/assets/Icons/BNI.svg',
      code: 'BNIVA',
    },
  ];
  const digitalWallet = [
    { id: 5, name: 'Dana', icon: '/assets/Icons/dana.svg', code: 'DANA' },
    { id: 6, name: 'OVO', icon: '/assets/Icons/ovo.svg', code: 'OVO' },
    { id: 7, name: 'GoPay', icon: '/assets/Icons/gopay.svg', code: 'GOPAY' },
  ];
  const handleDivClick = (id: number, code: string) => {
    setSelectedStudent(id);
    setPaymentCode(code);
    // Handle the click event for the specific div
    console.log('first', selectedStudent);
    console.log(`Clicked div at index ${id}`);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="h-[630px] p-[0px] bg-white rounded-xl flex-col justify-end items-center flex">
            <div className="self-stretch h-[1034px] p-[0px] bg-white flex-col justify-start items-start flex">
              <div className=" h-[20px] relative bg-zinc-100 bg-opacity-0" />
              <div className="self-stretch px-4 justify-center items-start gap-4 flex">
                <div className="w-full h-6 pr-6 justify-start items-center gap-2 flex">
                  <div className="text-neutral-700 text-[20px] font-semibold leading-normal">
                    Pilih Metode Pembayaran
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <img
                    src="/assets/Icons/Close.svg"
                    alt=""
                    onClick={closeModal}
                  />
                </div>
              </div>
              {/* Vitual Account */}
              <div className="flex flex-col w-full">
                <div className=" h-[20px] relative bg-zinc-100 bg-opacity-0" />
                <div className="self-stretch h-6 px-4 flex-col justify-center items-start gap-[4px] flex">
                  <div className=" p-[0px] justify-start items-center gap-[12px] flex">
                    <div className="w-full h-6 pr-[2px] justify-start items-center gap-[4px] flex">
                      <div className="text-neutral-700 text-[16px] font-bold leading-normal">
                        {/* type payment */}
                        Akun Virtual
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-4">
                  {/* <div className=" h-[12px] relative bg-zinc-100 bg-opacity-0" /> */}
                  {virtualAccount.map((data, index) => {
                    return (
                      <div
                        className={`self-stretch px-6 justify-start items-center gap-4 flex `}
                        key={index}
                        onClick={() => handleDivClick(data.id, data.code)}
                      >
                        <div
                          className={`w-full h-16 py-4  border-b border-t justify-start items-center gap-4 flex  ${
                            selectedStudent === data?.id
                              ? 'bg-gradient-to-r from-[#ffffff] to-[#FFF200] '
                              : ''
                          }`}
                        >
                          <div className="w-[50px] h-8 px-[4px] py-[9px] rounded justify-center items-center flex">
                            <div className="w-[42px] h-[42px] relative flex-col justify-start items-start flex">
                              <div className="w-[42px] h-[42px] flex my-auto items-center justify-center">
                                <img src={data?.icon} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                            <div className="w-full h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                              <div className="w-full text-zinc-600 text-[14px] font-medium leading-tight">
                                {data.name}
                              </div>
                            </div>
                          </div>
                          <div className="w-[14px] h-[14px] relative origin-top-left -rotate-90" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className=" h-[20px] relative bg-zinc-100 bg-opacity-0" />
                <div className="self-stretch h-6 px-4 flex-col justify-center items-start gap-[4px] flex">
                  <div className=" p-[0px] justify-start items-center gap-[12px] flex">
                    <div className="w-full h-6 pr-[2px] justify-start items-center gap-[4px] flex">
                      <div className="text-neutral-700 text-[16px] font-bold leading-normal">
                        {/* type payment */}
                        Dompet Digital
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-4">
                  {/* <div className=" h-[12px] relative bg-zinc-100 bg-opacity-0" /> */}
                  {digitalWallet.map((data, index) => {
                    return (
                      <div
                        className={`self-stretch px-6 justify-start items-center gap-4 flex `}
                        key={index}
                        onClick={() => handleDivClick(data.id, data.code)}
                      >
                        <div
                          className={`w-full h-16 py-4  border-b border-t  justify-start items-center gap-4 flex  ${
                            selectedStudent === data?.id
                              ? 'bg-gradient-to-r from-[#ffffff] to-[#FFF200] '
                              : ''
                          }`}
                        >
                          <div className="w-[50px] h-8 px-[4px] py-[9px] rounded justify-center items-center flex">
                            <div className="w-[42px] h-[42px] relative flex-col justify-start items-start flex">
                              <div className="w-[42px] h-[42px] flex my-auto items-center justify-center">
                                <img src={data?.icon} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                            <div className="w-full h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                              <div className="w-full text-zinc-600 text-[14px] font-medium leading-tight">
                                {data.name}
                              </div>
                            </div>
                          </div>
                          <div className="w-[14px] h-[14px] relative origin-top-left -rotate-90" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Digital Wallet */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodPopup;

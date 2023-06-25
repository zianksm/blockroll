import React, { useState } from 'react';
interface checkoutProps {
  openModal: () => void;
  paymendCode: string;
}
export default function Body(props: checkoutProps) {
  const [activeTab, setActiveTab] = useState('tentang');
  const { openModal, paymendCode } = props;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="max-w-[437px] w-full  h-[434px] p-[0px] flex-col justify-start items-start flex">
      {/* Tittle */}
      <div className="h-12 p-[0px] flex-col justify-center items-start gap-[4px] flex">
        <div className=" p-[0px] justify-start items-center gap-[12px] flex">
          <div className="grow shrink basis-0 h-6 pr-[2px] justify-start items-center gap-[4px] flex">
            <div className="text-neutral-700 text-[16px] font-bold leading-normal">
              Layanan Yang Dibayar
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#86878B] text-[14px] font-normal leading-tight">
          Daftar layanan yang akan dibeli.
        </div>
      </div>
      <div className=" h-4 relative bg-zinc-100 bg-opacity-0" />
      {/* Course Detail */}
      <div className="self-stretch p-[0px] justify-start items-center gap-4 flex">
        <div className="self-stretch p-[0px] flex-col justify-start items-start gap-2 flex">
          <div className="p-[10px] bg-yellow-50 rounded-xl justify-center items-center gap-[10px] flex">
            <div className="w-[20px] h-[20px] relative">
              <img src="/assets/Icons/questions.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 p-[0px] flex-col justify-start items-start gap-[4px] flex">
          <div className="self-stretch p-[0px] justify-start items-center gap-[12px] flex">
            <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
              <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                Bagaimana cara terbaik menjadi Dokter Spesialis
              </div>
            </div>
          </div>
          <div className="self-stretch p-[0px] justify-start items-start gap-2 flex">
            <div className="text-[#86878B] text-[12px] font-normal leading-none">
              dr. John Doe, S.Ked., Sp.G.
            </div>
          </div>
          <div className=" h-2 relative bg-zinc-100 bg-opacity-0" />
          <div className="self-stretch text-neutral-700 text-[14px] font-bold leading-tight">
            IDR 150,000
          </div>
        </div>
      </div>
      {/* Payment */}
      <div className=" h-6 relative bg-zinc-100 bg-opacity-0" />
      <div className="h-12 p-[0px] flex-col justify-center items-start gap-[4px] flex">
        <div className=" p-[0px] justify-start items-center gap-[12px] flex">
          <div className="grow shrink basis-0 h-6 pr-[2px] justify-start items-center gap-[4px] flex">
            <div className="grow shrink basis-0 text-neutral-700 text-[16px] font-bold leading-normal">
              Metode Pembayaran
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#86878B] text-[14px] font-normal leading-tight">
          Pilih metode pembayaran.
        </div>
      </div>
      <div className=" h-[12px] relative bg-zinc-100 bg-opacity-0" />
      {/* Bank choices */}
      <div className="w-[375px] p-[0px] justify-start items-center gap-4 flex">
        <div
          className="grow shrink basis-0 h-16 p-4 rounded-xl shadow border  border-zinc-100 justify-start items-center gap-4 flex"
          onClick={openModal}
        >
          {paymendCode === 'BCA' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/BCA.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    BCA Virtual Account
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'MANDIRI' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/mandiri.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    Mandiri Virtual Account{' '}
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'BRIVA' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/BRI.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    BRI Virtual Account{' '}
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'BNIVA' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/BNI.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    BNI Virtual Account{' '}
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'DANA' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/dana.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    Dana
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'GOPAY' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/gopay.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    GoPay
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
          {paymendCode === 'OVO' && (
            <>
              <div className="w-[50px] px-[4px] py-[9px] rounded justify-center items-center flex">
                <div className="w-[42px] relative flex-col justify-start items-start flex">
                  <div className="w-[42px] h-[42px] ">
                    <img
                      src="/assets/Icons/ovo.svg"
                      className="h-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 h-[20px] p-[0px] justify-start items-center gap-[12px] flex">
                <div className="grow shrink basis-0 h-[20px] pr-[2px] justify-start items-center gap-[4px] flex">
                  <div className="grow shrink basis-0 text-zinc-600 text-[14px] font-medium leading-tight">
                    OVO
                  </div>
                </div>
              </div>
              <div className="w-[14px] h-[14px] flex items-center">
                <p>&gt;</p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Prop */}
      <div className=" h-6 relative bg-zinc-100 bg-opacity-0" />
      <div className=" max-w-[375px] h-[68px] pr-4 flex-col justify-center items-start gap-[4px] flex">
        <div className=" p-[0px] justify-start items-center gap-[12px] flex">
          <div className="grow shrink basis-0 h-6 pr-[2px] justify-start items-center gap-[4px] flex">
            <div className="grow shrink basis-0 text-neutral-700 text-[16px] font-bold leading-normal">
              Lebih Hemat Pakai Promo!
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#86878B] text-[14px] font-normal leading-tight">
          Silakan masukan kode promo untuk mendapatkan potongan harga
        </div>
      </div>
      <div className=" h-[12px] relative bg-zinc-100 bg-opacity-0" />
      <div className="w-full  max-w-[375px] p-[0px] justify-center items-center flex">
        <div className="grow shrink basis-0 p-[0px] flex-col justify-start items-start gap-[6px] flex">
          <div className="self-stretch h-10 p-[0px] flex-col justify-center items-start gap-[6px] flex">
            <input
              id="email"
              name="email"
              type="email"
              placeholder={'Masukan kode promo anda'}
              // value={values.email}
              // onChange={handleChange('email')}
              autoComplete="off"
              className={
                // errors?.email
                // ? 'mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#F04438] focus:outline-none focus:border-[#F04438] focus:border-b-[1px]'
                'w-full mt-[6px] flex h-[40px] text-[16px] border-b-[1px] border-[#B4BAC6] focus:outline-none focus:border-[#397BFF] focus:border-b-[1px]'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

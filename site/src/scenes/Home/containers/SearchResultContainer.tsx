import { Formik } from 'formik';
import CloseIcon from 'public/assets/CloseIcon';
import ReloadIcon from 'public/assets/ReloadIcon';
import { FC, useState } from 'react';

// import ReloadIcon from '/assets/ReloadIcon.tsx';
import AuthBtnSubmit from '@/components/common/AuthButtonSubmit/AuthBtnSubmit';
import SearchResultComponent, {
  SearchResultComponentProps,
} from '@/components/common/SearchResult/SearchResultComponent';
interface Item {
  id: number;
  text: string;
}

const SearchResultContainer: FC<SearchResultComponentProps> = ({
  title,
  imgPath,
  creatorName,
  isPrivateService = false,
  isMateriOnline = false,
  isKelasOnline = false,
  categoryName,
  searchTerm,
  setSearchTerm,
  handleClear,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertInputEmail, setAlertInputEmail] = useState(false);
  const [alertInputPassword, setAlertInputPassword] = useState(false);
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleDelete = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    // <Formik>
    <div className="z-50 absolute top-[80%]  flex flex-col bg-white rounded-xl p-4 sm:max-w-[585px] shadow-2xl">
      <div className="h-[40px] items-center flex rounded-tr-[12px] justify-end rounded-br-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[16px] w-[16px] text-red-400 mx-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={handleClear}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.828-9L10 8.172 7.172 5.344l-1.414 1.414L8.586 10l-3.828 3.828 1.414 1.414L10 11.414l2.828 2.828 1.414-1.414L11.414 10l3.828-3.828-1.414-1.414L10 8.586z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {searchTerm !== '' ? (
        <>
          <div className="flex flex-row w-[100%] px-[16px] mb-[12px] justify-between items-center">
            <label className="text-[16px] font-medium ">Hasil pencarian</label>
            <label className="text-[12px] font-regular text-[#9E9FA2]">
              3 hasil ditemukan
            </label>
          </div>
          <SearchResultComponent
            categoryName="Layanan Publik"
            title={'Bagaimana Melakukan Teknik Bedah Yang Baik dan Benar'}
            creatorName={'dr. John Doe, S.Ked., Sp.G.'}
            isPrivateService={true}
          />
          <SearchResultComponent
            categoryName="Layanan Publik"
            title={'Bagaimana Melakukan Teknik Bedah Yang Baik dan Benar'}
            creatorName={'dr. John Doe, S.Ked., Sp.G.'}
            isPrivateService={true}
          />{' '}
          <SearchResultComponent
            categoryName="Layanan Publik"
            title={'Bagaimana Melakukan Teknik Bedah Yang Baik dan Benar'}
            creatorName={'dr. John Doe, S.Ked., Sp.G.'}
            isPrivateService={true}
          />
        </>
      ) : (
        <>
          <div className="flex flex-row w-[100%] mb-[12px] justify-between items-center">
            <label className="text-[16px] font-medium ">Hasil pencarian</label>
            <label
              className="text-[12px] font-bold text-[#F04438] cursor-pointer"
              onClick={handleClear}
            >
              Hapus semua
            </label>
          </div>
          <div className="flex flex-col gap-[16px] pb-[24px]">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-row w-[100%] justify-between items-center"
              >
                <div className="flex flex-row items-center gap-[11px]">
                  <ReloadIcon />
                  <label className="text-[14px] font-regular text-[#9E9FA2]">
                    teknik bedah mulut
                  </label>
                </div>
                <div onClick={() => handleDelete(item.id)}>
                  <CloseIcon />
                </div>
              </div>
            ))}
          </div>

          <hr className="w-[100%] h-[4px] bg-[#f3f3f3] outline-none" />

          <label className="text-[16px] font-medium mt-[24px] mb-[16px]">
            Pencarian Populer
          </label>

          <div className="flex flex-wrap w-[100%] gap-[12px]">
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Layanan Kesehatan Publik
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Etika
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Specialis
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Teknik Bedah
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Dokter
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Kelas
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Pelajaran
            </button>
            <button className=" w-auto bg-[#FFFBB0] rounded-full px-[20px] py-[10px] text-[14px]">
              Specialis
            </button>
          </div>
        </>
      )}
    </div>
    // </Formik>
  );
};

export default SearchResultContainer;

import { Formik } from 'formik';
import { FC, useState } from 'react';

export interface SearchResultComponentProps {
  title: string;
  imgPath?: string;
  creatorName: string;
  isPrivateService?: boolean;
  isMateriOnline?: boolean;
  isKelasOnline?: boolean;
  categoryName: string;
  searchTerm?: string;
  setSearchTerm?: (input: string) => void;
  handleClear?: () => void;
}

const SearchResultComponent: FC<SearchResultComponentProps> = ({
  title,
  imgPath,
  creatorName,
  isPrivateService = false,
  isMateriOnline = false,
  isKelasOnline = false,
  categoryName,
}) => {
  const [isImg, setIsImg] = useState(false);
  return (
    // <Formik>
    <div className=" min-w-[100vw] flex flex-col h-auto px-[12px] py-[16px] gap-[4px] bg-gradient-to-r from-[#FFFDDB]">
      <div className="flex flex-row w-[100%] gap-[8px]">
        <div>
          {/* {isPrivateService ? <PrivateOnlineIcon /> : null}
          {isMateriOnline ? <MateriOnlineIcon /> : null}
          {isKelasOnline ? <KelasOnlineIcon /> : null} */}
        </div>
        <label className="text-[10px] text-[#9E9FA2]">{categoryName}</label>
      </div>

      <label className="text-[14px] font-medium w-[100%]">{title}</label>
      <label className="text-[10px] text-[#5F6063]">{creatorName}</label>
    </div>
    // </Formik>
  );
};

export default SearchResultComponent;

import { FC } from 'react';

export interface CardPromoProps {
  title?: string;
  desc?: string;
  href?: string;
  excerpt?: string;
  author?: string;
  icon?: string;
  date?: string;
  due?: string;
  isRight?: boolean;
}

const CardPromo: FC<CardPromoProps> = ({
  desc,
  href,
  excerpt,
  author,
  icon,
  date,
  due,
  isRight,
}) => (
  <div
    className={`flex bg-[#FFF200]  pl-1 rounded-xl drop-shadow-lg  gap-4 mb-8 flex-col  h-auto  md:h-[52px]
     sm:flex-row `}
  >
    <div className="flex items-center pl-3 bg-white w-full rounded-xl">
      <p className="text-sm font-semibold">
        Promo kelas IPA UTBK Diskon 10%. CUMA HARI INI!
      </p>
    </div>
  </div>
);

export default CardPromo;

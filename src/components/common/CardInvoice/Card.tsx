import { FC } from 'react';

import styles from './Card.module.css';

export interface CardInvoiceProps {
  title?: string;
  desc: string;
  href?: string;
  excerpt?: string;
  author: string;
  icon: string;
  date: string;
  due: string;
  isRight?: boolean;
}

const CardInvoice: FC<CardInvoiceProps> = ({
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
    className={`flex bg-white  rounded-xl drop-shadow-lg  gap-4  flex-col  h-auto ${
      isRight ? 'md:h-auto' : 'md:h-[74px]'
    }  sm:flex-row `}
  >
    <div className="w-3 bg-[#FFF200] ms-0 rounded-l-xl  justify-center align-middle flex"></div>
    {/* // <a href={href} className={styles.wrapper}> */}
    <div className="flex-col p-4 w-full sm:max-w-[544px] sm:p-2 my-auto">
      <h2 className="text-xl sm:text-sm font-semibold">{desc}</h2>
      <div
        className={`flex flex-col ${
          isRight ? 'sm:flex-col' : 'sm:flex-row'
        }  gap-2 `}
      >
        {isRight ? (
          <div>
            <div className="flex flex-row gap-2">
              <p className="text-xs text-[#86878B] font-normal mt-2">
                {author}
              </p>
              <ul className="list-disc list-inside rounded text-xs text-[#86878B] font-normal mt-2">
                <li>{date} </li>
              </ul>
            </div>
            <ul className="list-disc list-inside rounded text-xs text-[red] font-normal mt-2">
              <li>{due}</li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2">
            <p className="text-xs text-[#86878B] font-normal mt-2">{author}</p>
            <ul className="list-disc list-inside rounded text-xs text-[#86878B] font-normal mt-2">
              <li>{date}</li>
            </ul>
            <ul className="list-disc list-inside rounded text-xs text-[red] font-normal mt-2">
              <li>{due}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    {/* <div className="flex p-2 me-4 justify-center w-full align-middle sm:w-[108px]">
      <button className="bg-[#FFF200] w-full h-[42px] md:h-[42px] rounded-xl my-auto">
        Bayar
      </button>
    </div> */}
    {/* <p className={styles.excerpt}>{excerpt}</p> */}
    {/* </a> */}
  </div>
);

export default CardInvoice;

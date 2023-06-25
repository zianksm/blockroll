/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import { ScheduleData } from '@/apiHandlers/schedule/interface';

export interface TableProps {
  data: ScheduleData[] | ScheduleData | undefined | any;
  isExam?: boolean;
}

interface TableRowProps {
  time: string;
  duration: string;
  program: string;
  lecturer: string;
  badges: string;
  icon: string;
  isExam: boolean;
  aksi?: string;
}

const Table: FC<TableProps> = ({ data, isExam }) => (
  <div className="overflow-x-auto w-full">
    <table className="w-max bg-white rounded-xl divide-y divide-gray-200 md:min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-8  text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Waktu
          </th>
          <th className="px-6 py-8  max-w-[204px] w-[204px] text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Program
          </th>
          <th className="px-6 py-8   max-w-[491px] w-[491px] text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Instruktur
          </th>
          <th className="px-6 py-8  text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {Array.isArray(data)
          ? data.map((row, index) => (
              <TableRow key={index} {...row} isExam={isExam} />
            ))
          : data && <TableRow {...data} isExam={isExam} />}
      </tbody>
    </table>
  </div>
);

const TableRow: FC<TableRowProps> = ({
  time,
  duration,
  program,
  lecturer,
  badges,
  icon,
  isExam,
  aksi,
}) => (
  <tr>
    <td className="px-6 py-8 whitespace-nowrap text-base	font-semibold">
      {time} <br />
      <span className="text-xs	 font-normal text-gray-500">{duration}</span>
    </td>
    <td className="px-6 py-8 whitespace-wrap text-base font-semibold max-w-[204px] w-[204px] ">
      {program}
    </td>
    <td className="px-6 py-8 whitespace-nowrap text-base max-w-[491px] w-full 	font-semibold flex flex-row gap-2">
      <img src={icon} alt="Icon" className="w-10 " />
      <div className="flex flex-col">
        {lecturer}{' '}
        <span className="text-xs	 font-normal text-gray-500 break-all">
          {badges}
        </span>
      </div>
    </td>
    <td className="px-6 py-8 whitespace-nowrap text-base	font-normal ">
      <button className="bg-[#FFF200] w-[93px] h-[42px] md:h-[42px] rounded-xl my-auto text-sm">
        {isExam ? 'Mulai ujian' : 'Gabung'}
      </button>{' '}
      {isExam && (
        <>
          <button className="bg-[#FFFBB0] w-[93px] ml-2 h-[42px] md:h-[42px] rounded-xl my-auto text-sm text-[#8C8500]">
            Detail Ujian
          </button>{' '}
        </>
      )}
    </td>
  </tr>
);

export default Table;

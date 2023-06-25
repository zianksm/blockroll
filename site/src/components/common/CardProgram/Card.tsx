/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

import { ScheduleData } from '@/apiHandlers/schedule/interface';

export interface TableProps {
  data: ScheduleData[] | ScheduleData | undefined | any;
  isExam?: boolean;
}

interface TableRowProps {
  no: string;
  name: string;
  address: string;
}

const Table: FC<TableProps> = ({ data, isExam }) => (
  <div className="overflow-x-auto w-full mt-5">
    <table className="w-max bg-white rounded-xl divide-y divide-gray-200 md:min-w-full">
      <thead>
        <tr>
          <th className="px-6 py-8  text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            No
          </th>
          <th className="px-6 py-8  max-w-[204px] w-[204px] text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-8  text-left text-xs font-semibold text-[#9E9FA2] uppercase tracking-wider">
            Address
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

const TableRow: FC<TableRowProps> = ({ no, address, name }) => (
  <tr>
    <td className="px-6 py-8 whitespace-nowrap text-base	font-semibold">
      {no} <br />
    </td>
    <td className="px-6 py-8 whitespace-wrap text-base font-semibold max-w-[204px] w-[204px] ">
      {name}
    </td>
    <td className="px-6 py-8 whitespace-nowrap text-base max-w-[491px] w-full 	font-semibold flex flex-row gap-2">
      <div className="flex flex-col">{address} </div>
    </td>
  </tr>
);

export default Table;

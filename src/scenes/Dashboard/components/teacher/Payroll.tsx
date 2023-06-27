import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
interface PayrollData {
  id: string;
  date: string;
  salary: number;
}

export default function Payroll() {
  const data: PayrollData[] = [
    {
      id: 'ID - 20230901',
      date: '1 Agustus 2023 08:00:35',
      salary: 5000,
    },
    {
      id: 'ID-20230901',
      date: '1 Agustus 2023 08:00:35',
      salary: 6000,
    },
    {
      id: 'ID-20230901',
      date: '1 Agustus 2023 08:00:35',
      salary: 6000,
    },
  ];
  const columns: TableColumn<PayrollData>[] = [
    {
      name: 'Slip Gaji',
      selector: (row) => row.id,
      sortable: true,
      cell: (row) => (
        <div className={`flex gap-2 w-[272px] max-w-[271px] items-start`}>
          <img src="assets/Icons/money.svg" alt="" />
          <div className="flex-col w-full">
            <p className="text-neutral-700 text-[16px] font-medium leading-normal">
              {' '}
              {row.id}
            </p>{' '}
            <p className=" font-[400] text-xs text-[#7A7B7E] w- w-[144px]">
              {' '}
              {row.date}
            </p>
          </div>
        </div>
      ),
      //   width: '64px',
    },
    {
      name: 'Unduh',
      //   selector: (row) => row.un,
      sortable: false,
      cell: () => (
        <button onClick={handleDownload} className="text-[#2A83E4] text-base">
          Unduh
        </button>
      ),
    },
  ];

  const handleDownload = async () => {
    // Handle download logic here
    // Example: Generate a PDF using pdf-lib and download it
    // ...
  };

  const customStyles = {
    headRow: {
      style: {
        fontWeight: '500',
        fontSize: '16px', // Example custom font size
      },
    },
    cells: {
      style: (row: any, index: number) => ({
        height: '70px',
        padding: '12px 24px',
      }),
    },
  };
  return (
    <div className="flex flex-col justify-start items-start mb-auto  w-full xl:max-w-[370px]">
      <div className="flex flex-row justify-between my-auto w-full mt-5">
        <p className="font-semibold text-xl">Slip Gaji</p>
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          Lihat Semua &rarr;{' '}
        </a>
      </div>
      <div className="flex flex-col bg-white rounded-xl shadow-2xl w-full  mt-5 py-2 px-5 gap-2.5">
        {/* Data tables */}
        <DataTable<PayrollData>
          columns={columns}
          data={data}
          noHeader
          paginationRowsPerPageOptions={[3]}
          noDataComponent={<span>No data available.</span>}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
}

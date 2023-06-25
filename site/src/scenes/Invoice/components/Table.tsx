import { AnyARecord } from 'dns';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface TableProps {
  data: {
    id: number;
    total: string;
    status: string;
    program: string;
    instrukturTenggat: string;
    desc: string;
    tenggat: string;
    paidDate: string;
    idTransaction: string;
    action: string;
  }[];
}

interface DataRow {
  id: number;
  total: string;
  status: string;
  program: string;
  instrukturTenggat: string;
  desc: string;
  tenggat: string;
  paidDate: string;
  idTransaction: string;
  action: string;
}

const Table = ({ data }: TableProps) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const history = useRouter();

  const toggleRowExpansion = (rowId: number) => {
    const isRowExpanded = expandedRows.includes(rowId);
    const newExpandedRows = isRowExpanded
      ? expandedRows.filter((id) => id !== rowId)
      : [...expandedRows, rowId];
    setExpandedRows(newExpandedRows);
  };
  const columns: TableColumn<DataRow>[] = [
    {
      name: '',
      id: 'action',
      width: '80px',
      selector: (row) => row.action,
      sortable: true,
      cell: (row) => (
        <div className=" flex justify-center items-center  w-[80px] max-w-[80px]">
          <button
            className={`w-8 h-8 rounded-lg ${
              expandedRows.includes(row.id) ? 'bg-white' : 'bg-[#FFFBB0]'
            }`}
            onClick={() => toggleRowExpansion(row.id)}
          >
            <svg
              className={`ml-auto w-4 h-4 mx-auto my-auto ${
                expandedRows.includes(row.id)
                  ? 'transform rotate-180'
                  : 'transform rotate-270'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={expandedRows.includes(row.id) ? '#E8DC00' : '#E8DC00'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d={
                  expandedRows.includes(row.id)
                    ? 'M19 9l-7 7-7-7'
                    : 'M15 19l-7-7 7-7'
                }
              />
            </svg>
          </button>
        </div>
      ),
    },
    {
      name: 'Tenggat',
      id: 'duedate',
      width: '171px',
      selector: (row) => row.tenggat,
      sortable: true,
      cell: (row) => (
        <div
          className={`text-gray-900 font-normal text-base ${
            row.id === 1 ? 'font-normal' : ''
          }`}
        >
          {row.tenggat}
        </div>
      ),
    },
    {
      name: 'Instruktur ',
      id: 'instructor',
      width: '252px',
      selector: (row) => row.instrukturTenggat,
      sortable: true,
      cell: (row) => (
        <div
          className={`flex flex-col gap-2 mx-w-[356px] ${
            row.id === 1 ? 'font-semibold l' : ''
          }`}
        >
          <p className="text-gray-900 font-semibold text-md ">
            {' '}
            {row.instrukturTenggat}
          </p>{' '}
          <p className=" font-[400] text-xs text-[#7A7B7E]"> {row.desc}</p>
        </div>
      ),
    },
    {
      name: 'Program',
      id: 'program',
      maxWidth: '248px',
      width: '248px',
      selector: (row) => row.program,
      sortable: true,
      cell: (row) => (
        <div className={``}>
          <p
            className={`text-gray-900 font-semibold text-[14px]  max-w-[204px] w-full`}
          >
            {row.program}
          </p>{' '}
        </div>
      ),
    },
    {
      name: 'Status',
      id: 'status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <div
          className={`flex  p-1 justify-center items-center max-w-[124px]  w-full  ${
            row.id === 1 ? 'font-bold' : ''
          } `}
        >
          <div
            className={`flex justify-center text-white font-semibold text-md rounded-lg  items-center max-w-[80px] w-auto p-1 ${
              row.status === 'Selesai' ? 'bg-green-500' : 'bg-red-400'
            }`}
          >
            {' '}
            <p className="text-[10px]">{row.status} </p>
          </div>
        </div>
      ),
    },
    {
      name: 'Total',
      id: 'total',
      selector: (row) => row.total,
      sortable: true,
      cell: (row) => (
        <div
          className={`text-gray-900 font-semibold text-[16px] ${
            row.id === 1 ? 'font-bold' : ''
          }`}
        >
          {row.total}
        </div>
      ),
    },
  ];

  async function generateInvoicePdf(invoiceData: any) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // 1. Add title "Pembayaran kelas" in the middle top of the PDF with text size 16px
    const titleText = 'Pembayaran kelas';
    const titleSize = 16;
    const titleFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const titleWidth = titleFont.widthOfTextAtSize(titleText, titleSize);
    const titleX = (page.getWidth() - titleWidth) / 2;
    page.drawText(titleText, {
      x: titleX,
      y: page.getHeight() - 40,
      size: titleSize,
      font: titleFont,
    });

    // 2. Add "INVOICE" as big text below the title on the left side
    const invoiceText = 'INVOICE';
    const invoiceTextSize = 32;
    const invoiceFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const invoiceTextWidth = invoiceFont.widthOfTextAtSize(
      invoiceText,
      invoiceTextSize,
    );
    const invoiceTextX = (page.getWidth() - invoiceTextWidth) / 4;
    const invoiceTextY = page.getHeight() - 100;
    page.drawText(invoiceText, {
      x: invoiceTextX,
      y: invoiceTextY,
      size: invoiceTextSize,
      font: invoiceFont,
    });

    page.drawText(`Program: ${invoiceData.program}`, { x: 40, y: 650 });
    page.drawText(`Status: ${invoiceData.status}`, { x: 40, y: 620 });
    page.drawText(`ID Transaksi: ${invoiceData.idTransaction}`, {
      x: 40,
      y: 590,
    });
    page.drawText(`Tenggat Waktu: ${invoiceData.tenggat}`, { x: 40, y: 560 });
    page.drawText(`Tanggal Dibayar: ${invoiceData.paidDate}`, {
      x: 40,
      y: 530,
    });
    page.drawText(`Total: ${invoiceData.total}`, { x: 40, y: 500 });

    const pdfBytes = await pdfDoc.save();

    const url = URL.createObjectURL(
      new Blob([pdfBytes], { type: 'application/pdf' }),
    );

    // Open the PDF in a new tab
    window.open(url, '_blank');

    return pdfBytes;
  }

  const handleViewInvoiceClick = async (data: any) => {
    const pdfBytes = await generateInvoicePdf(data);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.pdf';
    a.click();

    URL.revokeObjectURL(url);
  };

  const conditionalRowStyles = [
    {
      when: (row: any) => expandedRows.includes(row.id),
      style: {
        backgroundColor: '#FFF200',
        marginBottom: '0px',
        borderRadius: '14px 14px 0px 0px',
      },
    },
  ];

  const customStyles = {
    table: {
      style: {
        width: '1109px',
        gap: '20px',
        border: 'none',
        overflowX: 'auto', // Enable horizontal scrolling
        background: '#f6f6f6',
      },
    },
    tableWrapper: {
      style: {
        border: 'none',
        gap: '24px',
        overflowX: 'auto', // Enable horizontal scrolling
      },
    },
    headRow: {
      style: {
        flexDirection: 'row-reverse',
        width: '100%',
        background: 'white', // Example custom background color
        color: '#9E9FA2',
        fontWeight: '500',
        fontSize: '14px', // Example custom font size
        borderRadius: '14px',
        maxHeight: '40px',
        paddingRight: '32px',
        paddingLeft: '32px',
        boxShadow:
          ' 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      },
    },
    headCells: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    rows: {
      style: (row: any, index: number) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: expandedRows.includes(row.id) ? '80px' : '80px',
        fontSize: '12px',
        marginBottom: '20px',
        borderRadius: '14px',
        background: 'white',
        paddingRight: '32px',
        paddingLeft: '32px',
        flexDirection: 'row-reverse',
        boxShadow:
          '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 16px -4px rgba(16, 24, 40, 0.08)',
      }),
    },
    cells: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  };
  const handleButtonClick = (id: number) => {
    history.push(`/course/${id}`);
  };

  const expandableRowsComponent = ({ data }: { data: DataRow }) => (
    <div className="flex p-4 shadow-md bg-[white] rounded-xl rounded-t-none h-[152px] gap-[32px] mb-8 w-full">
      {/* Add your custom expandable content here */}
      <div className="flex flex-col gap-1 p-2">
        <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
          TAGIHAN
        </p>
        <p className="text-base font-bold">Pembayaran Program</p>
        <p className="text-sm font-normal">{data.program}</p>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
            STATUS
          </p>
          <p className="text-base font-medium">{data.status}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
            ID TRANSAKSI
          </p>
          <p className="text-base font-medium">{data.idTransaction}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
            TENGGAT WAKTU
          </p>
          <p className="text-base font-medium">{data.tenggat}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
            TANGGAL DIBAYAR
          </p>
          <p className="text-base font-medium">{data.paidDate}</p>
        </div>
      </div>
      <div className="flex flex-col p-2 items-end max-w-[342px] w-full">
        <p className="text-xs font-bold text-[#9E9FA2] tracking-[0.2rem]">
          Total
        </p>{' '}
        <p className="text-base font-bold">{data.total}</p>
        <div className="flex flex-row gap-2 w-full items-end justify-end mt-6">
          <button
            className="max-w-[125px] h-[40px] w-full bg-[#FFFBB0] text-sm text-[#8C8500] rounded-xl"
            onClick={() => handleViewInvoiceClick(data)}
          >
            {' '}
            Lihat invoice
          </button>
          <button
            className="max-w-[145px] h-[40px] w-full bg-[#FFF200] text-sm rounded-xl"
            onClick={() => handleButtonClick(data.id)}
          >
            Bayar sekarang
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      style={{ background: '#f6f6f6' }}
      customStyles={customStyles}
      conditionalRowStyles={conditionalRowStyles}
      expandableRowsHideExpander
      expandableRowsComponent={expandableRowsComponent}
      expandableRowExpanded={(row) => expandedRows.includes(row.id)}
      onRowExpandToggled={(toggleState, row) => toggleRowExpansion(row.id)}
      expandableRows
    />
  );
};

const DynamicTable = dynamic(() => Promise.resolve(Table), { ssr: false });

export default DynamicTable;

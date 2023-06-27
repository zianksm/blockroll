import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface AttendenceData {
  id: number;
  classId: string;
  attendenceDate: string;
  download: string;
}

export default function AttendenceList() {
  const data: AttendenceData[] = [
    {
      id: 1,
      classId: 'SP12341',
      attendenceDate: 'December, 12 2023',
      download: 'unduh',
    },
    {
      id: 2,
      classId: 'SP12341',
      attendenceDate: 'December, 12 2023',
      download: 'unduh',
    },
    {
      id: 3,
      classId: 'SP12341',
      attendenceDate: 'December, 12 2023',
      download: 'unduh',
    },
    {
      id: 4,
      classId: 'SP12341',
      attendenceDate: 'December, 12 2023',
      download: 'unduh',
    },
  ];

  const columns: TableColumn<AttendenceData>[] = [
    {
      name: '#',
      selector: (row) => row.id,
      sortable: true,
      cell: (row: AttendenceData) => (
        <div style={{ width: '64px' }}>{row.id}</div>
      ),
    },
    {
      name: 'Kelas',
      selector: (row) => row.classId,
      sortable: true,
    },
    {
      name: 'Tanggal Absensi',
      selector: (row) => row.attendenceDate,
      sortable: true,
    },
    {
      name: 'Unduh Absensi',
      selector: (row) => row.download,
      sortable: false,
      cell: (row: AttendenceData) => (
        <div className="flex justify-end text-end">
          <button
            className="text-[#2A83E4] text-base"
            onClick={() => handleDownload(row.id)}
          >
            {row.download}
          </button>
        </div>
      ),
    },
  ];
  const customStyles = {
    table: {
      style: {
        marginTop: '20px',
        borderRadius: '14px',
      },
    },
  };

  const handleDownload = async (id: number) => {
    // Handle download logic here
    // Example: Generate a PDF using pdf-lib and download it
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.drawText('Downloaded PDF', { x: 50, y: 50, font });
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `absensi_${id}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col mt-6">
      <p className="font-semibold text-xl mb-2">Absensi Siswa</p>
      <div className="flex flex-col bg-white rounded-xl shadow-2xl w-full px-2">
        <DataTable<AttendenceData>
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          paginationRowsPerPageOptions={[4]}
        />
      </div>
    </div>
  );
}

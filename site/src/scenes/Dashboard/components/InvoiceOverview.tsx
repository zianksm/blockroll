import Link from 'next/link';
import React from 'react';

import CardInvoice from '@/components/common/CardInvoice';
import CardPrivateOnline from '@/components/common/Homepage/CardPrivateOnline';

interface InvoiceOverviewType {
  isRight?: boolean;
}

export default function InvoiceOverview(props: InvoiceOverviewType) {
  const BookIcon = 'assets/Icons/book.svg';

  const { isRight } = props;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-row justify-between my-auto">
        <p className="font-semibold text-xl ">Daftar Tagihan</p>
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          Lihat semua &rarr;{' '}
        </a>
      </div>
      <div className="flex flex-col gap-4 w-auto">
        <CardInvoice
          desc="Pembayaran Kelas Online"
          icon={BookIcon}
          href="/"
          excerpt=""
          author="Program teknik bedah"
          due="Deadline: 14:25:00 AM"
          date="12 juni 2023"
          isRight={isRight}
        />
        <CardInvoice
          desc="Pembayaran Kelas Online"
          icon={BookIcon}
          href="/"
          excerpt=""
          author="Program teknik bedah"
          due="Deadline: 14:25:00 AM"
          date="12 juni 2023"
          isRight={isRight}
        />
        <CardInvoice
          desc="Pembayaran Kelas Online"
          icon={BookIcon}
          href="/"
          excerpt=""
          author="Program teknik bedah"
          due="Deadline: 14:25:00 AM"
          date="12 juni 2023"
          isRight={isRight}
        />
      </div>
    </div>
  );
}

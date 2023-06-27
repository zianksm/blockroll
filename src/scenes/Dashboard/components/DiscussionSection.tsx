import React from 'react';

import CardChat from '@/components/common/CardChat/Card';

export default function DiscussionSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between my-auto">
        <p className="font-semibold text-xl ">Forum Diskusi</p>
      </div>{' '}
      <div className="flex flex-col gap-4">
        <CardChat
          desc="Ujian Teknik Bedah "
          lecturer="dr. John Doe, S.Ked., Sp.G."
          examTime="14:25 - 15:25 AM"
          date="Selasa 12 juni 2023"
          time="08:00:00"
        />
      </div>
    </div>
  );
}

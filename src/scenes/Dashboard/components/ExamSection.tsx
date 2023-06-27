import React from 'react';

import CardExam from '@/components/common/CardExam';

interface CardExamProps {
  isTeacher?: boolean;
  isStudent?: boolean;
  isParent?: boolean;
  data?: any;
}

export default function ExamSection(props: CardExamProps) {
  const { isTeacher, isStudent, isParent, data } = props;

  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex flex-row justify-between my-auto">
        <p className="font-semibold text-xl ">
          {isTeacher ? 'Kelas Hari Ini' : 'Ujian Online'}
        </p>
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          Lihat semua &rarr;{' '}
        </a>
      </div>{' '}
      <div className="flex flex-col gap-4">
        {isTeacher && (
          <>
            <CardExam
              desc="Kelas UTBK IPA"
              lecturer="dr. John Doe, S.Ked., Sp.G."
              examTime="14:25 - 15:25 AM"
              date="Selasa 12 juni 2023"
              time="08:00:00"
              isTeacher={isTeacher}
              place="Kelas Lorem ipsum"
            />{' '}
            <CardExam
              desc="Kelas UTBK IPA"
              lecturer="dr. John Doe, S.Ked., Sp.G."
              examTime="14:25 - 15:25 AM"
              date="Selasa 12 juni 2023"
              time="08:00:00"
              isTeacher={isTeacher}
              place="Kelas Lorem ipsum"
            />{' '}
            <CardExam
              desc="Kelas UTBK IPA"
              lecturer="dr. John Doe, S.Ked., Sp.G."
              examTime="14:25 - 15:25 AM"
              date="Selasa 12 juni 2023"
              time="08:00:00"
              isTeacher={isTeacher}
              place="Kelas Lorem ipsum"
            />
          </>
        )}
        {isStudent && (
          <CardExam
            desc="Ujian Teknik Bedah "
            lecturer="dr. John Doe, S.Ked., Sp.G."
            examTime="14:25 - 15:25 AM"
            date="Selasa 12 juni 2023"
            time="08:00:00"
          />
        )}{' '}
        {isParent && (
          <CardExam
            desc="Ujian Teknik Bedah "
            lecturer="dr. John Doe, S.Ked., Sp.G."
            examTime="14:25 - 15:25 AM"
            date="Selasa 12 juni 2023"
            time="08:00:00"
          />
        )}
      </div>
    </div>
  );
}

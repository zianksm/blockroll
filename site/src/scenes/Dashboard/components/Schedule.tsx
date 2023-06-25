import React from 'react';

import Card from '@/components/common/Card';

interface CardOverviewProps {
  isTeacher?: boolean;
  isStudent?: boolean;
  isParent?: boolean;
  data: any;
}

export default function OverviewCard(props: CardOverviewProps) {
  const { isTeacher, isStudent, isParent, data } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between my-auto">
        {isTeacher ? (
          <p className="font-semibold text-xl">Dashboard</p>
        ) : (
          <p className="font-semibold text-xl">Jadwal</p>
        )}
        <a href="" className="text-xs text-[#86878B] font-normal my-auto">
          View all &rarr;{' '}
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        {isTeacher && (
          <>
            {data.map((cardData: any, index: number) => (
              <Card
                key={index}
                desc={cardData.desc}
                icon={cardData.icon}
                href={cardData.href}
                excerpt={cardData.excerpt}
                author={cardData.author}
                value={cardData.value}
                isTeacher={true}
              />
            ))}
          </>
        )}
        {isStudent && (
          <>
            {data.map((cardData: any, index: number) => (
              <Card
                key={index}
                desc={cardData.desc}
                icon={cardData.icon}
                href={cardData.href}
                excerpt={cardData.excerpt}
                author={cardData.author}
                isStudent={true}
              />
            ))}
          </>
        )}
        {isParent && (
          <>
            {data.map((cardData: any, index: number) => (
              <Card
                key={index}
                desc={cardData.desc}
                icon={cardData.icon}
                href={cardData.href}
                excerpt={cardData.excerpt}
                author={cardData.author}
                isParent={true}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

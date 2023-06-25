import { useRouter } from 'next/router';

import Body from './component/detail/Body';
import Header from './component/detail/Header';
import LeftContent from './component/detail/LeftContent';

export default function Course() {
  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col w-full gap-4 lg:max-w-[680px]">
        <Header />
        {/* Bottom */}
        <Body />
      </div>
      {/* LEFT */}
      <div className="flex  w-full lg:max-w-[488px]">
        <LeftContent id={parseInt(id as string)} />
      </div>
    </div>
  );
}

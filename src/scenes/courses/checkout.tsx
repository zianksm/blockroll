import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Body from './component/checkout/Body';
import LeftContent from './component/checkout/LeftContent';
import PaymentMethodPopup from './component/checkout/popup/paymentMethod';

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;
  console.log('id', id);
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable for modal visibility
  const [paymentCode, setPaymentCode] = useState('BCA');
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[70px]">
      <div className="flex flex-col w-full gap-4 lg:max-w-[680px]">
        {/* Bottom */}
        <Body openModal={openModal} paymendCode={paymentCode} />
      </div>
      {/* LEFT */}
      <div className="flex  w-full lg:max-w-[488px]">
        <LeftContent id={parseInt(id as string)} />
      </div>
      {/* Modal content */}

      {/* Button to open the modal */}
      {/* <button onClick={openModal}>Open Modal</button> */}
      {isModalOpen && (
        <PaymentMethodPopup
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setPaymentCode={setPaymentCode}
        />
      )}
    </div>
  );
}

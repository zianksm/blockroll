import { Signer } from 'ethers';
import React, { useState } from 'react';
import { Payroll, PayrollBuilder } from '../../../../../lib';

interface ModalProps {
  closeModal: () => void;
  signer?: any;
  accont?: String;
  setBuild: (build: any) => void;
  isBuild: any;
}

const SendModal: React.FC<ModalProps> = ({
  closeModal,
  signer,
  accont,
  setBuild,
  isBuild,
}) => {
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState('');

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const to = isBuild.to;
      const value = isBuild.value;

      console.log('to', to);
      console.log('value', value);

      const send = await new Payroll(signer, to, value);
      console.log('send', send);
    } catch (error) {
      console.error('error', error);
    }

    closeModal(); // Close the modal after form submission
  };

  const isValidDecimal = (value: string) => {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
  };

  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 flex-col flex w-full text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Send Payroll
                  </h3>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={handleAddressChange}
                          className="mt-1 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md h-[40px]"
                          required
                        />
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Salary
                        </label>
                        <input
                          type="number"
                          value={salary}
                          onChange={handleSalaryChange}
                          className="mt-1 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md h-[40px]"
                          required
                        />
                      </div>
                      <button
                        onClick={closeModal}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={closeModal}
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendModal;

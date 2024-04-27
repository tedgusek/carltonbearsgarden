import React from 'react';
import { WelcomeModalProps } from '@/app/types/interface';

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-yellow-100 bg-opacity-50 z-50 '>
      <div className='max-w-md w-full p-4 bg-yellow-50 rounded-xl shadow-lg flex flex-col  border-gray-500 border-4 shadow-green-100'>
        <h2 className='text-xl font-bold mb-2 text-black '>
          Welcome To Carlton Bears Garden (Website!)
        </h2>
        <div className='flex flex-row items-stretch justify-center m-4 text-black'>
          We are one of over 550 community gardens in NYC. You can find info
          here on our garden&apos;s history, info on how to join, and for
          current members to pay suggested dues.
        </div>
        <div className='flex flex-col items-center'>
          <button
            className='flex flex-col items-center bottom-1 rounded-full px-4 bg-green-600 bg-opacity-70 hover:bg-opacity-100 w-60'
            onClick={handleCloseModal}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

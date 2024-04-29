import React from 'react';
import { WelcomeModalProps } from '@/app/types/interface';

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleButtonClick = () => {
    window.open(
      'https://www.nycgovparks.org/greenthumb/community-gardens',
      '_blank'
    );
  };

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-yellow-100 bg-opacity-75 z-50 '>
      <div className='max-w-lg w-5/6 p-4 bg-yellow-50 rounded-xl shadow-lg flex flex-col  border-gray-500 border-4 shadow-green-100'>
        <h2 className='text-xl font-bold mb-2 text-black flex flex-col items-center text-center'>
          Welcome To Carlton Bears Garden (Website!)
        </h2>
        <div className=' m-4 text-black text-center'>
          We are one of over{' '}
          <button onClick={handleButtonClick} className='bg-inherit font-bold'>
            550 community gardens
          </button>{' '}
          in NYC. You can find info here on our garden&apos;s history, how to
          join, and for current members to pay suggested dues.
        </div>
        <div className='flex flex-col items-center'>
          <button
            className='flex flex-col items-center bottom-1 rounded-full px-4 bg-green-600 bg-opacity-70 hover:bg-opacity-100 max-w-60'
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

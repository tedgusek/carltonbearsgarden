import React, { useState } from 'react';
import { WelcomeModalProps } from '@/app/types/interface';
// import CharCard from '../charCard/CharCard';
// import { BattleModalProps } from '@/app/types/interface';
// import { useState } from 'react';

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  //   const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  //   if (!characters[0] || !characters[1]) return;

  //   const doNothing = () => {
  // console.log(
  //   'this is a placeholder to fill in a param so that I could reuse the CharCard component'
  // );
  //   };

  const handleCloseModal = () => {
    onClose();
    //   battleOnClick();
  };

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-yellow-100 bg-opacity-50 z-50 '>
      <div className='max-w-md w-full p-4 bg-yellow-50 rounded-xl shadow-lg flex flex-col items-center justify-center border-gray-500 border-4 shadow-gray-500'>
        <h2 className='text-xl font-bold mb-2 text-black'>
          Welcome To Carlton Bears Garden
        </h2>
        <div className='flex flex-row items-center justify-center m-4 text-black'>
          Filler text goes here, talk about the garden, all are welcome. Please
          explore our site to see how you can get involved.
        </div>
        <button
          className='flex flex-col items-center bottom-1 rounded-full px-4 bg-green-600 bg-opacity-70 hover:bg-opacity-100'
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;

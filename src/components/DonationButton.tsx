import React, { useState } from 'react';

const DonateButton: React.FC = () => {
  const handleButtonClick = () => {
    window.open('https://www.paypal.me/CarltonBearsTreasury', '_blank');
  };

  return (
    <button
      // key={index}
      className={`py-2 px-8 md:mt-6 my-4 mx-1 rounded-lg text-black font-bold hover:bg-yellow-100 bg-green-400 drop-shadow-lg  `}
      onClick={handleButtonClick}
    >
      Donate!
    </button>
  );
};

export default DonateButton;

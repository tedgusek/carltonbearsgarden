import React, { useState } from 'react';
import { NavbarProps } from '@/app/types/interface';

const Navbar: React.FC<NavbarProps> = ({
  content,
  setContent,
  scrollToTop,
}) => {
  // Array of the Buttons
  const navMenuItems: string[] = ['Membership', 'History', 'About', 'Dues'];
  // Button Click Sets state to be used in the contentwindow
  const handleButtonClick = (menuItem: string) => {
    setContent(menuItem);
  };

  const buttons = navMenuItems.map((menuItem, index) => (
    <button
      key={index}
      className={`py-2 px-1 sm:mt-6 mx-1 rounded-lg text-black font-bold hover:bg-yellow-300 text-xs sm:text-lg z-10 ${
        content === menuItem ? 'bg-yellow-200 ' : 'bg-white bg-opacity-75'
      }`}
      onClick={() => {
        handleButtonClick(menuItem);
        scrollToTop();
      }}
    >
      {menuItem}
    </button>
  ));

  return (
    <div className=''>
      <div className=' sm:fixed sm:top-5 sm:right-10 flex flex-row items-center '>
        {buttons}
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { WelcomeModalProps } from '@/app/types/interface';
import { WelcomePageProps } from '@/app/types/interface';

const WelcomePage: React.FC<WelcomePageProps> = ({ content }) => {
  const handleButtonClick = () => {
    window.open(
      'https://www.nycgovparks.org/greenthumb/community-gardens',
      '_blank'
    );
  };

  return (
    <div className='h-96 w-full  text-black flex flex-col items-stretch'>
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
    </div>
  );
};

export default WelcomePage;

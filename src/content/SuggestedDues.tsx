import DonateButton from '@/components/DonationButton';
import React from 'react';

interface SuggestedDuesPageProps {
  content: string;
}

const SuggestedDuesPage: React.FC<SuggestedDuesPageProps> = ({ content }) => {
  return (
    <div className='h-full w-full text-black flex flex-col items-center'>
      <p className='font-bold'> Suggested Dues </p>
      <DonateButton />
      <p className='mt-6'>
        Dues are strongly suggested to help maintain the integrity of our space.
        They are collected once a seaon, they help fund the general maintenance
        of our communal space.
      </p>
    </div>
  );
};

export default SuggestedDuesPage;

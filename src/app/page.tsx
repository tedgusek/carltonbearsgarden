'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ContentWindow from '@/components/ContentWindow';
import InstagramIcon from '@/components/InstagramIcon';
import FacebookIcon from '@/components/FacebookIcon';
import GmailIcon from '@/components/GmailIcon';
import React, { useState } from 'react';
import WelcomeModal from '@/components/modals/WelcomeModal';

export default function Home() {
  const [content, setContent] = useState<string>('Membership');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className=' overflow-auto max-h-screen flex flex-col items-center p-24 bg-gradient-to-br from-yellow-100 to-white  w-screen relative'>
      {isModalOpen && <WelcomeModal onClose={closeModal} />}
      <div className='absolute inset-0 z-0 '>
        <Image
          src='/aerial.jpeg'
          alt='Photo with blue sky and sunflower in the midst of a lot of green leaves'
          width={2500}
          height={1500}
          className='fixed top-0 z-0 w-full  bg-inherit opacity-50 '
        />
      </div>
      <Image
        src='/bear-logo-with-text.png'
        alt='bear logo'
        width={150}
        height={150}
        className='fixed top-4 drop-shadow-xl min-w-64  items-center sm:fixed sm:w-56 sm:left-4 sm:top-4 '
      />

      <div className='fixed top-64 '>
        <Navbar content={content} setContent={setContent} />
      </div>

      <div className='absolute top-32 bottom-32 sm:top-64 z-20'>
        <ContentWindow content={content} />
      </div>
      <div className='z-40'>
        <GmailIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </main>
  );
}

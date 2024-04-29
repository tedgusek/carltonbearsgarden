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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [body, setBody] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleForm = () => {
    setBody('');
    setIsFormOpen(!isFormOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
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
      {/* <div className='z-50 max-w-5xl w-full font-mono text-sm flex flex-col items-center '> */}
      {/* <p className='fixed left-0 top-0 py-6 flex flex-col items-center w-full justify-center bg-gradient-to-br from-green-300 via-transparent to-transparent  lg:text-5xl md:text-4xl sm:text-3xl sm:max-w-56 text-black font-extrabold md:w-80 md:top-0 px-10 text-sm sm:fixed sm:top-0'> */}
      {/* Carlton Bears Garden */}
      <Image
        src='/bear-logo-with-text.png'
        alt='bear logo'
        width={150}
        height={150}
        // className="rounded-full mt-2 drop-shadow-lg border-white border-4 bg-slate-500 bg-opacity-75"
        // className=' top-4 drop-shadow-xl  sm:w-40 mt-2 left-10 lg:top-10 lg:left-10 lg:fixed lg:w-56 sm:fixed sm:left-10 flex flex-col items-center sm:top-10'
        className='fixed top-4 drop-shadow-xl min-w-64  items-center sm:fixed sm:w-56 sm:left-4 sm:top-4 '
      />
      {/* </p> */}
      {/* </div> */}
      <div className='fixed top-64 '>
        <Navbar content={content} setContent={setContent} />
      </div>
      {/* <div className='mt-56 sm:mt-0'> */}
      <div className='absolute top-32 bottom-32 sm:top-64 z-20'>
        <ContentWindow content={content} />
      </div>
      <div className='z-50'>
        <GmailIcon
          body={body}
          isFormOpen={isFormOpen}
          handleForm={handleForm}
          setBody={setBody}
          handleChange={handleChange}
        />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </main>
  );
}

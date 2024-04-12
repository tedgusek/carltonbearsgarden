'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ContentWindow from '@/components/ContentWindow';
import InstagramIcon from '@/components/InstagramIcon';
import FacebookIcon from '@/components/FacebookIcon';
import React, { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState<string>('Membership');

  return (
    <main className='min-h-screen flex flex-col items-center p-24 bg-gradient-to-br from-yellow-100 to-white  w-screen overflow-y-auto'>
      <div className='absolute inset-0 z-0 '>
        <Image
          src='/aerial.jpeg'
          alt='Photo with blue sky and sunflower in the midst of a lot of green leaves'
          width={2500}
          height={1500}
          className='fixed top-0 z-0 w-full  bg-inherit opacity-50 '
        />
      </div>
      <div className='z-50 max-w-5xl w-full font-mono text-sm flex flex-col items-center '>
        <p className='fixed left-0 top-0 py-6 flex flex-col items-center w-full justify-center bg-gradient-to-br from-green-300 via-transparent to-transparent  lg:text-5xl md:text-4xl sm:text-3xl sm:max-w-56 text-black font-extrabold md:w-80 md:top-0 px-10 text-sm sm:fixed sm:top-0'>
          Carlton Bears Garden
          <Image
            src='/bear-logo.png'
            alt='bear logo'
            width={150}
            height={150}
            // className="rounded-full mt-2 drop-shadow-lg border-white border-4 bg-slate-500 bg-opacity-75"
            className=' top-4 drop-shadow-xl  sm:w-40 mt-2 left-10 lg:top-56 lg:left-20 lg:fixed sm:fixed sm:left-14 md:top-40 rounded-full bg-yellow-200 border-green-700 border-4 flex flex-col items-center sm:top-40'
          />
        </p>
      </div>
      <div className='fixed '>
        <Navbar content={content} setContent={setContent} />
      </div>
      <div className=' '>
        <ContentWindow content={content} />
      </div>

      <FacebookIcon />
      <InstagramIcon />
    </main>
  );
}

import React from 'react';
import Image from 'next/image';

// import { getStaticProps } from 'next/dist/build/templates/pages';
// import ExampleComponent from './TypeOfWindow';

interface AboutPageProps {
  content: string;
}

// console.log(ExampleComponent)

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  return (
    <div className='h-full w-full text-black flex flex-col items-stretch'>
      <h5 style={{ fontSize: '1.5rem' }} className='font-bold'>
        About
      </h5>
      {/* <p style={{ fontSize: '1.5rem' }} className='font-bold'>About</p> */}
      <p>
        Carlton Ave Brooklyn Bears Garden is one of the 3 Brooklyn Bears
        gardens. It is tended by volunteers and everyone is welcome to join! You
        can tend a vegetable bed, a flower area, the water garden, help turn the
        compost, just sit and enjoy the beauty, or join in at one of our many
        workdays or BBQs. Each member gets their own key, so with more members
        the gates can be open more often.
      </p>
      <br></br>
      <div className='py-4 flex flex-col items-center'>
        <Image
          src='/3bearsmapdoc.jpg'
          alt='Map that shows where the 3 Brooklyn Bears Gardens are in relation to each other'
          width={150}
          height={150}
          className='drop-shadow-xl items-center'
        />
      </div>
      <br></br>
      <p className='py-4'>
        In this map you can see where all of the gardens are. (1) Is the Pacific
        Garden (2) is the Rockwell Garden and (3) is our Beloved Carlton Ave
        Garden
      </p>
    </div>
  );
};

export default AboutPage;

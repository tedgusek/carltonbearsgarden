import React from 'react';

interface GalleryPageProps {
  content: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ content }) => {
  return (
    <div className='h-full w-full text-black flex flex-col items-center'>
      <p> Gallery blah blah blah </p>
    </div>
  );
};

export default GalleryPage;

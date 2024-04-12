import React from 'react';
import AboutPage from '../content/AboutPage';
import GalleryPage from '../content/GalleryPage';
import SuggestedDuesPage from '../content/SuggestedDues';
import HistoryPage from '../content/HistoryPage';
import BAMPage from '../content/BecomeAMember';

interface ContentWindowProps {
  content: string;
}

const ContentWindow: React.FC<ContentWindowProps> = ({ content }) => {
  return (
    // <div className='h-96 md:h-3/4 bg-gray-200 bg-opacity-75 p-4 relative top-20 right-10 w-2/3 rounded-md overflow-auto mt-48 md:mt-6 lg:max-w-2xl lg:mx-auto z-30 '>
    <div className='h-96 bg-gray-200 bg-opacity-75 p-4 relative top-0 w-full rounded-md overflow-auto sm:mt-56 mt-44 sm:mx-40 sm:w-3/4 md:fixed md:top-0 md:right-0 md:mr-4 md:min-h-3/4 z-0'>
      {/* <div className='h-1/2 md:h-3/4 bg-gray-200 bg-opacity-75 p-4 fixed top-20 right-10 w-2/3 rounded-md overflow-auto mt-48 md:mt-6 max-w-2xl z-30 '> */}
      {content === 'About' && <AboutPage content={'About'} />}
      {content === 'Gallery' && <GalleryPage content={'GalleryPage'} />}
      {content === 'Dues' && (
        <SuggestedDuesPage content={'SuggestedDuesPage'} />
      )}
      {content === 'History' && <HistoryPage content={'HistoryPage'} />}
      {content === 'Membership' && <BAMPage content={'BAMPage'} />}
    </div>
  );
};

export default ContentWindow;

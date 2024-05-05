import React from 'react';
import AboutPage from '../content/AboutPage';
import GalleryPage from '../content/GalleryPage';
import SuggestedDuesPage from '../content/SuggestedDues';
import HistoryPage from '../content/HistoryPage';
import BAMPage from '../content/BecomeAMember';
import WelcomePage from '@/content/WelcomPage';
import { ContentWindowProps } from '@/app/types/interface';

const ContentWindow: React.FC<ContentWindowProps> = ({
  content,
  contentRef,
}) => {
  return (
    <div
      className='fixed bottom-4 max-h-3/4  top-80 md:top-40 md:bottom-4 right-4 bg-gray-200 bg-opacity-75 p-4 w-3/4 rounded-md overflow-auto z-30'
      ref={contentRef}
    >
      {content === 'Welcome' && <WelcomePage content={'Welcome'} />}
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

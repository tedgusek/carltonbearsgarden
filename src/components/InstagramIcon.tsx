import React, { FC } from 'react';

const InstagramIcon: FC = () => (
    <a
        href='https://www.instagram.com/brooklynbearscarltonavegarden/'
        target='_blank'
        rel="noopener noreferrer"
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className='z-50 w-12 fixed bottom-4 left-4 rounded-full bg-slate-500'

    >
    <rect width="16" height="16" x="4" y="4" rx="4" ry="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.5"></line>
    </svg>    
    </a>
);

export default InstagramIcon;

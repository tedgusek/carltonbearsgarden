import React, {FC} from 'react';

const FacebookIcon: FC = () => {
  return (
    <a href='https://www.facebook.com/bkbearscommunitygarden' target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Facebook"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className='z-50 w-12 fixed bottom-20 left-4 rounded-full bg-slate-500'
      >
        <path
        //   fill="#ffffff"
          d="M12 2C6.482 2 2 6.482 2 12c0 4.968 3.633 9.073 8.375 9.829v-6.969H7.938V12h2.437v-1.729c0-2.413 1.445-3.754 3.647-3.754 1.055 0 2.192.187 2.192.187v2.406h-1.237c-1.219 0-1.602.754-1.602 1.531V12h2.735l-.438 2.86h-2.297v6.969C18.367 21.073 22 16.968 22 12c0-5.518-4.482-10-10-10z"
        ></path>
      </svg>
    </a>
  );
};

export default FacebookIcon;

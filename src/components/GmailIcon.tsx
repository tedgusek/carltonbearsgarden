import React, { FC } from 'react';

const GmailIcon: FC = () => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const email = 'carltonbearsgarden@gmail.com';
    // Sets default setting of email to allow recipient to know where it came from
    const subject = 'Inquiry%20about%20the%20Garden%20from%20the%20website';
    const mailtoLink = `mailto:${email}?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <button onClick={handleSubmit}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='z-40 w-12 fixed bottom-36 left-4 rounded-full bg-slate-500'
        >
          {/* Envelope body */}
          <rect x='3' y='6' width='18' height='12' rx='2' ry='2'></rect>
          {/* Envelope flap */}
          <line x1='4' y1='7' x2='12' y2='12'></line>
          <line x1='12' y1='12' x2='19.5' y2='8'></line>
        </svg>
      </button>
    </div>
  );
};

export default GmailIcon;

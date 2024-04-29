// import React, { FC } from 'react';
// import { GmailIconProps } from '@/app/types/interface';

// // interface GmailIconProps {
// //   body: string;
// // }

// const GmailIcon: FC<GmailIconProps> = ({ body }) => {
//   const email = 'carltonbearsgarden@gmail.com';
//   const subject = 'Email%20from%20the%20Website'; // You can change this to your desired subject

//   const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
//     body
//   )}`;

//   return (
//     <a href={mailtoLink} target='_blank' rel='noopener noreferrer'>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         aria-label='Gmail'
//         role='img'
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeWidth='2'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         className='z-40 w-12 fixed bottom-20 left-4 rounded-full bg-red-500'
//       >
//         <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.625 5.709L12 13.118l-5.625-5.409h11.25zm-11.25 8.582L12 10.882l3.625 4.41H5.375zm1.278-9.746L12 11.447l5.347-4.402 1.573 1.201-6.92 5.537-6.92-5.537 1.573-1.201z'></path>
//       </svg>
//     </a>
//   );
// };

// export default GmailIcon;
import React, { FC, useState } from 'react';
import { GmailIconProps } from '@/app/types/interface';

// interface GmailIconProps {
//   initialBody?: string;
// }

const GmailIcon: FC<GmailIconProps> = ({
  isFormOpen,
  handleForm,
  handleChange,
  setBody,
  body,
}) => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  // const [body, setBody] = useState(initialBody);

  // const openForm = () => {
  //   setIsFormOpen(true);
  // };

  // const closeForm = () => {
  //   setIsFormOpen(false);
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setBody(event.target.value);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = 'carltonbearsgarden@gmail.com';
    const subject = 'Subject%20of%20the%20email'; // You can change this to your desired subject
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailtoLink;
    // Optionally, you can also close the form here if needed
    handleForm();
  };

  return (
    <div>
      <button onClick={handleForm}>
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
        ;
      </button>
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className='bg-yellow-100 rounded-lg border-4 border-green-100 h-60 flex flex-col items-center'
        >
          <textarea
            value={body}
            onChange={handleChange}
            placeholder='Type your message here...'
            rows={15}
            cols={30}
            className='m-4 p-2 z-50 text-black'
          />
          <button
            type='submit'
            className='text-black rounded-xl bg-green-400 px-4'
          >
            Send
          </button>
          <button
            type='button'
            className='text-black rounded-xl bg-red-500 px-4 m-2'
            onClick={handleForm}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default GmailIcon;

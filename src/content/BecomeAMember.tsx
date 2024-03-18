import React from 'react';

interface BAMPageProps {
    content: string;
}



const BAMPage: React.FC<BAMPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto text-black flex flex-col items-center'>
            <h5 style={{ fontSize: '1.5rem' }} className='font-bold'>Become a Member</h5>
            <p> If you&apos;re interested in becoming a member, please fill out our application form <a href='https://docs.google.com/forms/d/1H_3FfZ0LvSMaRMyXcskXin1zFIOrRUpC9b_I77_bx7o/edit' target= '_blank' rel='noopener noreferrer' className='font-bold'>Here</a> </p>
        </div>
    );
}

export default BAMPage;
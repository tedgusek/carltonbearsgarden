import React from 'react';

interface SuggestedDuesPageProps {
    content: string;
}



const SuggestedDuesPage: React.FC<SuggestedDuesPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto text-black flex flex-col items-center'>
            <p> Suggested Dues  Paypal button blah blah blah </p>
        </div>
    );
}

export default SuggestedDuesPage;
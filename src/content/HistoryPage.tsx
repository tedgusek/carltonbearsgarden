import React from 'react';

interface HistoryPageProps {
    content: string;
}



const HistoryPage: React.FC<HistoryPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto'>
            <p> History blah blah blah </p>
        </div>
    );
}

export default HistoryPage;
import React from 'react';

interface BAMPageProps {
    content: string;
}



const BAMPage: React.FC<BAMPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full overflow-auto'>
            <p> Becoma a member BAM blah blah blah </p>
        </div>
    );
}

export default BAMPage;
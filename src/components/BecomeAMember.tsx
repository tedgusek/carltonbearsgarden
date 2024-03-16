import React from 'react';

interface BAMPageProps {
    content: string;
}



const BAMPage: React.FC<BAMPageProps> = ({ content }) => {
    return (
        <div>
            <p> Becoma a member BAM blah blah blah </p>
        </div>
    );
}

export default BAMPage;
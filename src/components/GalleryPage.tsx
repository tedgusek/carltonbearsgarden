import React from 'react';

interface GalleryPageProps {
    content: string;
}



const GalleryPage: React.FC<GalleryPageProps> = ({ content }) => {
    return (
        <div>
            <p> Gallery blah blah blah </p>
        </div>
    );
}

export default GalleryPage;
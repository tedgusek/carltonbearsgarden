// import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import MarkDownContent from './MarkDownContent';
// import { getStaticProps } from 'next/dist/build/templates/pages';
// import ExampleComponent from './TypeOfWindow';

interface AboutPageProps {
    content: string;
}

// console.log(ExampleComponent)

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
    return (
        <div>
            <p> About blah blah blah </p>
        </div>
    );
}

export default AboutPage;
import React from 'react';

// import { getStaticProps } from 'next/dist/build/templates/pages';
// import ExampleComponent from './TypeOfWindow';

interface AboutPageProps {
    content: string;
}

// console.log(ExampleComponent)

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
    return (
        <div className='h-full w-full'>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
            <p> About blah blah blah </p>
        </div>
    );
}

export default AboutPage;
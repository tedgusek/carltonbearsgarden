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
            <MarkDownContent content={content} />
        </div>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'content', 'about.md');
    const content = await fs.readFile(filePath, 'utf8');
    return { props: { content } };
}

export default AboutPage;
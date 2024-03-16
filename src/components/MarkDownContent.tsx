// import fs from 'fs';
import path from 'path';
import React, {useEffect, useState} from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import axios from 'axios';
// import MarkdownIt from 'markdown-it';
import MarkdownIt from 'markdown-it';

// interface MarkdownContentProps {
//     content: string;
// }


const MarkDownContent: React.FC = () => {
    // read the content from the MD file
    // const markDownContent = fs.readFileSync(filePath, 'utf-8');
    // Parse the conmtent from the MD file
    // const parsedHtmlContent = remark().use(html).processSync(markDownContent).toString();

    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        const fetchedMarkdownContent = async () => {
            try {
                const response = await axios.get<string>('/about.md');
                setMarkdownContent(response.data);
            } catch (error) {
                console.error('Error Fetching Markdown Content: ', error);
            }
        };
        fetchedMarkdownContent();
    }, []);

    // const parsedHtmlContent = remark().use(html).processSync(content).toString();
    const md = new MarkdownIt();
    const htmlContent = md.render(markdownContent);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );

}

export default MarkDownContent;
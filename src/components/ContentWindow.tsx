import React from "react";
import AboutPage from "./AboutPage";

interface ContentWindowProps {
    content: string;
}

const ContentWindow: React.FC<ContentWindowProps> = ({ content }) => {
    return (
        <div className="mt-8">
        {content === 'AboutPage' && <AboutPage content={""}/>}
        </div>
    )
}

export default ContentWindow;
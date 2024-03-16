import React from "react";
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import SuggestedDuesPage from "./SuggestedDues";
import HistoryPage from "./HistoryPage";
import BAMPage from "./BecomeAMember";

interface ContentWindowProps {
    content: string;
}

const ContentWindow: React.FC<ContentWindowProps> = ({ content }) => {
    return (
        <div className="mt-8">
        {content === 'AboutPage' && <AboutPage content={"AboutPage"}/>}
        {content === 'GalleryPage' && <GalleryPage content={"GalleryPage"}/>}
        {content === 'SuggestedDuesPage' && <SuggestedDuesPage content={"SuggestedDuesPage"}/>}
        {content === 'HistoryPage' && <HistoryPage content={"HistoryPage"}/>}
        {content === 'BAMPage' && <BAMPage content={"BAMPage"}/>}
        
        </div>
    )
}

export default ContentWindow;
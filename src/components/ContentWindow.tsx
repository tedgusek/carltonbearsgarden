import React from "react";
import AboutPage from "../content/AboutPage";
import GalleryPage from "../content/GalleryPage";
import SuggestedDuesPage from "../content/SuggestedDues";
import HistoryPage from "../content/HistoryPage";
import BAMPage from "../content/BecomeAMember";

interface ContentWindowProps {
    content: string;
}

const ContentWindow: React.FC<ContentWindowProps> = ({ content }) => {
    return (
        <div className="h-2/3 bg-yellow-200 p-4 fixed top-20 right-10 w-2/3 rounded-md">
        {content === 'AboutPage' && <AboutPage content={"AboutPage"}/>}
        {content === 'GalleryPage' && <GalleryPage content={"GalleryPage"}/>}
        {content === 'SuggestedDuesPage' && <SuggestedDuesPage content={"SuggestedDuesPage"}/>}
        {content === 'HistoryPage' && <HistoryPage content={"HistoryPage"}/>}
        {content === 'BAMPage' && <BAMPage content={"BAMPage"}/>}
        
        </div>
    )
}

export default ContentWindow;
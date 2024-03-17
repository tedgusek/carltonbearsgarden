import React, { useState } from "react";

interface NavbarProps {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ content, setContent, activeTab, setActiveTab }) => {
    // Array of the Buttons
    const navMenuItems: string[] = ['AboutPage', 'GalleryPage', 'SuggestedDuesPage', 'HistoryPage', 'BAMPage']
    // Button Click Sets state to be used in the contentwindow
    const handleButtonClick = (menuItem: string) => {
        setContent(menuItem);
        setActiveTab(menuItem);
    };

    const buttons = navMenuItems.map((menuItem, index) =>
        
        <button
            key={index}
            // className="bg-gray-100 hover:bg-white text-black font-bold py-2 px-4 rounded"
            // className="bg-gray-100 hover:bg-white text-black font-bold py-2 px-4 rounded"
            className= {`py-2 px-4 rounded text-black font-bold hover:bg-yellow-100 bg-opacity-75 ${ activeTab === menuItem ? "bg-gray-100 " : "bg-white"}`}
            onClick={() => {
                handleButtonClick(menuItem)
            }}
        >
            {menuItem}
            
        </button>)

    return (
        <div className="fixed top-5 right-10">
            {buttons}
          
        </div>
    )
} 

export default Navbar;
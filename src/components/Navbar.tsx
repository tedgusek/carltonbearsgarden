import React, { useState } from "react";

interface NavbarProps {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({content, setContent}) => {
   // Array of the Buttons
    const navMenuItems: string[] = ['AboutPage', 'GalleryPage', 'SuggestedDuesPage', 'HistoryPage', 'BAMPage']
    // Button Click Sets state to be used in the contentwindow
    const handleButtonClick = (menuItem: string) => {
        setContent(menuItem);        
    };

    const buttons = navMenuItems.map((menuItem, index) =>
        
        <button
            key={index}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                handleButtonClick(menuItem)
            }}
        >
            {menuItem}
            
        </button>)

    return (
        <div className="fixed top-25 right-10">
            {buttons}
          
        </div>
    )
} 

export default Navbar;
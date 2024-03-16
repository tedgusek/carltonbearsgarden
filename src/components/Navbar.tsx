import React, { useState } from "react";
import MarkDownContent from "./MarkDownContent";
import path from "path";
// import about from "./../content/about.md";
// import about from './../content/about.md'
// import AboutPage from "./AboutPage";
import AboutPage from "./AboutPage";

interface NavbarProps {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({content, setContent}) => {
    // Change this an array to an object with the key as the string, and the value as the link to where the button should go
    // The endpoint is going to be rendered in a div on the landing page below the nav bar
    // const navMenuItems: string[] = ['About', 'Gallery', 'Suggested Dues', 'History', 'Become a Member'];
    
    // const [content, setContent] = useState("About");  // Change this to initialize state to about
    const navMenuItems: {[key: string]: string} = {
        'About': 'AboutPage',
        'Gallery': 'gallery',
        'Suggested Dues': 'suggestedDues',
        'History': 'history',
        'Become a Member': 'becomeAMember',

    }
    
    // console.log('about ', about.keys);
    // console.log('About ', navMenuItems.About);
    // console.log('Gallery ', navMenuItems.Gallery);
    const handleButtonClick = (menuItem: string) => {
        // const item = navMenuItems[menuItem];
        setContent(menuItem);        
    };

    const buttons = Object.keys(navMenuItems).map((menuItem, index) =>
        
        <button
            key={index}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                handleButtonClick(menuItem)
                console.log('menuItem ', menuItem)
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
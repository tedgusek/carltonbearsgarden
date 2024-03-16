import React, { useState } from "react";
import MarkDownContent from "./MarkDownContent";
import path from "path";
// import about from "./../content/about.md";
// import about from './../content/about.md'
import AboutPage from "./AboutPage";

function Navbar() {
    // Change this an array to an object with the key as the string, and the value as the link to where the button should go
    // The endpoint is going to be rendered in a div on the landing page below the nav bar
    // const navMenuItems: string[] = ['About', 'Gallery', 'Suggested Dues', 'History', 'Become a Member'];
    
    const [content, setContent] = useState("");  // Change this to initialize state to about
    const navMenuItems = {
        'About': AboutPage,
        'Gallery': 'gallery',
        'Suggested Dues': 'suggestedDues',
        'History': 'History',
        'Become a Member': 'become a member'
    }
    // console.log('about ', about.keys);
    // console.log('About ', navMenuItems.About);
    // console.log('Gallery ', navMenuItems.Gallery);
    const handleButtonClick = (menuItem: string) => {
        const item = navMenuItems[menuItem];

        if (typeof item === 'string') {
            setContent(item);
        } else {
            setContent(item.filePath);
        }
        
    };

    const buttons = Object.keys(navMenuItems).map((menuItem, index) =>
        
        <button
            key={index}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> handleButtonClick(menuItem)}
        >
            {menuItem}
            
        </button>)

    return (
        <div className="fixed top-25 right-10">
            {buttons}
            <div>
                {content && typeof navMenuItems[content] !== 'string' && (<MarkDownContent filePath = {content} />
                )}
            </div>
        </div>
    )
} 

export default Navbar;
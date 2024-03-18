import React, { useState } from "react";

interface NavbarProps {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ content, setContent }) => {
    // Array of the Buttons
    const navMenuItems: string[] = ['Membership', 'History', 'About', 'Dues']
    // Button Click Sets state to be used in the contentwindow
    const handleButtonClick = (menuItem: string) => {
        setContent(menuItem);
    };

    const buttons = navMenuItems.map((menuItem, index) =>
        <button
            key={index}
            className= {`py-2 px-4 md:mt-6 mt-48 mx-1 rounded text-black font-bold hover:bg-yellow-100 bg-opacity-75 ${ content === menuItem ? "bg-gray-100 " : "bg-white"}`}
            onClick={() => {
                handleButtonClick(menuItem)
            }}
        >
            {menuItem}
            
        </button>)

    return (
        <div className="md:flex">
            <div className="fixed top-5 right-10">
                {buttons}
            </div>
        </div>
    )
} 

export default Navbar;
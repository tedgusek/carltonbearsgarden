import React, { useState } from "react";

// interface NavbarProps {
//     content: string;
//     setContent: React.Dispatch<React.SetStateAction<string>>;
// }

const DonateButton: React.FC = () => {
    // Array of the Buttons
    // const navMenuItems: string[] = ['Membership', 'History', 'About', 'Dues']
    // Button Click Sets state to be used in the contentwindow
    const handleButtonClick = () => {
        window.open("https://www.paypal.me/CarltonBearsTreasury", "_blank");
        // <a href="www.paypal.me/CarltonBearsTreasury"
        //    target="_blank"
        //    rel="noopener noreferrer"
        // >
        //     Donate
        // </a>
        // setContent(menuItem);
    };

    // const donateButton = (() =>
    //     <button
    //         // key={index}
    //         className= {`py-2 px-1 md:mt-6 mt-48 mx-1 rounded-lg text-black font-bold hover:bg-yellow-100 bg-opacity-75 ${ content === menuItem ? "bg-gray-100 " : "bg-white"}`}
    //         onClick={() => {
    //             handleButtonClick()
    //         }}
    //     >
    //         Donate!
            
    //     </button>)

    return (
        <button
            // key={index}
            className={`py-2 px-1 md:mt-6 mt-48 mx-1 rounded-lg text-black font-bold hover:bg-yellow-100 bg-opacity-75 `}
            onClick= {handleButtonClick}
        >
            Donate!
            
        </button>
        // <div className="md:flex items-center">
        //     <div className="fixed top-5 right-10">
        //         {donateButton}
        //     </div>
        // </div>
    )
} 

export default DonateButton;
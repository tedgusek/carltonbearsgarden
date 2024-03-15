import React from "react";

function Navbar() {
    // Change this an array to an object with the key as the string, and the value as the link to where the button should go
    // The endpoint is going to be rendered in a div on the landing page below the nav bar
    const navMenuItems: string[] = ['About', 'Gallery', 'Suggested Dues', 'History', 'Become a Member'];

    const buttons = navMenuItems.map((string, index) =>
        <button key={index} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {string}
        </button>)

    return (
        <div className="fixed top-25 right-10">
            {buttons}
        </div>
    )
} 

export default Navbar;
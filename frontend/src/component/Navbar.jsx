import { useEffect, useState } from "react";


export default function Navbar() {
   
    return (
        <nav className={` bg-neutral-800 p-4 fixed w-full  `}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    ChatAI
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">
                        Home
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Features
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Pricing
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

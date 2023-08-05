import React from "react";
import Image from "next/image";
import Link from "next/link";
import PopcornIcon from "../../../public/popcornIcon.png";
import "tailwindcss/tailwind.css";

const Navbar = () => {
    return(
        <div>
            <nav className="flex items-center justify-between bg-gradient p-6">
            <div className="flex py-2 px-4 text-yellow-200 text-xl font-bold font-sans my-3">MOQO</div>
                <div className="flex items-center flex-shrink-0 flex-grow justify-center text-white mx-auto">
                    <ul className="flex items-center justify-betweeen">
                        <li className="mr-4 pl-4">
                            <Link href="/home" className="font-bold text-yellow-300">Home</Link>
                        </li>
                        <li className="mr-4 pl-4">
                            <Link href="/ranking" className="hover:text-yellow-300">Ranking</Link>
                        </li>
                        <li className="mr-4 pl-4">
                            <Link href="/about" className="hover:text-yellow-300">My Profile</Link>
                        </li>
                                
                    </ul>
                </div>
                {/* login button */}
                <div>
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded shadow hover:text-yellow-300">
                        <div className="flex">
                            <Image className="h-4 w-4 mr-2 my-auto" src={PopcornIcon} alt="Popcorn Icon"/>
                            <Link href="/login">Login</Link>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
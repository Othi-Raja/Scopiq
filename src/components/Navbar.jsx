import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import './AboutUs.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header className="w-full bg-[#f6eee8] shadow-md px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    className="h-12 w-auto"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615"
                    alt="Yatra's Cooking Cave Logo"
                />
            </div>
            {/* Centered Menu */}
            <nav className="hidden md:flex flex-1 justify-center gap-4  font-semibold text-sm basetext">
                <a href="#home" className="text-decoration-none fw-bold basetext">HOME</a>
                <a href="#about" className=" text-decoration-none fw-bold basetext">ABOUT US</a>
                <a href="#services" className=" text-decoration-none fw-bold basetext" >SERVICES</a>
                <a href="#order" className="text-decoration-none fw-bold basetext">ORDER NOW</a>
                <a href="#contact" className=" text-decoration-none fw-bold  basetext">CONTACT US</a>
            </nav>
            {/* Language Toggle (Right) */}
            <div className="hidden md:flex  mx-4 font-medium text-md text-[#3d0a0a]">
                <span className="cursor-pointer hover:text-red-600">English</span>
                <span> | </span>
                <span className="cursor-pointer font-bold basetext">Tamil</span>
            </div>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-[#3d0a0a] focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#f6eee8] flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
                    <a href="#home" className="text-decoration-none fw-bold basetext">HOME</a>
                    <a href="#about" className=" text-decoration-none fw-bold basetext">ABOUT US</a>
                    <a href="#services" className=" text-decoration-none fw-bold basetext" >SERVICES</a>
                    <a href="#order" className="text-decoration-none fw-bold basetext">ORDER NOW</a>
                    <a href="#contact" className=" text-decoration-none fw-bold  basetext">CONTACT US</a>
                    <div className="flex space-x-2 font-medium text-sm text-[#3d0a0a] pt-3">
                        <span className="cursor-pointer hover:text-red-600">English</span>
                        <span>|</span>
                        <span className="cursor-pointer font-bold  basetext">Tamil</span>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Navbar;

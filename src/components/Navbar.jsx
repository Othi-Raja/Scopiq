import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import './about/AboutUs.css';
import { Link } from "react-router-dom";
import CartIcon from './CartIcon';
// ✅ Helper to set cookie
const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // days to ms
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};
// ✅ Helper to get cookie
const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
};
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTamil, setIsTamil] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuItems = [
        { text: "HOME", href: "/" },
        { text: "ABOUT US", href: "/about" },
        { text: "SERVICES", href: "/services" },
        // { text: "ORDER NOW", href: "/order" },
        { text: "CONTACT US", href: "/ContactUs" },
    ];
    // ✅ Load cookie on mount
    useEffect(() => {
        const tamilCookie = getCookie("isTamil");
        if (tamilCookie === "true") {
            setIsTamil(true);
        }
    }, []);
    // ✅ Language switch handler
    const handleLanguageSwitch = (lang) => {
        if (lang === "Tamil") {
            setIsTamil(true);
            setCookie("isTamil", true, 7); // save for 7 days
            window.location.reload();
        } else {
            setIsTamil(false);
            setCookie("isTamil", false, 7);
            window.location.reload();
        }
    };
    return (
        <header className="w-full bg-[#f6eee8] shadow-md px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    className="h-16 mx-4 w-auto"
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615"
                    alt="Yatra's Cooking Cave Logo"
                />
            </div>
            {/* Centered Menu (Desktop Only) */}
            <nav className="hidden md:flex flex-1 justify-center gap-4 font-semibold text-sm basetext">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.href}
                        className="text-decoration-none fw-bold basetext"
                    >
                        {item.text}
                    </Link>
                ))}
            </nav>
            {/* Language Toggle and Cart Icon (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4">
                <div className="font-medium text-md text-[#3d0a0a]">
                    <span
                        className={`cursor-pointer ${!isTamil ? "font-bold basetext" : "hover:text-red-600"}`}
                        onClick={() => handleLanguageSwitch("English")}
                    >
                        English
                    </span>
                    <span> | </span>
                    <span
                        className={`cursor-pointer ${isTamil ? "font-bold basetext" : "hover:text-red-600"}`}
                        onClick={() => handleLanguageSwitch("Tamil")}
                    >
                        Tamil
                    </span>
                </div>
                <CartIcon />
            </div>
            {/* Mobile Hamburger (Mobile Only) */}
            <IconButton
                className="md:hidden text-[#3d0a0a] mx-3"
                onClick={toggleMenu}
                edge="end"
                sx={{ display: { xs: "flex", md: "none" } }}
            >
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>
            {/* MUI Drawer (Mobile Menu) */}
            <Drawer anchor="right" open={isOpen} onClose={toggleMenu}>
                <div className="w-64 bg-[#f6eee8] h-full flex flex-col">
                    <div className="flex justify-end p-4">
                        <IconButton onClick={toggleMenu}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem
                                key={index}
                                component={Link}
                                to={item.href}
                                onClick={toggleMenu}
                            >
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ className: "fw-bold basetext" }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    {/* Mobile Cart Icon */}
                    <div className="flex justify-center p-4">
                        <CartIcon />
                    </div>
                    <Divider />
                    {/* Mobile Language Toggle */}
                    <div className="flex justify-center space-x-2 font-medium text-sm text-[#3d0a0a] p-4">
                        <span
                            className={`cursor-pointer ${!isTamil ? "font-bold basetext" : "hover:text-red-600"}`}
                            onClick={() => handleLanguageSwitch("English")}
                        >
                            English
                        </span>
                        <span>|</span>
                        <span
                            className={`cursor-pointer ${isTamil ? "font-bold basetext" : "hover:text-red-600"}`}
                            onClick={() => handleLanguageSwitch("Tamil")}
                        >
                            Tamil
                        </span>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};
export default Navbar;

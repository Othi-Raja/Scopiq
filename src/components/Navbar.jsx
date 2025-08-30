import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import './AboutUs.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const menuItems = [
        { text: "HOME", href: "#home" },
        { text: "ABOUT US", href: "#about" },
        { text: "SERVICES", href: "#services" },
        { text: "ORDER NOW", href: "#order" },
        { text: "CONTACT US", href: "#contact" },
    ];
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
            {/* Centered Menu (Desktop Only) */}
            <nav className="hidden md:flex flex-1 justify-center gap-4 font-semibold text-sm basetext">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.href} className="text-decoration-none fw-bold basetext">
                        {item.text}
                    </a>
                ))}
            </nav>
            {/* Language Toggle (Desktop Only) */}
            <div className="hidden md:flex mx-4 font-medium text-md text-[#3d0a0a]">
                <span className="cursor-pointer hover:text-red-600">English</span>
                <span> | </span>
                <span className="cursor-pointer font-bold basetext">Tamil</span>
            </div>
            {/* Mobile Hamburger (Mobile Only - Hidden on md and larger screens) */}
            <IconButton
                className="md:hidden text-[#3d0a0a] mx-3 "
                onClick={toggleMenu}
                edge="end"
                sx={{ display: { xs: 'flex', md: 'none' } }}
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
                                button
                                key={index}
                                component="a"
                                href={item.href}
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
                    <div className="flex justify-center space-x-2 font-medium text-sm text-[#3d0a0a] p-4">
                        <span className="cursor-pointer hover:text-red-600">English</span>
                        <span>|</span>
                        <span className="cursor-pointer font-bold basetext">Tamil</span>
                    </div>
                </div>
            </Drawer>
        </header>
    );
};
export default Navbar;
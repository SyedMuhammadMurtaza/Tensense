"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ height: 64 }}
            animate={{
                height: scrolled ? 96 : 64,
                backgroundColor: scrolled ? "red" : "white",
                position: scrolled ? "fixed" : "relative"
            }}
            transition={{ type: "spring", bounce: 0 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4">
                {/* Logo with scale animation */}
                <motion.h1
                    animate={{ scale: scrolled ? 1.2 : 1 }}
                    transition={{ type: "spring", bounce: 0 }}
                    className="text-xl font-bold"
                >
                    My Site
                </motion.h1>

                {/* Menu */}
                <nav className="hidden md:flex gap-6 font-medium relative">
                    <Link href="/" className="cursor-pointer hover:text-green-600">Home</Link>
                    <Link href="/about" className="cursor-pointer hover:text-green-600">About</Link>
                    <Link href="/contact" className="cursor-pointer hover:text-green-600">Contact</Link>

                    {/* Dropdown Parent */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button className="hover:text-green-400">
                            Services
                        </button>

                        {/* Dropdown menu */}
                        <AnimatePresence>
                            {open && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    // className= "absolute left-0 mt-2 w-[90vw] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                                    className="fixed p-8 top-23 left-1/2 w-[95vw] h-[25vw] -translate-x-1/2 bg-[#f6f5f2] rounded-lg shadow-lg overflow-hidden z-50 flex flex-row justify-around space-x-3"
                                    // 👇 keep open if mouse is inside
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    {/*First Div */}
                                    <div className="w-[50%] bg-yellow-400">

                                        <li className="border-b border-gray-700">
                                            <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-700 text-white">
                                                Web
                                            </Link>
                                        </li>
                                        <li className="border-b border-gray-700">
                                            <Link href="/services/mobile" className="block px-4 py-2 hover:bg-gray-700 text-white">
                                                Mobile
                                            </Link>
                                        </li>
                                    </div>

                                    {/*Second Div */}
                                    <div className="w-[50%] bg-blue-400">

                                        <li className="border-b border-gray-700">
                                            <Link href="/services/web" className="block px-4 py-2 hover:bg-gray-700 text-white">
                                                Web
                                            </Link>
                                        </li>
                                        <li className="border-b border-gray-700">
                                            <Link href="/services/mobile" className="block px-4 py-2 hover:bg-gray-700 text-white">
                                                Mobile
                                            </Link>
                                        </li>
                                    </div>
                                    
                                    {/* Third Div */}
                                    <div className="w-[50%] bg-red-400">

                                    </div>

                                    {/*Fourth Div */}
                                    <div className="w-[50%] bg-green-400">

                                    </div>

                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>
            </div>
        </motion.nav>
    );
}

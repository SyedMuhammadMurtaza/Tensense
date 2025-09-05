"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile off-canvas

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
        backgroundColor: scrolled ? "red" : "#ffffff00",
        position: scrolled ? "fixed" : "relative",
      }}
      transition={{ type: "spring", bounce: 0 }}
      className="fixed top-0 left-0 w-full bg-[#ffffff00] z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <motion.h1
          animate={{ scale: scrolled ? 1.2 : 1 }}
          transition={{ type: "spring", bounce: 0 }}
          className="text-xl font-bold"
        >
          My Site
        </motion.h1>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium relative">
          <Link href="/" className="cursor-pointer hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="cursor-pointer hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-green-600">
            Contact
          </Link>

          {/* Dropdown Parent */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-green-400">Services</button>

            {/* Dropdown menu */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <li className="border-b border-gray-700">
                    <Link
                      href="/services/web"
                      className="block px-4 py-2 hover:bg-gray-700 text-white"
                    >
                      Web
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile"
                      className="block px-4 py-2 hover:bg-gray-700 text-white"
                    >
                      Mobile
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 text-white p-6 z-50 md:hidden"
          >
            <button
              className="text-2xl mb-6"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            <ul className="space-y-4">
              <li>
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services/web" onClick={() => setMobileOpen(false)}>
                  Web Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile"
                  onClick={() => setMobileOpen(false)}
                >
                  Mobile Services
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

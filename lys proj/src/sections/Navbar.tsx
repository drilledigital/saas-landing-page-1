"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-4 lg:py-8 sticky top-0 z-50">
            <div className="container max-w-5xl">
                <div className="flex items-center justify-between border border-white/15 rounded-full px-4 md:px-6 py-2 gap-4 bg-neutral-950/70 backdrop-blur">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src={logoImage}
                            alt="Layers Logo"
                            className="h-9 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation - Only show on large screens */}
                    <nav className="hidden lg:flex justify-center gap-6 font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/70 hover:text-white transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side buttons */}
                    <div className="flex justify-end gap-4 items-center">
                        {/* Hamburger Menu - Mobile and Tablet */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu lg:hidden cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <line
                                x1="3"
                                y1="6"
                                x2="21"
                                y2="6"
                                className={twMerge(
                                    "origin-left transition",
                                    isOpen && "rotate-45 -translate-y-1"
                                )}
                            ></line>
                            <line
                                x1="3"
                                y1="12"
                                x2="21"
                                y2="12"
                                className={twMerge(
                                    "transition",
                                    isOpen && "opacity-0"
                                )}
                            ></line>
                            <line
                                x1="3"
                                y1="18"
                                x2="21"
                                y2="18"
                                className={twMerge(
                                    "origin-left transition",
                                    isOpen && "-rotate-45 translate-y-1"
                                )}
                            ></line>
                        </svg>
                        <Button
                            variant="secondary"
                            className="hidden lg:inline-flex items-center"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="primary"
                            className="hidden lg:inline-flex items-center"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="lg:hidden mt-4 container max-w-5xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="border border-white/15 rounded-[27px] px-6 py-6 bg-neutral-950/70 backdrop-blur">
                        <nav className="flex flex-col gap-4 font-medium items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/15">
                            <Button variant="secondary" className="w-full">
                                Log In
                            </Button>
                            <Button variant="primary" className="w-full">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </section>
    );
}

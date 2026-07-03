"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b rounded-b-2xl border-slate-200 dark:bg-slate-900/80 dark:backdrop-blur-xl dark:border-b dark:border-slate-800 shadow-md shadow-lime-100">

            <div className="py-1 px-6 flex justify-between items-center gap-4">

                {/* Right Side (Logo) */}

                <Link
                    href={"/"}
                    className="block"
                >
                    <div className="flex items-center gap-1">
                        <Image
                            className="w-18 h-18 rounded-3xl animate-logo-float cursor-pointer"
                            src={"/assets/StudyNook2.png"}
                            alt="Logo"
                            width={170}
                            height={170}
                        />

                        <Image
                            className="w-46 h-14 animate-text-scale cursor-pointer"
                            src={"/assets/fontTextLogo.png"}
                            alt="Text-Logo"
                            width={700}
                            height={700}
                        />
                    </div>
                </Link>


                {/* Center - Desktop Only */}

                <div className="hidden lg:block">
                    <ul className="md:flex items-center gap-6 text-lg font-semibold">

                        <li>
                            <Link
                                href="/"
                                className="hover:text-emerald-400 cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/all-rooms"
                                className="hover:text-emerald-400 cursor-pointer"
                            >
                                Rooms
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/add-room"
                                className="hover:text-emerald-400 cursor-pointer"
                            >
                                Add Room
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-listings"
                                className="hover:text-emerald-400 cursor-pointer"
                            >
                                My Listings
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-bookings"
                                className="hover:text-emerald-400 cursor-pointer"
                            >
                                My Bookings
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Desktop Right Side */}

                <div className="hidden lg:flex items-center gap-4">

                    <ThemeToggle />

                    <div className="flex items-center gap-2">

                        <Link
                            href="/signin"
                            className="btn btn-primary btn-float"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/signup"
                            className="btn btn-primary btn-float"
                        >
                            Sign Up
                        </Link>

                    </div>

                </div>



                {/* Mobile & Tablet Right Side */}

                <div className="flex lg:hidden items-center gap-2">

                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition dark:bg-teal-600 dark:text-slate-900"
                    >
                        {isOpen ? (
                            <HiOutlineX size={25} className='rounded-lg text-gray-700 hover:text-teal-600 transition duration-300 active:scale-95' />
                        ) : (
                            <HiOutlineMenu size={25} className='rounded-lg text-2xl text-gray-700 hover:text-teal-600 transition duration-300 active:scale-95' />
                        )}
                    </button>

                </div>

            </div>

            {/* Mobile & Tablet Menu */}

            {isOpen && (
                <div className="lg:hidden ">

                    <ul className="flex flex-col gap-5 px-6 py-6 text-lg font-semibold">

                        <li>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className='text-slate-900 font-medium rounded-md transition-all duration-300 hover:text-emerald-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-50 hover:shadow-md hover:shadow-emerald-100 active:scale-95 border border-transparent hover:border-emerald-200 hover:px-8 hover:py-1 dark:text-white dark:hover:text-emerald-600'
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/all-rooms"
                                onClick={() => setIsOpen(false)}
                                className='text-slate-900 font-medium rounded-md transition-all duration-300 hover:text-emerald-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-50 hover:shadow-md hover:shadow-emerald-100 active:scale-95 border border-transparent hover:border-emerald-200 hover:px-8 hover:py-1 dark:text-white dark:hover:text-emerald-600'
                            >
                                Rooms
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/add-room"
                                onClick={() => setIsOpen(false)}
                                className='text-slate-900 font-medium rounded-md transition-all duration-300 hover:text-emerald-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-50 hover:shadow-md hover:shadow-emerald-100 active:scale-95 border border-transparent hover:border-emerald-200 hover:px-8 hover:py-1 dark:text-white dark:hover:text-emerald-600'
                            >
                                Add Room
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-listings"
                                onClick={() => setIsOpen(false)}
                                className='text-slate-900 font-medium rounded-md transition-all duration-300 hover:text-emerald-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-50 hover:shadow-md hover:shadow-emerald-100 active:scale-95 border border-transparent hover:border-emerald-200 hover:px-8 hover:py-1 dark:text-white dark:hover:text-emerald-600'
                            >
                                My Listings
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-bookings"
                                onClick={() => setIsOpen(false)}
                                className='text-slate-900 font-medium rounded-md transition-all duration-300 hover:text-emerald-600 hover:-translate-y-1 hover:scale-105 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-50 hover:shadow-md hover:shadow-emerald-100 active:scale-95 border border-transparent hover:border-emerald-200 hover:px-8 hover:py-1 dark:text-white dark:hover:text-emerald-600'
                            >
                                My Bookings
                            </Link>
                        </li>

                        <div className="flex gap-3 pt-2 pb-2">

                            <Link
                                href="/signin"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary btn-float flex-1 text-center"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary btn-float flex-1 text-center"
                            >
                                Sign Up
                            </Link>

                        </div>

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Navbar;
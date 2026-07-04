"use client";

import { motion } from "framer-motion";
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaBookOpenReader, FaCalendarDays } from 'react-icons/fa6';
import { ImSearch } from 'react-icons/im';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className='container w-11/12 mx-auto flex flex-col items-center justify-center pt-6 pb-10'>
            <h2 className='font-bold text-4xl md:text-5xl text-emerald-600 text-center mt-4'>How It Works</h2>
            <p className='font-bold text-lg md:text-xl text-center text-slate-400 pt-4 pb-2'>Book your ideal study room in just three simple steps.</p>


            {/* Card Section */}

            <motion.div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >

                <motion.div
                    variants={cardVariants}
                    whileHover={{
                        y: -8,
                        scale: 1.03,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                        },
                    }}
                    className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 relative'
                >
                    <Chip color="success" className='absolute -top-4 rounded-full text-lg font-bold p-1'>01</Chip>
                    <div className='mt-4'>
                        <ImSearch
                            className='w-18 h-18 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-4 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo2.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></ImSearch>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-6 pb-4'>Browse Rooms</h2>
                    <p className='font-semibold text-gray-400 mb-2 text-justify px-2'>Explore available study rooms by filtering location, capacity, amenities, and hourly price to find the perfect space.</p>

                </motion.div>

                <motion.div
                    variants={cardVariants}
                    whileHover={{
                        y: -8,
                        scale: 1.03,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                        },
                    }}
                    className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 relative'
                >
                    <Chip color="success" className='absolute -top-4 rounded-full text-lg font-bold p-1'>02</Chip>
                    <div className='mt-4'>
                        <FaCalendarDays
                            className='w-18 h-18 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-4 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo3.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></FaCalendarDays>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-6 pb-4'>Choose a Time</h2>
                    <p className='font-semibold text-gray-400 mb-2 text-justify px-2'>Select your preferred date and time slot. Our system automatically prevents double bookings.</p>

                </motion.div>

                <motion.div
                    variants={cardVariants}
                    whileHover={{
                        y: -8,
                        scale: 1.03,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                        },
                    }}
                    className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 relative'
                >
                    <Chip color="success" className='absolute -top-4 rounded-full text-lg font-bold p-1'>03</Chip>
                    <div className='mt-4'>
                        <FaBookOpenReader
                            className='w-18 h-18 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-4 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo4.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></FaBookOpenReader>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-6 pb-4'>Study with Confidence</h2>
                    <p className='font-semibold text-gray-400 mb-2 text-justify px-2'>Confirm your booking, arrive on time, and enjoy a quiet, distraction-free study environment.</p>

                </motion.div>

            </motion.div>

            {/* All room linkage Button */}

            <div className="mt-10 pt-6 mb-6">

                <Link
                    href={"/all-rooms"}
                    className="block"
                >

                    <Button
                        size="lg"
                        className="flex items-center gap-1 w-full btn btn-primary-special btn-float">
                        <h2 className="text-xl">START BROWSING</h2>
                        <FaArrowRight className="w-5 h-5 mt-1"></FaArrowRight>
                    </Button>

                </Link>

            </div>

        </div>
    );
};

export default HowItWorks;
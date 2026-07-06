"use client";

import { Chip } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BannerSlide({ slide }) {
    return (
        <div
            className="relative h-full bg-cover bg-center rounded-3xl"
            style={{
                backgroundImage: `url(${slide.image})`,
            }}
        >
            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

            {/* Content */}

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

                <div className="max-w-2xl text-white">

                    <Chip color="success" className="text-emerald-600 hidden md:inline-flex items-center text-lg font-semibold px-4 py-1.5 mb-6 animate__animated animate__fadeInUp animate__delay-1s">✨ Smart Study Room Booking</Chip>

                    <h1 className="animate__animated animate__fadeInDown text-4xl font-bold md:text-6xl">
                        {slide.title}
                    </h1>

                    <p className="animate__animated animate__fadeInUp animate__delay-1s mt-6 text-lg text-gray-200 md:text-xl">
                        {slide.subtitle}
                    </p>

                    <div className="mt-8 mb-4 flex flex-col md:flex-row items-center gap-5">
                        <Link
                            href="/all-rooms"
                            className="rounded-xl bg-emerald-600 flex items-center gap-2 px-8 py-4 font-bold transition hover:bg-emerald-700 animate__animated animate__zoomIn animate__delay-2s"
                        >
                            {slide.btn}
                            <FaArrowRightLong className="w-5 h-5 pt-0.5"></FaArrowRightLong>
                        </Link>
                        <Link
                            href="/"
                            className="btn btn-secondary font-semibold transition hover:bg-emerald-700 animate__animated animate__zoomIn animate__delay-2s"
                        >
                            {slide.btn2}
                        </Link>
                    </div>

                    {/* Extra Card */}

                    <div className="hidden md:inline-flex gap-6 mt-8 mb-4 items-center">

                        <div className="flex flex-col items-center gap-2 rounded-2xl p-2 shadow-gray-200 shadow-md animate__animated animate__fadeInUp animate__delay-1s">
                            <p>📚</p>
                            <h2 className="font-bold text-2xl">8K+</h2>
                            <p className="pb-2">Books Available</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 rounded-2xl p-2 shadow-gray-200 shadow-md animate__animated animate__fadeInUp animate__delay-1s">
                            <p>🏛️</p>
                            <h2 className="font-bold text-2xl">250+</h2>
                            <p className="pb-2">Study Rooms</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 rounded-2xl p-2 shadow-gray-200 shadow-md animate__animated animate__fadeInUp animate__delay-1s">
                            <p>👨‍🎓</p>
                            <h2 className="font-bold text-2xl">15K+</h2>
                            <p className="pb-2">Happy Students</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
import Image from 'next/image';
import React from 'react';

const WhyStudyNook = () => {
    return (
        <div className='container w-11/12 mx-auto pt-6 pb-8'>
            <h2 className='font-bold text-4xl md:text-5xl text-emerald-600 text-center mt-4'>Why StudyNook?</h2>
            <p className='font-bold text-lg md:text-xl text-center text-slate-400 pt-4 pb-2'>Your Perfect Study Space Starts Here.</p>
            <p className='font-semibold text-lg md:text-xl text-center text-gray-400 pb-4'>Built for modern students who value convenience, productivity, and a seamless study experience.</p>
            <p className='text-center text-slate-300'>StudyNook makes finding and booking study rooms simple, fast, and reliable. With real-time availability, secure booking, and an intuitive user experience, students can focus on what truly matters—learning and achieving their academic goals.</p>

            {/* Card Section */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-6'>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo2.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Easy Booking</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Reserve your preferred study room in seconds with a simple, hassle-free booking process.</p>

                </div>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo3.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Real-Time Availability</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Check live room availability and book instantly without worrying about scheduling conflicts.</p>

                </div>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo4.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Perfect Study Environment</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Enjoy quiet, comfortable, and distraction-free spaces designed to improve focus and productivity.</p>

                </div>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo5.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Secure Authentication</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Your personal information and bookings are protected with secure login and reliable authentication.</p>

                </div>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo6.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Smart Booking Dashboard</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Track upcoming reservations, booking history, and room details from one organized dashboard.</p>

                </div>

                <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400'>
                    <div>
                        <Image
                            className='w-20 h-20 rounded-xl bg-emerald-50 dark:bg-emerald-800 p-2 shadow-md mt-2 animate-logo-float'
                            src={"/assets/cardLogo7.png"}
                            alt='Logo-1'
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <h2 className='text-3xl text-emerald-900 dark:text-white font-bold pt-4 pb-2'>Solo & Group Study</h2>
                    <p className='font-semibold text-gray-400 mb-2'>Choose private rooms for individual focus or collaborative spaces for team discussions and projects.</p>

                </div>

            </div>


        </div>
    );
};

export default WhyStudyNook;
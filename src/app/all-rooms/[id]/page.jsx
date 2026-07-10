import BookingModalPage from '@/components/BookingModal';
import { DeleteAlertDialogue } from '@/components/DeleteAlertDialogue';
import { EditModal } from '@/components/EditModal';
import { Avatar, Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { LuHouse } from 'react-icons/lu';
import { MdDeleteForever, MdMeetingRoom, MdModeEditOutline, MdMoreTime } from 'react-icons/md';
import { RxPeople } from 'react-icons/rx';

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/room/${id}`)
    const room = await res.json()

    const {
        roomName,
        description,
        floor,
        capacity,
        price,
        duration,
        imageUrl,
        amenities
    } = room || {};


    return (
        <div className='container w-11/12 mx-auto py-6 mt-4 mb-2'>

            <Link
                href={'/all-rooms'}
                className='block'>
                <div className='flex items-center gap-1 hover:text-emerald-600 cursor-pointer'>
                    <IoArrowBack className='text-lg mt-0.5'></IoArrowBack>
                    <h2 className='text-lg font-semibold'>Go Back</h2>
                </div>
            </Link>

            {/* Main Part */}

            <div className='mt-8 mb-10 flex flex-col md:flex-row justify-between items-start gap-8'>

                {/* left side */}

                <div className='flex-2/3'>
                    <Image
                        className='w-full h-120 bg-gray-100 object-fill rounded-4xl border-4 border-slate-400 dark:border-slate-200 shadow-md shadow-emerald-400'
                        src={imageUrl}
                        alt={roomName}
                        width={800}
                        height={800}
                    ></Image>

                    <div className='flex items-center justify-between gap-4 pt-8 pb-2'>
                        <h2 className='text-3xl md:text-4xl font-bold'>{roomName}</h2>
                        <Chip color="success" size='lg' className='font-bold'>0 Bookings</Chip>
                    </div>
                    <p className='text-lg text-gray-600 pt-2 text-justify'>{description}</p>

                </div>

                {/* right side */}

                <div className="flex-1/3">

                    <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400 px-6'>

                        <div className='flex justify-between items-center gap-4'>
                            <h2 className='text-2xl md:text-3xl text-emerald-600 font-bold'>${price}</h2>
                            <p className='font-semibold'>Per Hour</p>
                        </div>

                        <div className='flex items-center gap-1 pt-4 font-bold text-slate-600 dark:text-slate-300'>
                            <LuHouse></LuHouse>
                            <p>{floor}</p>
                        </div>

                        <div className='flex items-center gap-1 font-bold text-slate-600 dark:text-slate-300 pt-3'>
                            <RxPeople></RxPeople>
                            <p>Up to {capacity} Peoples</p>
                        </div>

                        <div className='flex items-center font-bold text-slate-600 dark:text-slate-300 gap-1 pt-3'>
                            <MdMoreTime></MdMoreTime>
                            <p>{duration}</p>
                        </div>

                        {/* Booking Button */}

                        <BookingModalPage room={room}></BookingModalPage>

                        {/* More Two Buttons */}

                        <div className='flex items-center justify-between mx-2 gap-4 mt-4 mb-2'>

                            {/* Edit Button */}

                            <EditModal room={room}></EditModal>

                            {/* Delete Button */}

                            <DeleteAlertDialogue room={room}></DeleteAlertDialogue>

                        </div>

                    </div>

                    <div className='mt-10 bg-[#FFFFFF] dark:bg-[#1E293B] p-4 rounded-2xl shadow-lg shadow-gray-400 px-6'>
                        <p className='text-sm font-bold text-gray-400 dark:text-gray-600'>LISTED BY</p>
                        <div className='flex items-center gap-2 mt-3 mb-2'>
                            <Avatar>
                                <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar>

                            <div>
                                <h2 className='font-bold text-xl text-emerald-900 dark:text-emerald-600'>Guest Scholar</h2>
                                <p className='text-gray-600 dark:text-gray-400 text-sm'>guest.google@studynook.demo</p>
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default RoomDetailsPage;
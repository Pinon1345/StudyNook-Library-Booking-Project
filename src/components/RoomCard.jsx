import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LuHouse } from 'react-icons/lu';
import { MdMoreTime } from 'react-icons/md';
import { RxPeople } from 'react-icons/rx';
import { TiArrowRightOutline } from 'react-icons/ti';

const RoomCardPage = ({ room }) => {

    const {
        _id,
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
        <div className='bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-lg hover:shadow-slate-300 hover:border-emerald-200'>

            {/* Image */}

            <div className='mb-2'>
                <Image
                    className='w-full h-64 bg-gray-100 object-cover rounded-2xl shadow-md shadow-slate-500'
                    src={imageUrl}
                    alt={roomName}
                    width={800}
                    height={800}
                ></Image>
            </div>

            {/* Others content */}

            <div className='py-2 px-3'>

                <div className='flex items-center justify-between gap-4 pt-2 pb-3'>
                    <h2 className='text-2xl font-bold'>{roomName}</h2>
                    <Chip color="success" size='lg' className='font-bold'>${price}/hr</Chip>
                </div>

                <p className='line-clamp-2 text-justify font-semibold text-gray-600 dark:text-gray-300'>{description}</p>

                <div className='pt-4 flex items-center gap-4 justify-items-start'>

                    <div className='flex items-center gap-1 font-semibold rounded-full px-3 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-800 dark:text-white'>
                        <LuHouse></LuHouse>
                        <p>{floor}</p>
                    </div>
                    <div className='flex items-center gap-1 font-semibold rounded-full px-4 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-800 dark:text-white'>
                        <RxPeople></RxPeople>
                        <p>{capacity}</p>
                    </div>
                    <div className='flex items-center gap-1 font-semibold rounded-full px-4 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-800 dark:text-white'>
                        <MdMoreTime></MdMoreTime>
                        <p>{duration}</p>
                    </div>

                </div>


                {/* Amenities */}

                <div className="pt-6 pb-4 flex flex-wrap items-start gap-2 min-h-18.5">
                    {room.amenities?.slice(0, 4).map((amenity, index) => (
                        <Chip
                            key={index}
                            className="border-emerald-200"
                            radius="full"
                        >
                            {amenity}
                        </Chip>
                    ))}

                    {room.amenities?.length > 4 && (
                        <Chip
                            className="bg-emerald-100 text-emerald-700"
                            radius="full"
                        >
                            +{room.amenities.length - 4} more
                        </Chip>
                    )}
                </div>

                {/* Button */}

                <Link
                    href={`/all-rooms/${_id}`}
                    className='block mt-2'
                >
                    <Button
                        className="btn btn-secondary btn-float w-full"
                    >
                        <h2>View Details</h2>
                        <TiArrowRightOutline className='w-5 h-5'></TiArrowRightOutline>
                    </Button>
                </Link>


            </div>

        </div>
    );
};

export default RoomCardPage;
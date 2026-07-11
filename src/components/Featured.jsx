import React from 'react';
import RoomCardPage from './RoomCard';

const FeaturedRoomCard = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const rooms = await res.json()
    console.log(rooms)

    return (
        <div className='container w-11/12 mx-auto pt-10 pb-6'>
            <div className='overflow-hidden text-center pt-4 pb-2'>
                <h2 className='text-emerald-600 text-3xl md:text-4xl font-bold text-center animate-text-scale'>Available Study Rooms</h2>
            </div>

            {/* Rooms */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 mt-12'>
                {
                    rooms.map(room => <RoomCardPage
                        key={room._id}
                        room={room}
                    ></RoomCardPage>)
                }
            </div>

        </div>
    );
};

export default FeaturedRoomCard;
import RoomCardPage from '@/components/RoomCard';
import React from 'react';

const AllRoomsPage = async () => {
    const res = await fetch("http://localhost:5000/room")
    const rooms = await res.json()

    console.log(rooms)

    return (
        <div className='container w-11/12 mx-auto pt-6 pb-8'>
            <h2 className='font-bold text-3xl text-center text-emerald-600 mt-4 mb-2 pb-2'>ALL STUDY ROOMS</h2>


            {/* fetching all study books */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-7 pb-6 mt-4 mb-6'>

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

export default AllRoomsPage;
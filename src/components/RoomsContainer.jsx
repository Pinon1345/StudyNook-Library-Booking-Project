"use client";

import { useState } from "react";
import SearchRoomPage from "./SearchRoom";
import FilterAmenitiesPage from "./FilterAmenities";
import RoomCardPage from "./RoomCard";
import { SiMyshows } from "react-icons/si";
import { Chip } from "@heroui/react";
import { PiSmileySadBold } from "react-icons/pi";

const RoomsContainer = ({ rooms }) => {
    const [search, setSearch] = useState("");
    const [selectedAmenity, setSelectedAmenity] = useState("All");

    // Get all amenities

    const amenities = [
        "All",
        ...new Set(
            rooms.flatMap((room) => room.amenities || [])
        ),
    ];

    const filteredRooms = rooms.filter((room) => {

        // Search by room name, description and floor

        const matchesSearch =
            room.roomName.toLowerCase().includes(search.toLowerCase()) ||
            room.description.toLowerCase().includes(search.toLowerCase()) ||
            room.floor.toLowerCase().includes(search.toLowerCase());

        // Filter by amenity

        const matchesAmenity =
            selectedAmenity === "All" ||
            room.amenities?.includes(selectedAmenity);

        return matchesSearch && matchesAmenity;
    });

    return (
        <>
            {/* Search + Filter */}

            <div className="flex flex-col md:flex-row gap-4 mt-6 mb-8">

                {/* Search portion */}

                <div className="flex-1">
                    <SearchRoomPage
                        search={search}
                        setSearch={setSearch}
                    />
                </div>

                {/* Filter portion */}

                <div className="w-full md:w-72">
                    <FilterAmenitiesPage
                        amenities={amenities}
                        selectedAmenity={selectedAmenity}
                        setSelectedAmenity={setSelectedAmenity}
                    />
                </div>

            </div>

            {/* Total Rooms */}

            <div className="mb-8 flex flex-row items-center gap-2">
                <Chip size="lg" className="p-2 rounded-full mt-1 animate-logo-float" color="success"><SiMyshows className="w-4 h-4"></SiMyshows></Chip>

                <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
                    Showing <span className="text-2xl text-emerald-800 dark:text-emerald-400 font-bold">{filteredRooms.length}</span> rooms of <span className="text-xl font-bold text-gray-500 dark:text-gray-400">{rooms.length}...</span>
                </p>
            </div>


            {/* Room Cards */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-2">

                {filteredRooms.length > 0 ? (

                    filteredRooms.map((room) => (
                        <RoomCardPage
                            key={room._id}
                            room={room}
                        />
                    ))

                ) : (

                    <div className="col-span-full text-center py-10 bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 mt-6 mb-4">
                        <PiSmileySadBold className="text-emerald-600 dark:text-emerald-500 w-12 h-12 mb-2"></PiSmileySadBold>
                        <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                            No Rooms Found !!!
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-500">
                            Try another search or select a different amenity.
                        </p>
                    </div>

                )}

            </div>
        </>
    );
};

export default RoomsContainer;
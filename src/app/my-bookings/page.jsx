"use client";

import { CancelBookingDialogue } from "@/components/CancelBookingDialogue";
import { authClient } from "@/lib/auth-client";
import { Button, Table } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PiSmileySadBold } from "react-icons/pi";

const MyBookingsPage = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        if (!user?.id) return;

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`)
            .then(res => res.json())
            .then(data => setBookings(data));

    }, [user]);



    // JWT protected in booking cancel 


    const handleCancelBooking = async (bookingId) => {

        const { data: tokenData } = await authClient.token()

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}/cancel`,
            {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${tokenData?.token}`
                }
            }
        );

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.message);
            return;
        }

        toast.success(data.message);

        setBookings((prevBookings) =>
            prevBookings.map((booking) =>
                booking._id === bookingId
                    ? { ...booking, status: "cancelled" }
                    : booking
            )
        );

    };



    return (
        <div className="container w-11/12 mx-auto py-8">

            <div className='overflow-hidden text-center pt-4 pb-2'>
                <h2 className='text-emerald-600 dark:text-emerald-400 text-3xl md:text-4xl font-bold text-center inline-block animate-text-scale'>My Bookings</h2>
            </div>

            <p className="py-2">Total Bookings: <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">{bookings.length}</span></p>

            {/* Booking table */}

            {
                bookings.length === 0 ? (

                    <div className="col-span-full text-center py-10 bg-[#FFFFFF] dark:bg-[#1E293B] p-4 flex flex-col items-center justify-center rounded-2xl shadow-lg shadow-gray-400 mt-6 mb-4">
                        <PiSmileySadBold className="text-emerald-600 dark:text-emerald-500 w-12 h-12 mb-2"></PiSmileySadBold>
                        <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                            You Have No Bookings Yet !!!
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-500">
                            Please go to <span className="font-semibold">Rooms Page</span> and select any room for booking.
                        </p>
                    </div>

                ) : (

                    <div className="w-full mt-6 mb-4 overflow-x-auto rounded-xl border border-gray-200 dark:border-emerald-800 shadow-md shadow-emerald-600">
                        <Table>
                            <Table.ScrollContainer>
                                <Table.Content aria-label="Bookings" className="w-full min-w-150 table-auto">

                                    <Table.Header>

                                        <Table.Column isRowHeader className="text-left p-4 font-bold text-lg">Room Name</Table.Column>
                                        <Table.Column className="text-left p-4 font-bold text-lg">Date</Table.Column>
                                        <Table.Column className="text-left p-4 font-bold text-lg">Time</Table.Column>
                                        <Table.Column className="text-left p-4 font-bold text-lg">Cost</Table.Column>
                                        <Table.Column className="text-left p-4 font-bold text-lg">Status</Table.Column>

                                        <Table.Column className="text-left p-4 font-bold text-lg">
                                            Action
                                        </Table.Column>

                                    </Table.Header>

                                    <Table.Body>
                                        {bookings.map((booking) => (
                                            <Table.Row key={booking._id} className="border-t border-gray-200 hover:bg-gray-100 transition-colors">

                                                {/* Room */}

                                                <Table.Cell className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <Image
                                                            src={booking.roomImage}
                                                            alt={booking.roomName}
                                                            width={60}
                                                            height={60}
                                                            className="rounded-lg object-cover shrink-0"
                                                        />
                                                        <h2 className="font-bold text-sm md:text-base line-clamp-1">
                                                            {booking.roomName}
                                                        </h2>
                                                    </div>
                                                </Table.Cell>

                                                {/* Date */}

                                                <Table.Cell className="p-4 text-sm whitespace-nowrap">
                                                    {new Date(booking.date).toLocaleDateString()}
                                                </Table.Cell>

                                                {/* Time */}

                                                <Table.Cell className="p-4 text-sm whitespace-nowrap">
                                                    {booking.startTime} - {booking.endTime}
                                                </Table.Cell>

                                                {/* Cost */}

                                                <Table.Cell className="p-4 text-sm font-medium whitespace-nowrap">
                                                    ${booking.totalCost}
                                                </Table.Cell>

                                                {/* Status */}

                                                <Table.Cell className="p-4">
                                                    <span
                                                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${booking.status === "confirmed"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                            }`}
                                                    >
                                                        {booking.status}
                                                    </span>
                                                </Table.Cell>

                                                {/* Action */}

                                                <Table.Cell className="p-4">

                                                    {
                                                        booking.status === "confirmed" &&

                                                        new Date(booking.date) >= new Date(new Date().setHours(0, 0, 0, 0)) && (

                                                            <CancelBookingDialogue
                                                                bookingId={booking._id}
                                                                onCancel={handleCancelBooking}
                                                            ></CancelBookingDialogue>

                                                        )
                                                    }

                                                </Table.Cell>

                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table.Content>
                            </Table.ScrollContainer>
                        </Table>
                    </div>

                )
            }

        </div>
    );
};

export default MyBookingsPage;
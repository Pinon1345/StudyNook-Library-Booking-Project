"use client";

import { authClient } from '@/lib/auth-client';
import {
    Button,
    DateField,
    Description,
    FieldError,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField,
} from '@heroui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { FaCalendarWeek } from 'react-icons/fa';
import { LuAlarmClock } from 'react-icons/lu';
import { MdMeetingRoom } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';


// Time slot for dynamic with cost

const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
];


const BookingModalPage = ({ room }) => {

    const { _id, roomName, price, imageUrl } = room


    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    // console.log(user);


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // const bookingData = Object.fromEntries(formData.entries());

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,

            roomId: _id,
            roomName: roomName,
            roomImage: imageUrl,

            date: new Date(date),

            startTime,
            endTime,


        }

        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })


        const data = await res.json()

        if (!res.ok) {
            toast.error(data.message);
            return;
        }

        toast.success(data.message);

    }


    const [message, setMessage] = useState("");

    // Date

    const [date, setDate] = useState(null)
    // console.log(new Date(date));

    // Time

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    // console.log({ startTime, endTime })


    // hourly rate is fixed = $5;

    const hourlyRate = 5;

    const startHour = startTime ? Number(startTime.split(":")[0]) : 0;

    const endHour = endTime ? Number(endTime.split(":")[0]) : 0;

    const duration = endHour - startHour;

    // Calculate total cost

    const totalCost = duration > 0 ? duration * hourlyRate : 0;

    return (
        <Modal>

            <Button className="flex items-center gap-1 btn btn-primary btn-float w-full mt-6 mb-2">
                <MdMeetingRoom></MdMeetingRoom>
                <h2>BOOK NOW</h2>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BsBookmarkCheckFill className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className='text-xl font-bold'>Book <span className='text-emerald-600 dark:text-emerald-400'>{roomName}</span></Modal.Heading>
                            <p className='text-slate-600 dark:text-slate-400'>Pick a date and time slot, <span className='font-semibold'>Bookings run on the hour.</span></p>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    onSubmit={onSubmit}
                                    className="flex flex-col gap-4">

                                    {/* Date */}

                                    <DateField onChange={setDate} className="w-full" name="date" isRequired>
                                        <Label className='text-lg'>Date</Label>
                                        <DateField.Group variant="secondary">
                                            <FaCalendarWeek className='ml-2 text-gray-400'></FaCalendarWeek>
                                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                            <FieldError></FieldError>
                                        </DateField.Group>
                                    </DateField>

                                    {/* Time */}

                                    <div className="flex flex-col md:flex-row gap-5">

                                        {/* Start Time */}

                                        <div className="w-full">
                                            <Label className="text-lg">Start Time</Label>

                                            <select
                                                className="w-full mt-2 rounded-xl border p-3 dark:bg-slate-800"
                                                value={startTime}
                                                onChange={(e) => setStartTime(e.target.value)}
                                                required
                                            >
                                                <option value="">Select Start Time</option>

                                                {timeSlots.map((time) => (
                                                    <option key={time} value={time}>
                                                        {time}
                                                    </option>
                                                ))}

                                                <option value="08:00">08:00</option>
                                                <option value="09:00">09:00</option>
                                                <option value="10:00">10:00</option>
                                                <option value="11:00">11:00</option>
                                                <option value="12:00">12:00</option>
                                                <option value="13:00">13:00</option>
                                                <option value="14:00">14:00</option>
                                                <option value="15:00">15:00</option>
                                                <option value="16:00">16:00</option>
                                                <option value="17:00">17:00</option>
                                                <option value="18:00">18:00</option>
                                                <option value="19:00">19:00</option>
                                                <option value="20:00">20:00</option>
                                            </select>
                                        </div>

                                        {/* End Time */}

                                        <div className="w-full">
                                            <Label className="text-lg">End Time</Label>

                                            <select
                                                className="w-full mt-2 rounded-xl border p-3 dark:bg-slate-800"
                                                value={endTime}
                                                onChange={(e) => setEndTime(e.target.value)}
                                                required
                                            >
                                                <option value="">Select End Time</option>

                                                {timeSlots
                                                    .filter((time) => time > startTime)
                                                    .map((time) => (
                                                        <option key={time} value={time}>
                                                            {time}
                                                        </option>
                                                    ))}

                                                <option value="08:00">08:00</option>
                                                <option value="09:00">09:00</option>
                                                <option value="10:00">10:00</option>
                                                <option value="11:00">11:00</option>
                                                <option value="12:00">12:00</option>
                                                <option value="13:00">13:00</option>
                                                <option value="14:00">14:00</option>
                                                <option value="15:00">15:00</option>
                                                <option value="16:00">16:00</option>
                                                <option value="17:00">17:00</option>
                                                <option value="18:00">18:00</option>
                                                <option value="19:00">19:00</option>
                                                <option value="20:00">20:00</option>
                                            </select>
                                        </div>

                                    </div>

                                    {/* Description */}

                                    <div className="md:col-span-2">
                                        <TextField name="description" variant="secondary" className="relative">
                                            <Label className='text-lg'>Special Note (optional)</Label>
                                            <TextArea
                                                placeholder="Any setup needed?"
                                                className="rounded-2xl mt-1"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />

                                            {message === "" && <TbFileDescription className='absolute top-12 right-4 size-6 animate-logo-float text-gray-600'></TbFileDescription>}

                                        </TextField>
                                    </div>

                                    {/* Price */}

                                    <div className='bg-[#F8FAFC] dark:bg-[#1E293B] shadow-md shadow-gray-600 dark:shadow-gray-400 px-6 py-2 rounded-xl flex justify-between mt-4 mb-2 gap-4 items-center'>
                                        <h2 className='text-lg font-semibold'>Total Cost</h2>
                                        <h2 className='text-2xl font-bold text-emerald-600 dark:text-emerald-400'>${totalCost}</h2>
                                    </div>

                                    {/* Booking Button */}

                                    <Modal.Footer className=' mt-3'>
                                        <Button
                                            type='submit'
                                            slot="close"
                                            className="btn btn-primary btn-float">Confirm Booking</Button>
                                    </Modal.Footer>

                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingModalPage;
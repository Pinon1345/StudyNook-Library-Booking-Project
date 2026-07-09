"use client";

import { Button, DateField, Description, FieldError, Input, Label, Modal, Surface, TextArea, TextField, TimeField } from '@heroui/react';
import { useState } from 'react';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { FaCalendarWeek } from 'react-icons/fa';
import { LuAlarmClock } from 'react-icons/lu';
import { MdMeetingRoom } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';

const BookingModalPage = () => {

    const [message, setMessage] = useState("");

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
                            <Modal.Heading className='text-xl font-bold'>Book <span className='text-emerald-600 dark:text-emerald-400'>Brainstorm Studio</span></Modal.Heading>
                            <p className='text-slate-600 dark:text-slate-400'>Pick a date and time slot, <span className='font-semibold'>Bookings run on the hour.</span></p>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">

                                    {/* Date */}

                                    <DateField className="w-full" name="date" isRequired>
                                        <Label className='text-lg'>Date</Label>
                                        <DateField.Group variant="secondary">
                                            <FaCalendarWeek className='ml-2 text-gray-400'></FaCalendarWeek>
                                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                            <FieldError></FieldError>
                                        </DateField.Group>
                                    </DateField>

                                    {/* Time */}

                                    <div className="flex flex-col md:flex-row gap-5">

                                        <TimeField className="w-full" name="time" isRequired>
                                            <Label className='text-lg'>Start time</Label>
                                            <TimeField.Group variant='secondary'>
                                                <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                                <LuAlarmClock className='mr-2 text-gray-400'></LuAlarmClock>
                                                <FieldError></FieldError>
                                            </TimeField.Group>
                                            <Description className='pt-1'>Enter the start time</Description>
                                        </TimeField>

                                        <TimeField className="w-full" name="end-time" isRequired>
                                            <Label className='text-lg'>End time</Label>
                                            <TimeField.Group variant='secondary'>
                                                <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                                <LuAlarmClock className='mr-2 text-gray-400'></LuAlarmClock>
                                                <FieldError></FieldError>
                                            </TimeField.Group>
                                            <Description className='pt-1'>Enter the end time</Description>
                                        </TimeField>

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
                                        <h2 className='text-2xl font-bold text-emerald-600 dark:text-emerald-400'>$10</h2>
                                    </div>

                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer className=' mb-2'>
                            <Button slot="close" className="btn btn-primary btn-float">Confirm Booking</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingModalPage;
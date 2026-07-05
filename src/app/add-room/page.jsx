"use client";

import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Checkbox, CheckboxGroup } from '@heroui/react';

import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

const AddRoomPage = () => {

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const amenities = [
        "Wi-Fi",
        "Air Conditioning",
        "Projector",
        "Whiteboard",
        "Power Outlets",
        "Printing",
        "Coffee",
        "Locker",
        "Quiet Zone",
    ];

    const toggleAmenity = (item) => {
        if (selectedAmenities.includes(item)) {
            setSelectedAmenities(
                selectedAmenities.filter((a) => a !== item)
            );
        } else {
            setSelectedAmenities([...selectedAmenities, item]);
        }
    };

    return (
        <div className='p-5 max-w-5xl mx-auto'>
            <h2 className='font-bold text-3xl text-center text-emerald-600 mt-4 mb-2 pb-2'>ADD ROOM FORM</h2>

            <Card className='mt-8 mb-10 shadow-md dark:border-2 dark:border-slate-600 dark:shadow-md dark:shadow-slate-500'>
                <form
                    className="p-10 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Room Name */}

                        <div className="md:col-span-2">
                            <TextField name="roomName" isRequired>
                                <Label>Room Name</Label>
                                <Input placeholder="Atrium Reading Nook" className="rounded-2xl mt-1 dark:bg-slate-800" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}

                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="e.g., A quiet and comfortable study room..."
                                    className="rounded-3xl mt-1 dark:bg-slate-800"
                                />
                                <FieldError />
                            </TextField>
                        </div>


                        {/* Floor */}

                        <div>
                            <Select
                                name="floor"
                                isRequired
                                className="w-full"
                                placeholder="Select Floor"
                            >
                                <Label>Floor</Label>
                                <Select.Trigger className="rounded-2xl mt-1 dark:bg-slate-800">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="1st-Floor" textValue="1st-Floor">
                                            1st Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="2nd-Floor" textValue="2nd-Floor">
                                            2nd Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="3rd-Floor" textValue="3rd-Floor">
                                            3rd Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="4th-Floor" textValue="4th-Floor">
                                            4th Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="5th-Floor" textValue="5th-Floor">
                                            5th Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="6th-Floor" textValue="6th-Floor">
                                            6th Floor
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Capacity */}

                        <TextField name="capacity" type="number" isRequired>
                            <Label>Capacity</Label>
                            <Input
                                type="number"
                                placeholder="4"
                                className="rounded-2xl mt-1 dark:bg-slate-800"
                            />
                            <FieldError />
                        </TextField>

                        {/* Price */}

                        <TextField name="price" type="number" isRequired>
                            <Label>Hourly Rate (USD)</Label>
                            <Input
                                type="number"
                                placeholder="10"
                                className="rounded-2xl mt-1 dark:bg-slate-800"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}

                        <TextField name="duration" isRequired>
                            <Label>Duration</Label>
                            <Input
                                placeholder="3 Hours"
                                className="rounded-2xl mt-1 dark:bg-slate-800"
                            />
                            <FieldError />
                        </TextField>


                        {/* Image URL - Removed preview */}

                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/atrium-reading-nook.jpg"
                                    className="rounded-2xl mt-1 dark:bg-slate-800"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Amenities */}

                        <div className="md:col-span-2 pb-4">
                            <TextField name='amenities' isRequired>

                                <Label className="mb-4 block font-semibold text-lg">
                                    Amenities
                                </Label>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {amenities.map((item) => (
                                        <label
                                            key={item}
                                            className="flex items-center gap-3 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedAmenities.includes(item)}
                                                onChange={() => toggleAmenity(item)}
                                                className="hidden"
                                            />

                                            <div
                                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200    ${selectedAmenities.includes(item)
                                                    ? "bg-emerald-600 border-emerald-600"
                                                    : "border-gray-400 dark:border-gray-500"
                                                    }`}
                                            >
                                                {selectedAmenities.includes(item) && (
                                                    <span className="text-white text-xs font-bold"><GiCheckMark></GiCheckMark></span>
                                                )}
                                            </div>

                                            <span className="text-sm">{item}</span>
                                        </label>
                                    ))}
                                </div>

                            </TextField>

                        </div>


                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        // isLoading={isPending}
                        className="w-full btn-primary-special mt-4"
                    >
                        <h2 className='font-bold text-lg pt-1'>Add Library Room</h2>
                        {/* {isPending ? "Adding Room..." : "Add Library Room"} */}
                    </Button>

                </form>
            </Card>

        </div>
    );
};

export default AddRoomPage;
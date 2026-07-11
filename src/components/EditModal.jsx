"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import toast from "react-hot-toast";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { CiSaveUp1 } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineSave } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";

export function EditModal({ room }) {

    const {
        _id,
        roomName,
        description,
        capacity,
        price,
        duration,
        imageUrl,
    } = room || {};

    const onSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        const room = Object.fromEntries(formData.entries());


        // JWT Protected Route

        const { data: tokenData } = await authClient.token()


        const res = await fetch(`http://localhost:5000/room/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },

            body: JSON.stringify(room)
        })

        const data = await res.json()

        if (data) {
            toast.success("Congratulations! Successfully updated room!")
        }
        else {
            toast.error("Ahh! Failed to update room! Please try again later.")
        }

        console.log(data)

    };

    return (
        <Modal>

            <Button
                className="flex items-center gap-1 btn btn-secondary-edit w-full"
            >
                <MdModeEditOutline></MdModeEditOutline>
                <h2>Edit</h2>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiSolidMessageSquareEdit className="size-5 text-emerald-600" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Library Room</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        {/* Room Name */}

                                        <div className="md:col-span-2">
                                            <TextField
                                                defaultValue={roomName}
                                                name="roomName"
                                                isRequired>
                                                <Label>Room Name</Label>
                                                <Input placeholder="Atrium Reading Nook" className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}

                                        <div className="md:col-span-2">
                                            <TextField
                                                defaultValue={description}
                                                name="description"
                                                isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="e.g., A quiet and comfortable study room..."
                                                    className="rounded-3xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
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
                                                <Select.Trigger className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]">
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

                                        <TextField
                                            defaultValue={capacity}
                                            name="capacity"
                                            type="number"
                                            isRequired>
                                            <Label>Capacity</Label>
                                            <Input
                                                type="number"
                                                placeholder="4"
                                                className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Price */}

                                        <TextField
                                            defaultValue={price}
                                            name="price"
                                            type="number"
                                            isRequired>
                                            <Label>Hourly Rate (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="$ 10/hr"
                                                className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Duration */}

                                        <TextField
                                            defaultValue={duration}
                                            name="duration"
                                            isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="3 Hours"
                                                className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                            />
                                            <FieldError />
                                        </TextField>


                                        {/* Image URL - Removed preview */}

                                        <div className="md:col-span-2">
                                            <TextField
                                                defaultValue={imageUrl}
                                                name="imageUrl"
                                                isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/atrium-reading-nook.jpg"
                                                    className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                    </div>

                                    {/* Buttons */}

                                    <Modal.Footer>
                                        <Button
                                            type="submit"
                                            slot="close"
                                            className="btn btn-primary btn-float">

                                            <div className="flex items-center gap-2">
                                                <HiOutlineSave></HiOutlineSave>
                                                <h2>Save</h2>
                                            </div>

                                        </Button>
                                    </Modal.Footer>

                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}


"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { GiCheckMark } from "react-icons/gi";
import { MdModeEditOutline } from "react-icons/md";

export function EditModal() {

    const onSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        const room = Object.fromEntries(formData.entries());


        console.log(room);

        // const res = await fetch("http://localhost:5000/room", {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },

        //     body: JSON.stringify(room)
        // })

        // const data = await res.json()

        // if (data) {
        //     toast.success("Congratulations! Successfully added room!")
        //     redirect("/all-rooms")
        // }
        // else {
        //     toast.error("Ahh! Failed to added room! Please try again later.")
        // }

        // console.log(data)

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
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <form
                                onSubmit={onSubmit}
                                className="p-10 space-y-8"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Room Name */}

                                    <div className="md:col-span-2">
                                        <TextField name="roomName" isRequired>
                                            <Label>Room Name</Label>
                                            <Input placeholder="Atrium Reading Nook" className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]" />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Description */}

                                    <div className="md:col-span-2">
                                        <TextField name="description" isRequired>
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

                                    <TextField name="capacity" type="number" isRequired>
                                        <Label>Capacity</Label>
                                        <Input
                                            type="number"
                                            placeholder="4"
                                            className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                        />
                                        <FieldError />
                                    </TextField>

                                    {/* Price */}

                                    <TextField name="price" type="number" isRequired>
                                        <Label>Hourly Rate (USD)</Label>
                                        <Input
                                            type="number"
                                            placeholder="$ 10/hr"
                                            className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                        />
                                        <FieldError />
                                    </TextField>

                                    {/* Duration */}

                                    <TextField name="duration" isRequired>
                                        <Label>Duration</Label>
                                        <Input
                                            placeholder="3 Hours"
                                            className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
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
                                                className="rounded-2xl mt-1 dark:bg-slate-800 bg-[#F8FAFC]"
                                            />
                                            <FieldError />
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
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">

                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Send Message</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
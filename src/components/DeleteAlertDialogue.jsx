"use client";

import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";

export function DeleteAlertDialogue({ room }) {
    const { roomName } = room
    return (
        <AlertDialog>

            <Button
                className="flex items-center gap-1 btn btn-secondary-delete w-full"
            >
                <MdDeleteForever></MdDeleteForever>
                <h2>Delete</h2>
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete room permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{roomName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger">
                                Delete Room
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
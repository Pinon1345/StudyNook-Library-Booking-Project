"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

export function DeleteAlertDialogue({ room }) {

    const router = useRouter();

    const { _id, roomName } = room

    // JWT Protected Route

    const handleDelete = async () => {

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json()

        console.log(data);

        if (data) {
            toast.success("Successfully Delete Room!")
            router.replace("/all-rooms");
        }

        else {
            toast.error("Delete Room Failed! Please try again later.")
        }

    }

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
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Room
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
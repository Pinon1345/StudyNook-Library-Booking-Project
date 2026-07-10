"use client";

import { AlertDialog, Button } from "@heroui/react";

export function CancelBookingDialogue({ bookingId, onCancel }) {
    return (
        <AlertDialog>

            <Button
                className="btn btn-primary btn-float"
                size="sm"
            >
                Cancel
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Booking Permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to cancel this booking?
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button slot="close" variant="tertiary">
                                No
                            </Button>

                            <Button
                                onClick={() => onCancel(bookingId)}
                                slot="close"
                                variant="danger"
                            >
                                Cancel Booking
                            </Button>

                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
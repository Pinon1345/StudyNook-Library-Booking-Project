"use client";

import { EditModal } from "./EditModal";
import { DeleteAlertDialogue } from "./DeleteAlertDialogue";

const RoomOwnerActions = ({ room, isOwner }) => {

    if (!isOwner) {
        return null;
    }

    return (
        <div className="flex items-center justify-between mx-2 gap-4 mt-4 mb-2">
            <EditModal room={room} />
            <DeleteAlertDialogue room={room} />
        </div>
    );
};

export default RoomOwnerActions;
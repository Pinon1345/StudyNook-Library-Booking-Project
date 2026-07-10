"use client";

import { authClient } from "@/lib/auth-client";
import { EditModal } from "./EditModal";
import { DeleteAlertDialogue } from "./DeleteAlertDialogue";

const RoomOwnerActions = ({ room }) => {

    const { data: session, isPending } = authClient.useSession();

    if (isPending) return null;

    const user = session?.user;

    if (!user || room.userId !== user.id) {
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
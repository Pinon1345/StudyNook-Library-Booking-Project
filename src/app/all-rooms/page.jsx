import RoomsContainer from "@/components/RoomsContainer";

// Dynamic Tab

export const metadata = {
    title: "All Rooms | StudyNook",
};

const AllRoomsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/room`, {
        cache: "no-store",
    });

    const rooms = await res.json();

    return (
        <div className="container w-11/12 mx-auto pt-6 pb-8">

            <h2 className="font-bold text-3xl md:text-4xl text-center text-emerald-600 mt-4 mb-2 pb-4 animate-text-scale">
                ALL STUDY ROOMS
            </h2>

            <RoomsContainer rooms={rooms} />

        </div>
    );
};

export default AllRoomsPage;
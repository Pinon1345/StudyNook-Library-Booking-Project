import RoomsContainer from "@/components/RoomsContainer";

const AllRoomsPage = async () => {

    const res = await fetch("http://localhost:5000/room", {
        cache: "no-store",
    });

    const rooms = await res.json();

    return (
        <div className="container w-11/12 mx-auto pt-6 pb-8">

            <h2 className="font-bold text-3xl text-center text-emerald-600 mt-4 mb-2 pb-4 animate-text-scale">
                ALL STUDY ROOMS
            </h2>

            <RoomsContainer rooms={rooms} />

        </div>
    );
};

export default AllRoomsPage;
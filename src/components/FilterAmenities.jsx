"use client";

const FilterAmenitiesPage = ({
    amenities,
    selectedAmenity,
    setSelectedAmenity,
}) => {
    return (
        <div>
            <h2 className="text-lg font-bold text-emerald-600 pb-4">FILTER WITH :</h2>
            <select
                value={selectedAmenity}
                onChange={(e) => setSelectedAmenity(e.target.value)}
                className="w-full h-12 rounded-2xl border-emerald-400 dark:border-emerald-600 bg-white dark:bg-slate-800 px-4 outline-none shadow-md shadow-emerald-200 dark:shadow-emerald-600"
            >
                {amenities.map((amenity) => (
                    <option key={amenity} value={amenity}>
                        {amenity}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterAmenitiesPage;
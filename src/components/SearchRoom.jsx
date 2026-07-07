"use client";

import { FiSearch } from "react-icons/fi";

const SearchRoomPage = ({ search, setSearch }) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="relative max-w-2xl mx-auto">
                <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 text-xl" />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search study rooms..."
                    className="w-full h-14 rounded-2xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 pl-14 pr-5 text-slate-700 dark:text-white placeholder:text-slate-400 shadow-md transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none shadow-emerald-200 dark:shadow-emerald-600"
                />
            </div>
            <p className=" mt-3 mb-4 px-2 text-sm text-emerald-400 dark:text-emerald-600">Search by room name, description and floor...</p>
        </div>
    );
};

export default SearchRoomPage;
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50 px-6 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Background Blur */}
            <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/10" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-40 dark:opacity-10">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.12) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            {/* Content */}
            <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                {/* Badge */}
                <span className="mb-5 rounded-full border border-emerald-300/40 bg-emerald-100/70 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-900/20 dark:text-emerald-400">
                    📚 StudyNook Library
                </span>

                {/* 404 */}
                <h1 className="select-none text-[90px] font-black leading-none tracking-tight text-slate-900 md:text-[150px] lg:text-[180px] dark:text-white">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
                    The page you are looking for does not exist or may have been moved.
                    Continue exploring StudyNook to discover available study rooms,
                    manage your bookings, and enjoy a distraction-free study experience.
                </p>

                {/* Decorative Library Card */}
                <div className="mt-10 w-full max-w-lg rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/60">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Quiet Study Zone
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Find your perfect place to study.
                            </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-cyan-500 text-2xl shadow-lg">
                            📖
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                    <Link
                        href="/"
                        className="w-full rounded-xl bg-linear-to-r from-emerald-600 to-cyan-600 px-7 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                    >
                        ← Back to Home
                    </Link>

                    <Link
                        href="/study-rooms"
                        className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400 sm:w-auto"
                    >
                        Explore Study Rooms
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                    Lost? Do not worry. Every great study session starts with finding the
                    right room.
                </p>
            </section>
        </main>
    );
}
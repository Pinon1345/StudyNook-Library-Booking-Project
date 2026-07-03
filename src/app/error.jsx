"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
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
                <span className="mb-5 rounded-full border border-red-300/40 bg-red-100/70 px-4 py-2 text-sm font-semibold tracking-wide text-red-700 dark:border-red-700/40 dark:bg-red-900/20 dark:text-red-400">
                    ⚠️ Something Went Wrong
                </span>

                {/* Error Icon */}
                <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-orange-500 text-6xl shadow-xl">
                    !
                </div>

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl dark:text-white">
                    Oops! An Unexpected Error Occurred
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
                    Something interrupted your study session. Do not worry—this
                    is usually temporary. You can try again or return to the
                    homepage to continue exploring StudyNook.
                </p>

                {/* Glass Card */}
                <div className="mt-10 w-full max-w-lg rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/60">

                    <div className="flex items-center justify-between">

                        <div className="text-left">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                Study Session Interrupted
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Refresh or navigate back to continue.
                            </p>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-500 to-orange-500 text-2xl shadow-lg">
                            ⚡
                        </div>

                    </div>

                </div>

                {/* Buttons */}
                <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

                    <button
                        onClick={() => reset()}
                        className="w-full rounded-xl bg-linear-to-r from-emerald-600 to-cyan-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400 sm:w-auto"
                    >
                        Back to Home
                    </Link>

                </div>

                {/* Optional (Development Only) */}
                {process.env.NODE_ENV === "development" && (
                    <div className="mt-8 max-w-3xl overflow-auto rounded-xl bg-slate-900 p-4 text-left text-sm text-red-300">
                        {error?.message}
                    </div>
                )}

                {/* Footer */}
                <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                    Every challenge has a solution. Let us get you back to learning.
                </p>

            </section>
        </main>
    );
}
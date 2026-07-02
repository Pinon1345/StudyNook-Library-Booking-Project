/* eslint-disable react-hooks/set-state-in-effect */


"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <label className="theme-switch">
            <input
                type="checkbox"
                className="theme-switch__checkbox"
                checked={isDark}
                onChange={() => setTheme(isDark ? "light" : "dark")}
            />

            <div className="theme-switch__container">
                <div className="theme-switch__stars-container">
                    <svg
                        viewBox="0 0 144 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M135.831 3.00688L141.371 16.4432L144 17.5265L141.371 18.6098L135.831 32.0461L130.291 18.6098L127.662 17.5265L130.291 16.4432L135.831 3.00688Z"
                            fill="currentColor"
                        />
                        <path
                            d="M107.831 24.0069L110.371 30.4432L116.808 32.9834L110.371 35.5235L107.831 41.9599L105.291 35.5235L98.8547 32.9834L105.291 30.4432L107.831 24.0069Z"
                            fill="currentColor"
                        />
                        <path
                            d="M55.8313 13.0069L58.3715 19.4432L64.8078 21.9834L58.3715 24.5235L55.8313 30.9599L53.2912 24.5235L46.8548 21.9834L53.2912 19.4432L55.8313 13.0069Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div className="theme-switch__clouds"></div>

                <div className="theme-switch__circle-container">
                    <div className="theme-switch__sun-moon-container">
                        <div className="theme-switch__moon">
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                            <div className="theme-switch__spot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    );
}
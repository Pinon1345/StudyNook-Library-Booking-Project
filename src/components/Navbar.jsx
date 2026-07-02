import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <div>
            <h2>This is Navbar</h2>
            <div className="flex items-center gap-4">
                {/* Other nav items */}
                <ThemeToggle />

            </div>
        </div>
    );
};

export default Navbar;
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>

                {/* Right Side */}

                <div>
                    <Image
                        src={"/assets/StudyNook.png"}
                        alt='Logo'
                        width={170}
                        height={170}
                    ></Image>

                </div>

                {/* Center */}

                {/* Left Side */}

            </div>
        </nav>
    );
};

export default Navbar;
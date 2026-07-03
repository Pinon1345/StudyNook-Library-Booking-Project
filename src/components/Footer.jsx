import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black dark:bg-black/50 text-gray-400 px-6 md:px-16 pt-12 pb-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Image
                        className="w-42 h-20 md:w-54 md:h-24"
                        src={"/assets/FooterImage.png"}
                        alt="Footer-Image"
                        width={700}
                        height={700}
                    ></Image>
                    {/* <h1 className="text-6xl md:text-7xl font-bold text-white">
                        StudyNook
                    </h1> */}
                    <p className="mt-4 max-w-xl">
                        Find and reserve quiet study spaces anytime. StudyNook helps students discover, book, and manage library study rooms with ease.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white mb-3 tracking-wide">STAY UPDATED</h3>

                        <p className="mb-4 text-sm text-slate-400 leading-6">
                            Get the latest updates on new study rooms, booking availability,
                            study tips, and upcoming features delivered to your inbox.
                        </p>

                        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 focus-within:border-emerald-500 transition-all duration-300">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                            />

                            <button
                                className="ml-3 rounded-lg bg-emerald-500 p-2 text-white transition hover:bg-emerald-600"
                                aria-label="Subscribe"
                            >
                                ↗
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-3 tracking-wide text-white">QUICK LINKS</h3>

                        <ul className="space-y-3 text-slate-400">
                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                Home
                            </li>

                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                Study Rooms
                            </li>

                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                My Bookings
                            </li>

                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                About Us
                            </li>

                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                Contact
                            </li>

                            <li className="transition hover:text-emerald-400 cursor-pointer">
                                FAQ
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-3 tracking-wide text-white">SUPPORT</h3>

                        <ul className="space-y-3 text-slate-400">
                            <li className="cursor-pointer transition hover:text-emerald-400">
                                Help Center
                            </li>

                            <li className="cursor-pointer transition hover:text-emerald-400">
                                Booking Guidelines
                            </li>

                            <li className="cursor-pointer transition hover:text-emerald-400">
                                Terms & Conditions
                            </li>

                            <li className="cursor-pointer transition hover:text-emerald-400">
                                Privacy Policy
                            </li>

                            <li className="cursor-pointer transition hover:text-emerald-400">
                                Report an Issue
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-3 tracking-wide text-white">CONTACT US</h3>

                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center gap-3">
                                📍 Chattogram, Bangladesh
                            </li>

                            <li className="flex items-center gap-3">
                                📧 support@studynook.com
                            </li>

                            <li className="flex items-center gap-3">
                                📞 +880 1234-567890
                            </li>

                            <li className="flex items-center gap-3">
                                🕒 24/7 Online Support
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 md:flex-row">
                    <p className="text-center text-sm text-slate-400">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-white">StudyNook</span>. All rights
                        reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href="https://facebook.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-slate-700 p-2 text-slate-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                        >
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
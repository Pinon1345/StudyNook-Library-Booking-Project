import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";
import { Toaster } from "react-hot-toast";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StudyNook",
  description: "StudyNook is a Full-Stack MERN library booking platform designed to simplify study room reservations with real-time availability, secure user authentication, intuitive booking management, and a fast, responsive interface. Built to deliver a seamless experience for students and educational institutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] dark:bg-[#0F172A] dark:text-[#F8FAFC]">



        <ThemeProvider>

          <Navbar></Navbar>

          <main>
            {children}
            <Toaster></Toaster>
          </main>

          <Footer></Footer>

        </ThemeProvider>


      </body>
    </html>
  );
}

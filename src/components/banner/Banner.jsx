"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import BannerSlide from "./BannerSlide";

const slides = [
    {
        id: 1,
        title: "Find Your Perfect Study Space",
        subtitle:
            "Book quiet and comfortable study rooms anytime with StudyNook.",
        image:
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 2,
        title: "Book Your Ideal Study Environment",
        subtitle:
            "Find comfortable, distraction-free study spaces for individual learning, group discussions, and productive work sessions.",
        image:
            "/assets/libraryRoom2.avif",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 3,
        title: "Learn Without Distractions",
        subtitle:
            "Discover modern study rooms equipped with everything you need to stay focused and make every study session count.",
        image:
            "/assets/libraryRoom3.jpg",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 4,
        title: "Every Achievement Starts with Focus",
        subtitle:
            "Choose from a variety of study spaces that support deep concentration, collaboration, and academic success.",
        image:
            "/assets/libraryRoom4.avif",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 5,
        title: "Your Study Journey Begins Here",
        subtitle:
            "Easily browse, book, and manage study room reservations anytime, anywhere with StudyNook.",
        image:
            "/assets/libraryRoom5.jpg",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 6,
        title: "Study Smarter Together",
        subtitle:
            "Reserve collaborative rooms for group discussions and projects.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 7,
        title: "Comfort. Focus. Productivity.",
        subtitle:
            "Modern study environments designed for students and professionals.",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 8,
        title: "Unlock Your Best Study Experience.",
        subtitle:
            "Book modern, quiet, and comfortable study rooms tailored to help you stay focused, collaborate effectively, and reach your academic goals with confidence.",
        image:
            "/assets/libraryRoom6.jpeg",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
    {
        id: 9,
        title: "Quiet Spaces, Better Learning",
        subtitle:
            "Reserve peaceful study rooms designed to help you focus, learn efficiently, and achieve your academic goals.",
        image:
            "/assets/libraryRoom1.jpg",
        btn:"Explore Rooms",
        btn2: "Get Started",
    },
];

export default function Banner() {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect="fade"
            loop={true}
            speed={1000}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className="h-[70vh] md:h-[85vh]"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <BannerSlide slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
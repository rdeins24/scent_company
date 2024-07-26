import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/assets/img/dif.jpg",
    alt: "Descriptive alt text for dif",
    title: "Showroom-uri",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
  {
    image: "/assets/img/scent.jpg",
    alt: "Descriptive alt text for scent",
    title: "Hotele",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
  {
    image: "/assets/img/bottle.jpg",
    alt: "Descriptive alt text for bottle",
    title: "Rezidentiale",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
  {
    image: "/assets/img/dif.jpg",
    alt: "Descriptive alt text for dif",
    title: "Showroom-uri",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
  {
    image: "/assets/img/scent.jpg",
    alt: "Descriptive alt text for scent",
    title: "Hotele",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
  {
    image: "/assets/img/bottle.jpg",
    alt: "Descriptive alt text for bottle",
    title: "Rezidentiale",
    description: "Parfumurile au o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudgu o putere nemaiponendyg iydgi iudh iuhd9u iuhd iudg",
  },
];

export default function App() {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      centeredSlides={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="relative w-full h-96 overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-gray-600 my-5 mb-10 px-4">
            <h2 className="text-black text-xl md:text-2xl font-bold my-4">
              {slide.title}
            </h2>
            <p>{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

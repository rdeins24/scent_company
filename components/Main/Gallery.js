import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import applications from "../../data/applicationsData";
import Image from "next/image";

const Gallery = () => {
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
      {applications.map((application) => (
        <SwiperSlide
          key={application.id}
          className="flex flex-col items-center justify-center text-center"
        >
          <Link href={`/applications/${application.id}`} legacyBehavior>
            <a className="w-full">
              <div className="relative w-full h-96 overflow-hidden">
                <Image
                  src={application.heroImage}
                  alt={application.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-gray-600 my-5 mb-10 px-4">
                <h2 className="text-black text-xl md:text-2xl font-bold my-4">
                  {application.name}
                </h2>
                <p>{application.description}</p>
              </div>
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;

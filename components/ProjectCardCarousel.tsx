type projectDataProps = { files: any; name: string };

import Image from "next/image";

// Swiper JS
// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectCardCarousel = ({ files, name }: projectDataProps) => {
  return (
    <Swiper
      className="w-full h-full"
      tag="section"
      wrapperTag="ul"
      id="main"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {files.map((file, index) => (
        <SwiperSlide
          tag="li"
          key={index}
          className="flex justify-center items-center"
        >
          <Image
            src={file}
            layout="fill"
            objectFit="contain"
            alt={name}
            placeholder="empty"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCardCarousel;

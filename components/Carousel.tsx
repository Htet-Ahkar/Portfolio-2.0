type fileProps = {
  title: string;
  files: [any];
};
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

const Carousel = (props: fileProps) => {
  return (
    <Swiper
      className="w-full h-64 my-5
      md:h-imageContainer md:my-12"
      tag="section"
      wrapperTag="ul"
      id="main"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {props.files.map((file, index) => (
        <SwiperSlide
          tag="li"
          key={index}
          className="flex justify-center items-center"
        >
          <Image
            src={file}
            layout="fill"
            objectFit="contain"
            alt={props.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

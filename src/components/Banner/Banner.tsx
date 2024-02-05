// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "App.css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Banner = () => {
  const arrImage: Array<String> = [
    "thumbnail1.jpg",
    "thumbnail-la-gi-1.jpg",
    "yellow-color-halftone-youtube-thumbnail-background_562076-95.avif",
    "youtube-01.webp",
    "thumbnail-la-gi.png",
    "af44ea07fa5bfd828004747f62f63bc3.jpg",
  ];
  return (
      <>
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
        >
          {arrImage.map((image, index) => (
              <SwiperSlide
                  key={index}
                  className="flex h-[250px] items-center justify-center p-4"
              >
                <img className="image-banner" src={`assets/${image}`} alt="" />
              </SwiperSlide>
          ))}
        </Swiper>
      </>
  );
};

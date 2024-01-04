// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'App.css';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export const Banner = () => {
  
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
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\thumbnail1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\thumbnail-la-gi-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\yellow-color-halftone-youtube-thumbnail-background_562076-95.avif" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\youtube-01.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\thumbnail-la-gi.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-[250px] p-4 flex justify-center items-center">
          <img className='image-banner' src="assets\af44ea07fa5bfd828004747f62f63bc3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
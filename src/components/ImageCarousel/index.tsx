'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel ({ images }: ImageCarouselProps){
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
         {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Image ${index}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}

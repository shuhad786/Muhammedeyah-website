import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './swiperStyles.css';
import 'swiper/swiper-bundle.min.css';
import Principle from '../../assets/principle.jpg';
import Deputy from '../../assets/deputy-principle.jpg';
import slide1 from '../../assets/school-pic-1.jpg';
import slide2 from '../../assets/school-pic-2.jpg';
import slide3 from '../../assets/school-pic-3.jpg';
import slide4 from '../../assets/school-pic-4.jpg';
import slide5 from '../../assets/school-pic-5.jpg';
import slide6 from '../../assets/school-pic-6.jpg';
import slide7 from '../../assets/staff-runners.jpg';

function Carousel() {
  return (
    <>
      <h1 className="mt-16 text-bold text-center text-6xl text-blue-950 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-gradient-to-r text-transparent bg-clip-text">Past Adventures</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mt-16 mb-16 p-10 hover:p-4 hover:duration-1000 hover:ease-in ease-out transition-all"
      >
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide4} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide5} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide6} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-3xl w-10/12 ease-out hover:ease-in hover:w-full duration-700 hover:rounded-md" src={slide7} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;

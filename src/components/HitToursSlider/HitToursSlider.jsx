import React from 'react';

// Імпортуємо компоненти Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Імпортуємо стилі Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Компонент картки туру
import TourCard from '../TourCard';

const HitToursSlider = ({ tours }) => {
  return (
    <div className="tours-slider-container">
      <Swiper
        // Підключаємо модулі
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <TourCard
              imageUrl={tour.imageUrl}
              title={tour.title}
              details={tour.details}
              price={tour.price}
              link={tour.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HitToursSlider;


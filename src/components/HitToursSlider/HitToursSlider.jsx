import React from 'react';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Tour card component
import TourCard from '../TourCard';

const HitToursSlider = ({ tours }) => {
  return (
    <div className="tours-slider-container">
      <Swiper
        // Connect modules
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
              tourId={tour.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HitToursSlider;


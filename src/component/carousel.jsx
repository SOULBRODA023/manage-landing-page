import React, { useState } from "react";
import data from "../data.json";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

const Carouselslide = () => {
  const [carouselInfo, setCarouselInfo] = useState(data.carousel);

  return (
    <section className="carousel">
      <h2>What they've said</h2>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {carouselInfo.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="cardBody">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="cardText">
                <p>{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="btn-primary-1">Get Started</button>
    </section>
  );
};

export default Carouselslide;

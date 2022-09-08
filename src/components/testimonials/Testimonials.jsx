import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from "./Data";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">
        What people I've worked with say
      </span>

      <Swiper className="testimonials__container"
      loop={true}
      spaceBetween={24}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        }
      }}
      modules={[Pagination]}
      >
        {Data.map(({ id, image, title, position, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <h5 className="testimonial__position">{position}</h5>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

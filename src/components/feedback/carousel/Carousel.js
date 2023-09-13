import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide className="mySwiper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-auto swipercaption">
                John Doe 08/08/2019
              </div>
            </div>
            <div className="row">
              <div className="col-md-auto swipertext">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
                magna est sociis, neque in odio vel, sit lobortis erat. Fugit
                quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem
                ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna
                est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut
                pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum
                dolor sit amet, et felis integer. Cras ac, duis nisl magna est
                sociis, neque in.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-auto swipercaption">
                Dan Johnson 08/08/2019
              </div>
            </div>
            <div className="row">
              <div className="col-md-auto swipertext">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
                magna est sociis, neque in odio vel, sit lobortis erat. Fugit
                quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem
                ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna
                est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut
                pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum
                dolor sit amet, et felis integer. Cras ac, duis nisl magna est
                sociis, neque in.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-auto swipercaption">
                Rooster Grin 08/08/2019
              </div>
            </div>
            <div className="row">
              <div className="col-md-auto swipertext">
                Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
                magna est sociis, neque in odio vel, sit lobortis erat. Fugit
                quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem
                ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna
                est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut
                pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum
                dolor sit amet, et felis integer. Cras ac, duis nisl magna est
                sociis, neque in.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

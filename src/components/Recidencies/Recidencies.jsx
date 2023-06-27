import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Recidencies.css";
import data from "../../utils/slider.json";

const Recidencies = () => {
  return (
    <>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Recidencies</span>
          </div>
          <Swiper>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Recidencies;

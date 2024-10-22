import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arow_right from "../../assets/landing-page/Arrow - Right Circle.png";
import left_arrow from "../../assets/landing-page/Arrow - Left Circle.png";

interface ArrowProps {
  onClick?: () => void;
}

const Prev_Arrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="prev_button" onClick={onClick}>
      <img src={left_arrow} alt="" />
    </div>
  );
};
const Next_Arrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className="next_button" onClick={onClick}>
      <img src={arow_right} alt="" />
    </div>
  );
};

interface CarouselProps {
  items: React.ReactNode[];
}
const MultipleItems: React.FC<CarouselProps> = ({ items }) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="carousel-arrows">
        <Prev_Arrow onClick={() => sliderRef.current?.slickPrev()} />
        <Next_Arrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
      <Slider ref={sliderRef} {...settings}>
        {items}
      </Slider>
    </div>
  );
};
export default MultipleItems;

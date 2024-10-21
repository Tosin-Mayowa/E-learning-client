import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../assets/landing-page/Arrow - Left Circle.png";
import right_arrow from "../../assets/landing-page/Arrow - Right 2.png";

interface arrow_props {
  onClick?: () => void;
}

const Prev_arrow: React.FC<arrow_props> = ({ onClick }) => {
  return (
    <>
      <div className="prev_arrow" onClick={onClick}>
        {/* <span>{">"}</span> */}
        <img src={left_arrow} alt="prev arrow" />
      </div>
    </>
  );
};
const Next_arrow: React.FC<arrow_props> = ({ onClick }) => {
  return (
    <>
      <div className="next_arrow" onClick={onClick}>
        {/* <span>{">"}</span> */}
        <img src={right_arrow} alt="next arrow" />
      </div>
    </>
  );
};

interface carousel_props {
  items: React.ReactNode[];
}

const Carousal: React.FC<carousel_props> = ({ items }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.5,
    swipeToSlide: true,
    prevArrow: <Prev_arrow />,
    nextArrow: <Next_arrow />,
  };

  return (
    <>
      <div className="carousel-container">
        {/* <div className="carousel-nav">
          <Prev_arrow onClick={settings.prevArrow.onClick} />
          <Next_arrow onClick={settings.nextArrow.onClick} />
        </div> */}
        <Slider {...settings}>{items}</Slider>
      </div>
    </>
  );
};

export default Carousal;

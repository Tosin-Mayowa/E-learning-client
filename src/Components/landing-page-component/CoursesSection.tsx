import React from "react";
import { courses } from "../../lib/utilities";
import Carousal from "./carousal";

const CoursesSection: React.FC = () => {
  const cards = [
    courses.map((item, index) => (
      <div className="card" key={index}>
        <img src={item.image} alt="" />
        <div className="card_details">
          <h1 className="card_title">{item.title}</h1>
          <div className="card_category_container">
            <p className="card_category">{item.category}</p>
            <div className="rating_container">
              <img src="" alt="" />
              <p className="rating">{item.rating}</p>
            </div>
          </div>
          <div className="card_info">
            <div className="card_modules_container">
              <img src="" alt="" />
              <p className="card_modules">{item.modules}</p>
            </div>
            <div className="card_duration">
              <img src="" alt="" />
              <p className="card_duration">{item.duration}</p>
            </div>
          </div>
          <button className="enroll_button">Enroll Now</button>
        </div>
      </div>
    )),
  ];
  return (
    <>
      <section id="courses" className="courses_section">
        <div className="intro_text">
          <h1 className="trending_courses">Trending Courses</h1>
          <p className="comments">
            We offer a lot of tech-based courses. Below are the ones that are
            trending currently.
          </p>
        </div>
        <div className="card_slider">
          {/* <Carousal /> */}
          <Carousal items={cards} />
          {/* <div className="cards"></div> */}
        </div>
      </section>
    </>
  );
};

export default CoursesSection;

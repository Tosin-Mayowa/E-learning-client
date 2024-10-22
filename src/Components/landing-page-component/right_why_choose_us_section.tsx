import React from "react";
import Get_started_button from "./Get_started_button";

const Right_Why_Us: React.FC = () => {
  return (
    <>
      <div className="why_choose_us_text">
        <div className="why_use_text">
          <h1 className="why_use_header_text">Learn at your own pace</h1>
          <p className="why_use_p_text">
            Learning at your own pace our LMS offers a personalized and flexible
            educational experience tailored to your unique needs and schedule.
            With self-paced learning, you can absorb material at a speed that
            suits you, revisiting complex topics as needed and accelerating
            through areas of strength. By taking control of your learning
            journey, you can build confidence and mastery in your chosen field,
            ultimately leading to more meaningful and sustained educational
            outcomes.
          </p>
        </div>
        <div className="figures">
          <div className="figure">
            <h1 className="head_figure">100k+</h1>
            <p className="p_figure">Graduants</p>
          </div>
          <div className="figure">
            <h1 className="head_figure">50+</h1>
            <p className="p_figure">Courses</p>
          </div>
          <div className="figure">
            <h1 className="head_figure">30+</h1>
            <p className="p_figure">Enrolled</p>
          </div>
        </div>
        <Get_started_button />
      </div>
    </>
  );
};

export default Right_Why_Us;

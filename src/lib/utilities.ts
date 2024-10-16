import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";

import Image1 from "../assets/Image (1).png";
import Image2 from "../assets/Effects.png";
import project1 from "../assets/Image (1).png";
import project2 from "../assets/Image (2).png";

export const studentsReport = [
    {
      id: 1,
      image: Icon,
      completionCount: "7 / 12",
      action: "Assignments Submitted",
      remark: "Please submit pending assignments",
    },
    {
      id: 2,
      image: Icon1,
      completionCount: "10 / 10",
      action: "classes attended",
      remark: "Keep it up!!",
    },
    {
      id: 3,
      image: Icon2,
      completionCount: "7 / 12",
      action: "Assignments Submitted",
      remark: "Please submit pending assignments",
    },
  ];
  
  export const courseDetails = [
    {
      id: 1,
      course: "Product Design",
      progress: "50%",
      image: Image1,
    },
    {
      id: 2,
      course: "Frontend Web Dev ",
      progress: "30%",
      image: Image2,
    },
  ];
  
  export const projectDetails = [
    {
      id: 1,
      image: project1,
      name: "Food Delivery App",
      course: "Product Design",
      progressLevel: "50%",
    },
    {
      id: 2,
      image: project2,
      name: "Hotel Booking Website",
      course: "Frontend Web Development",
      progressLevel: "30%",
    },
  ];
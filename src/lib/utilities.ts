import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";

import Image1 from "../assets/Image (1).png";
import Image2 from "../assets/Image.png";
import project1 from "../assets/Image (1).png";
import project2 from "../assets/Image (2).png";

import course1 from "../assets/landing-page/Course Image.png"
import course2 from "../assets/landing-page/Course Image (2).png"
import course3 from "../assets/landing-page/Course Image (3).png"
import course4 from "../assets/landing-page/courseImage4.jpg"

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

export const SidebarData = [
  {
    name: "Home",
    path: "hero-section",
    cName: "nav-links"
  },
  {
    name: "Why Us",
    path: "why_us",
    cName: "nav-links"
  },
  {
    name: "Courses",
    path: "courses",
    cName: "nav-links"
  },
  {
    name: "Testimonials",
    path: "testimonials",
    cName: "nav-links"
  },
  {
    name: "Contact",
    path: "contact",
    cName: "nav-links"
  }

];
export const courses = [
  {
    image: course1,
    title: "Frontend Web Development",
    category: "Web Development",
    rating: 4.6,
    modules: 10,
    duration: 90,

  },
  {
    image: course2,
    title: "Fundamentals of User Interface Design",
    category: "Product Design",
    rating: 4.6,
    modules: 8,
    duration: 15,

  },
  {
    image: course3,
    title: "Introduction to User Experience Design",
    category: "Product Design",
    rating: 4.6,
    modules: 8,
    duration: 15,

  },
  {
    image: course4,
    title: "Project Management Professional",
    category: "Product Management",
    rating: 4.6,
    modules: 8,
    duration: 15,

  }
];
import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import { getCountries, getStates } from "country-state-picker";
import Image1 from "../assets/Image (1).png";
import Image2 from "../assets/Effects.png";
import project1 from "../assets/Image (1).png";
import project2 from "../assets/Image (2).png";
import { MultiOptionType, OptionType } from "../Components/SignUpComp/SignUpComp";

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


  export const handleError =(error: { response: { data: any; status: any; headers: any; }; request: any; message: any; config: any; }) =>{
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
  
  export const options: OptionType[]|MultiOptionType[] = getCountries().map(
    ({ name, code }: { name: string; code: string }) => ({
      value: code,
      label: name,
      color: "#fff",
    })
  );
  export const genderOptions: OptionType[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  export const courseOptions: OptionType[] = [
    { value: 'FE', label: 'Frontend Engineering' },
    { value: 'BE', label: 'Backend Engineering' },
    { value: 'FS', label: 'Fullstack Software Engr.' },
    { value: 'PD', label: 'UI/UX' },
    { value: 'G', label: 'Graphics' },
    { value: 'DA', label: 'Data Analytics' },
    { value: 'DS', label: 'Data Science' },
    { value: 'SE', label: 'System Engineering' },
    { value: 'NET', label: 'Networking' },
    { value: 'CS', label: 'Cybersecurity' },
    { value: 'FCS', label: 'Fullstack Cybersecurity' },
    { value: 'ICT', label: 'ICT' },
    { value: 'DM', label: 'Digital Marketing' },
    { value: '.NET', label: 'ASP.NET CORE' },
    { value: 'PJ', label: 'Python/Django' },
  ];
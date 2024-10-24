import React, { useCallback, useReducer, useState } from "react";
import "./SignUpComp.css";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { countries, handleError, ErrorResponse } from '../../lib/utilities'
import Logo from "../../assets/Globaltech_logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { signUpApi } from "../../api/register";
import countryStates from "../../lib/constants";
import axios from "axios";

type OptionType = {
  value: string;
  label: string;
  isChecked: boolean;
};




const courseOptions = [
  { value: 'FE', label: 'Frontend Engineering', isChecked: false },
  { value: 'BE', label: 'Backend Engineering', isChecked: false },
  { value: 'FS', label: 'Fullstack Software Engr.', isChecked: false },
  { value: 'PD', label: 'UI/UX', isChecked: false },
  { value: 'G', label: 'Graphics', isChecked: false },
  { value: 'DA', label: 'Data Analytics', isChecked: false },
  { value: 'DS', label: 'Data Science', isChecked: false },
  { value: 'SE', label: 'System Engineering', isChecked: false },
  { value: 'NET', label: 'Networking', isChecked: false },
  { value: 'CS', label: 'Cybersecurity', isChecked: false },
  { value: 'FCS', label: 'Fullstack Cybersecurity', isChecked: false },
  { value: 'ICT', label: 'ICT', isChecked: false },
  { value: 'DM', label: 'Digital Marketing', isChecked: false },
  { value: '.NET', label: 'ASP.NET CORE', isChecked: false },
  { value: 'PJ', label: 'Python/Django', isChecked: false },
];


export const SignUpComp = () => {
  const [isNext, setIsNext] = useState(false);
  const [isClick, setIsClick] = useState(false);

  // const [states, dispatch] = useReducer(registerReducer, initialState);

  const [fullName, setFullName] = useState<string>("");
  const [phone_num, setPhoneNum] = useState<string | undefined>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [matricNo, setMatricNo] = useState("");
  //   const [selectedCourse,setSelectedCourse]=useState<OptionType[]>([]);
  const [courses, setCourses] = useState<OptionType[]>(courseOptions);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Handle checkbox selection
  const handleCheckboxChange = (val: string) => {
    console.log({ val });

    const updatedCheckboxes = courses.map(item => {
      if (item.value === val) {
        return { ...item, isChecked: !item.isChecked }
      } else {
        return item
      }
    });


  


    setCourses(updatedCheckboxes);
  };

  console.log(courses);


  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setCountry(event.target.value);
    console.log(countryStates(event.target.value))
    setStateOptions(countryStates(event.target.value)); // Reset state when country changes
  };
  ;

  const handleStateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setState(e.target.value);
  };


  console.log({ country, state, courses });






  const sendSignUp = async () => {


    try {
      console.log('request sending...');
      const selectedItems = courses.filter(item => item.isChecked);
      const newCourses = selectedItems.map(item => item.value)


      const data = {
        fullName,
        address,
        dateOfBirth,
        country,
        state,
        gender,
        matricNo,
        phoneNumber: phone_num,
        email,
        courses: newCourses,
        password
      }


      console.log({ data });

      const response = await axios.post('http://localhost:8000/api/v1/auth/register', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 50000,
        withCredentials: false,
      })
      console.log('request sent');
      console.log({ response });

    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }




  // const sendSignUp = useCallback(async () => {
  //   console.log("loading....");
  //   const selectedItems = courses.filter(item => item.isChecked);
  //   const newCourses=selectedItems.map(item=>item.value)
  //   let configs = {
  //     fullName,
  //     phoneNumber: phone_num,
  //     address,
  //     state,
  //     country,
  //     email,
  //     password,
  //     dateOfBirth,
  //     matricNo,
  //     courses:newCourses,
  //     gender
  //   };
  //   console.log({ configs});

  //   const resp = await signUpApi(configs);
  //   console.log({ resp });
  // }, [
  //   fullName,
  //   // stateVal,
  //   country,
  //   email,
  //   gender,
  //   courses,
  //   dateOfBirth,
  //   matricNo,
  //   address,
  //   password,
  //   phone_num,
  // ]);


  // const FormWithManualValidation = () => {
  //   const [fullname, setfullname] = useState("");
  //   const [address, setaddress] = useState("");
  //   const [error, setError] = useState("");

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     if (!fullname || !address) {
  //       setError("Please fill in all required fields.");
  //     } else {
  //       setError("");
  //       // Process form submission here
  //     }
  //   };

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-nested-wrapper">
          <div className="signup-logo">
            <img src={Logo} alt="Globaltech logo" className="signup_logo_img" />
          </div>

          <div className="signup-personal-info-box">
            <p className="signup_persona_info_text_one">Personal Information</p>
            <p className="signup_persona_info_text_two">
              Your Learning Journey Start Here...
            </p>
          </div>
          {!isNext ? (

            <div className="signup-input-box" >
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Fullname</p>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="signup-input"
                  required
                />
              </div>
              <div className="signup-inpt-2 signup">
                <p className="signup-text">Address</p>
                <input
                  type="text"
                  name=""
                  id="address"
                  placeholder="Your home address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="signup-input"
                  required
                />
              </div>

              <div className="signup-inpt-3 signup">
                <p className="signup-text">Date of Birth</p>
                <input
                  type={!isClick ? "text" : "date"}
                  value={dateOfBirth}
                  onClick={() => setIsClick(true)}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  placeholder="Enter your Date of Birth"
                  className="signup-input"
                  required
                />
              </div>
              <div className="signup-inpt-4 signup">
                <p className="signup-text">Nationality</p>

                <select
                  value={country}
                  onChange={handleCountryChange}
                  className="signup-input select">
                  <option value="" disabled>Select Country</option>

                  {countries?.map(item => <option key={item.code} value={item.code}>{item.name}</option>)}
                </select>
              </div>

              <div className="signup-inpt-5 signup">
                <p className="signup-text">State of Origin</p>
                <select name="" id="" className="signup-input" onChange={handleStateChange} required>
                  <option value=""></option>
                  {stateOptions?.map(item => <option key={item} value={item}>{item}</option>)}


                </select>


              </div>
              <div className="signup-inpt-6 signup">
                <p className="signup-text">Gender</p>
                <select name="" id="" className="signup-input" value={gender} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setGender(e.target.value)}>
                  <option value=""></option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>


              <div className="signup-next-btn-div">
                <button
                  type="button"
                  className="signup-next-btn"
                  onClick={() => setIsNext(true)}

                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="signup-additional-info-input-box">
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Matric Number</p>
                <input
                  type="text"
                  name=""
                  onChange={(e) => setMatricNo(e.target.value)}
                  placeholder="Enter your Matric Number"
                  value={matricNo}
                  className="signup-input"
                />
              </div>

              <div className="checkbox-list">
                <p className="">Courses</p>
                <button className="icon-btn" onClick={() => setIsVisible(!isVisible)}>
                  <i className="fas fa-chevron-down list"></i>
                </button>

                {isVisible && (
                  <div className="checkbox-container">
                    {courses.map((checkbox, index) => (

                      <div key={checkbox.value} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`checkbox-${checkbox.value}`}
                          checked={checkbox.isChecked}
                          onChange={() => handleCheckboxChange(checkbox.value)}
                        />
                        <label htmlFor={`checkbox-${checkbox.value}`} style={{ paddingLeft: "15px" }}>{checkbox.label}</label>
                      </div>
                    ))}

                  </div>
                )}   
               
              </div>






              <div className="signup-inpt-1 signup">
                <p className="signup-text">Phone Number</p>

                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone_num}
                  // onChange={setValue}
                  onChange={(val) => {
                    console.log("phn", val);
                    setPhoneNum(val)
                  }}
                />
              </div>
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Email Address</p>
                <input
                  type="text"
                  name=""
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="signup-input"
                />
              </div>

              <div className="signup-inpt-1 signup">
                <p className="signup-text">Password</p>
                <input
                  type="text"
                  name=""
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="signup-input"
                />
              </div>

              <div className="signup-submit-btn-div">
                <button
                  type="button"
                  className="signup-submit-btn"
                  onClick={sendSignUp}
                // onClick={() =>{
                //   console.log('submit working');

                //   sendSignUp();
                //   dispatch({ type: 'RESET', payload:resetPayload })
                // }}
                // disabled={
                //   !(
                //     fullName &&
                //     stateVal &&
                //     country &&
                //     email &&
                //     gender &&
                //     courses &&
                //     dateOfBirth &&
                //     matricNo &&
                //     address &&
                //     password &&
                //     phone_num
                //   )
                // }
                >
                  Submits
                </button>
              </div>
              <button
                className="signup-back-btn"
                onClick={() => setIsNext(false)}
              >
                Back?
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
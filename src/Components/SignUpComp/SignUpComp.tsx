import React, {useState } from "react";
import "./SignUpComp.css";
import registerReducer from "../../reducer/registerReducer";
import Logo from '../../assets/Globaltech_logo.png';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


type NonNullableSingleValue<T> = NonNullable<SingleValue<T>>;
const initialState = {
  fullName: "",
  stateVal: null,
  country: {
    value: "",
    label: ""
    color: "",
  },
  email: "",
  courses:[],
  gender: null,
  dateOfBirth: "",
  matricNo: "",
  address: "",
  password: "",
  phone_num: "",
};
export interface OptionType {
  value: string;
  label: string;
  color?: string;
}

export type MultiOptionType= {
  value: string;
  label: string;
};
export const isSingleValue = (option: SingleValue<OptionType> | MultiValue<OptionType>): option is NonNullableSingleValue<OptionType>  => {
  return option !== null && !Array.isArray(option);
};


export const SignUpComp = () => {
  const [isNext, setIsNext] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [stateOptions, setStateptions] = useState([]);
  const options: OptionType[]|MultiOptionType[] = getCountries().map(
    ({ name, code }: { name: string; code: string }) => ({
      value: code,
      label: name,
      color: "#fff",
    })
  );
  const genderOptions: OptionType[] = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const courseOptions: OptionType[] = [
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
  const [states, dispatch] = useReducer(registerReducer, initialState);
  // const colorStyles = {
  //   control: (styles: any, { isFocused }: any) => {
  //     return {
  //       ...styles,
  //       marginTop: "0.5rem",
  //       height: "3rem",
  //       fontSize: "15px",
  //       lineHeight: "22px",
  //       background: "rgba(6, 0, 137, 0.05)",
  //       borderRadius: "8px",
  //       borderColor: isFocused ? "#F9C567" : "",
  //       color: "#fff",
  //     };  
  //   },

  // };
  const colorStyles: StylesConfig<OptionType, boolean> = {
    control: (provided,{ isFocused }: any) => ({
      ...provided,
      marginTop: "0.5rem",
        minHeight: "3rem",
        height:"auto",
        fontSize: "15px",
        lineHeight: "22px",
        background: "rgba(6, 0, 137, 0.05)",
        borderRadius: "8px",
        border:"none",
        borderColor: isFocused ? "none" : "none",
        color: "#fff",
       
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
    }),
    multiValue: (provided) => ({
      ...provided,
      borderRadius:"50px",
      backgroundColor: '#0A95D8',
      backgroundSize:'108%'
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      fontWeight:500,
      color: '#fff',

    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      ':hover': {
        backgroundColor: 'red',
        color: 'white',
        textAlign:"center",
        borderRadius:"50%",
        width:"20px",
        height:"20px",
        fontSize:"bold"
      },
    }),
  };




  const {
    fullName,
    stateVal,
    country,
    email,
    gender,
    courses,
    dateOfBirth,
    matricNo,
    address,
    password,
    phone_num
  } = states;

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-nested-wrapper">
           <div className="signup-logo">
            <img src={Logo} alt="Globaltech logo" className="signup_logo_img"/>
          </div> 
         
          <div className="signup-personal-info-box">
            <p className="signup_persona_info_text_one">Personal Information</p>
            <p className="signup_persona_info_text_two">Your Learning Journey Start Here...</p>
          </div>
          {!isNext ? (
            <div className="signup-input-box">
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Fullname</p>
                <input
                  type="text"
                  name=""
                  placeholder="Enter your fullname"
                  value=""
                  className="signup-input"
                />
              </div>
              <div className="signup-inpt-2 signup">
                <p className="signup-text">Address</p>
                <input
                  type="text"
                  name=""
                  placeholder="Your home address"
                  value=""
                  className="signup-input"
                />
              </div>
              <div className="signup-inpt-3 signup">
                <p className="signup-text">Date of Birth</p>
                <input
                  type={!isClick ? "text" : "date"}
                  value={dateOfBirth}
                  onClick={() => setIsClick(true)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      type: "SET_DATE_OF_BIRTH",
                      payload: event.target.value,
                    })
                  }
                  placeholder="Enter your Date of Birth"
                  className="signup-input"
                />
              </div>
              <div className="signup-inpt-4 signup">
                <p className="signup-text">Nationality</p>
                <Select
                  options={options}
                  value={country}
                  onChange={(selectedOption:SingleValue<OptionType>|MultiValue<MultiOptionType>, actionMeta: ActionMeta<OptionType>) => {
                    dispatch({ type: "SET_COUNTRY", payload: selectedOption });
                    console.log("Selected test:", "testing");
                    if (isSingleValue(selectedOption) ) {
                      const states = getStates(selectedOption.value)?.map(
                        (state: string) => ({
                          value: state,
                          label: state,
                          color: "#fff",
                        })
                      );

                      setStateptions(states || []);
                    }
                  }}
                  styles={colorStyles}
                />
              </div>
              <div className="signup-inpt-5 signup">
                <p className="signup-text">State of Origin</p>
                <Select
                  options={stateOptions}
                  value={stateVal}
                  onChange={(selectedOption: SingleValue<OptionType>|MultiValue<MultiOptionType>) =>
                    dispatch({ type: "SET_STATE_VAL", payload: selectedOption })
                  }
                  styles={colorStyles}
                />
              </div>
              <div className="signup-inpt-6 signup">
                <p className="signup-text">Gender</p>
                <Select
                  options={genderOptions}
                  value={gender}
                  onChange={(selectedOption: SingleValue<OptionType>|MultiValue<MultiOptionType>) => {
                    dispatch({ type: "SET_GENDER", payload: selectedOption });
                  }}
                  styles={colorStyles}
                />
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
                  placeholder="Enter your Matric Number"
                  value=""
                  className="signup-input"
                />
              </div>
              <div className="signup-inpt-6 signup">
                <p className="signup-text">Courses</p>
                <Select
                isMulti
                 isSearchable
                 
                  value={courses}
                  onChange={(option:MultiValue<MultiOptionType>)=>{
                    dispatch({ type: 'SET_COURSES', payload: option });
                  }}
                  options={courseOptions}
                  styles={colorStyles}
                />
              </div>
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Phone Number</p>
                {/* <input
                  type="tel"
                  name=""
                  placeholder="Enter your Phone Number"
                  value=""
                  className="signup-input"
                /> */}
                <PhoneInput
  placeholder="Enter phone number"
  value={phone_num}
  // onChange={setValue}
  onChange={() =>{
    console.log("phn",phone_num);
    dispatch({
      type: "SET_DATE_OF_BIRTH",
      payload: phone_num,
    })
  }
   
  }
 
  />
              </div>
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Email Address</p>
                <input
                  type="text"
                  name=""
                  placeholder="example@gmail.com"
                  value=""
                  className="signup-input"
                />
              </div>
             
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Password</p>
                <input
                  type="text"
                  name=""
                  placeholder="Enter your password"
                  value=""
                  className="signup-input"
                />
              </div>
              <div className="signup-submit-btn-div">
                <button
                  type="button"
                  className="signup-submit-btn"
                 
                >
                  Submit
                </button>
              </div>
              <button className="signup-back-btn" onClick={() => setIsNext(false)}>Back?</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

import React, { useCallback, useReducer, useState } from "react";
import "./SignUpComp.css";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import {countries, handleError,ErrorResponse} from '../../lib/utilities'
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


const courseOptions= [
  { value: 'FE', label: 'Frontend Engineering',isChecked:false },
  { value: 'BE', label: 'Backend Engineering',isChecked:false },
  { value: 'FS', label: 'Fullstack Software Engr.',isChecked:false },
  { value: 'PD', label: 'UI/UX',isChecked:false },
  { value: 'G', label: 'Graphics',isChecked:false },
  { value: 'DA', label: 'Data Analytics',isChecked:false },
  { value: 'DS', label: 'Data Science',isChecked:false },
  { value: 'SE', label: 'System Engineering',isChecked:false },
  { value: 'NET', label: 'Networking',isChecked:false },
  { value: 'CS', label: 'Cybersecurity',isChecked:false },
  { value: 'FCS', label: 'Fullstack Cybersecurity',isChecked:false },
  { value: 'ICT', label: 'ICT',isChecked:false },
  { value: 'DM', label: 'Digital Marketing', isChecked:false},
  { value: '.NET', label: 'ASP.NET CORE',isChecked:false},
  { value: 'PJ', label: 'Python/Django',isChecked:false },
];






export const SignUpComp = () => {
  const [isNext, setIsNext] = useState(false);
  const [isClick, setIsClick] = useState(false);

  // const [states, dispatch] = useReducer(registerReducer, initialState);

  const [fullName, setFullName] = useState("");
  const [phone_num, setPhoneNum] = useState<string|undefined>("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [matricNo, setMatricNo] = useState("");
  const [selectedCourse,setSelectedCourse]=useState<OptionType[]>([]);
  const [courses, setCourses] = useState<OptionType[]>(courseOptions);
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Handle checkbox selection
  const handleCheckboxChange = (val: string) => {
    console.log({val});
    
    const updatedCheckboxes = courses.map(item=>{
      if(item.value===val){
        return {...item,isChecked:!item.isChecked}
      }else{
        return item
      }
    });
    
    
 
    setCourses(updatedCheckboxes);
  };

  console.log(courses);
  
  
  const handleCountryChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
    setCountry(event.target.value);
    console.log(countryStates(event.target.value))
    setStateOptions(countryStates(event.target.value)); // Reset state when country changes
  };
;

  const handleStateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setState(e.target.value);
  };
 

 
  console.log({country,state,courses});
  


  

  
   const sendSignUp=async ()=>{
   
    
    try{
      console.log('request sending...');
      const selectedItems = courses.filter(item => item.isChecked);
      const newCourses=selectedItems.map(item=>item.value)
   

     const data= {fullName,
     address,
     dateOfBirth ,
     country,
     state,
     gender,
     matricNo,
     phoneNumber:phone_num,
     email,
     courses:newCourses ,
     password}


     console.log({data});
     
     const response=await axios.post('http://localhost:8000/api/v1/auth/register',JSON.stringify(data),{  headers: {
      'Content-Type': 'application/json', 
    },
    timeout: 50000,
    withCredentials: false,
  })
    console.log('request sent');
  console.log({response});
  
    }catch (error: any) {
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
            <div className="signup-input-box">
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Fullname</p>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="signup-input"
                />
              </div>
              <div className="signup-inpt-2 signup">
                <p className="signup-text">Address</p>
                <input
                  type="text"
                  name=""
                  placeholder="Your home address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="signup-input"
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
                />
              </div>
              <div className="signup-inpt-4 signup">
                <p className="signup-text">Nationality</p>

                <select
        value={country}
        onChange={handleCountryChange}
        className="signup-input"
      >
        <option value="" disabled>Select Country</option>
        
        {countries?.map(item=><option key={item.code} value={item.code}>{item.name}</option>)}
      </select>
              </div>
             
              <div className="signup-inpt-5 signup">
                <p className="signup-text">State of Origin</p>
               <select name="" id="" className="signup-input" onChange={handleStateChange}>
                <option value="">""</option>
               {stateOptions?.map(item=><option key={item} value={item}>{item}</option>)}
                
              
               </select>
      
    
              </div>
              <div className="signup-inpt-6 signup">
                <p className="signup-text">Gender</p>
               <select name="" id="" value={gender} onChange={(e:{ target: { value: React.SetStateAction<string>; }; })=>setGender(e.target.value)}>
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
              {/* <div className="signup-inpt-6">
                <p className="signup-text">Courses</p>
                <div  className="signup-input">
                  <p>select</p>
               </div>
              
              </div> */}
           

           <div className="checkbox-list">
      <button className="icon-btn" onClick={() => setIsVisible(!isVisible)}>
        <i className="fas fa-list"></i>
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
              <label htmlFor={`checkbox-${checkbox.value}`}>{checkbox.label}</label>
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

import React, { useReducer, useState } from "react";
import "./SignUpComp.css";
import Select, { ActionMeta, MultiValue, SingleValue, StylesConfig } from "react-select";
import { getCountries, getStates } from "country-state-picker";
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
    label: "",
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

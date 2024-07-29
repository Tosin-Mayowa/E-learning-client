import React, { useReducer, useState } from "react";
import "./SignUpComp.css";
import Select, { SingleValue } from "react-select";
import { getCountries, getStates } from "country-state-picker";
import registerReducer from "../../reducer/registerReducer";

const initialState = {
  fullName: "",
  stateVal: null,
  country: {
    value: "",
    label: "",
    color: "",
  },
  email: "",
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
export interface IOption {
  value: string;
  label: string;
  color: string;
}
export const SignUpComp = () => {
  const [isNext, setIsNext] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [stateOptions, setStateptions] = useState([]);
  const options: IOption[] = getCountries().map(
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
  const [states, dispatch] = useReducer(registerReducer, initialState);
  const colorStyles = {
    control: (styles: any, { isFocused }: any) => {
      return {
        ...styles,
        marginTop: "0.5rem",
        height: "3rem",
        fontSize: "15px",
        lineHeight: "22px",
        background: "rgba(6, 0, 137, 0.05)",
        borderRadius: "8px",
        borderColor: isFocused ? "#F9C567" : "",
        color: "#fff",
      };
    },
  };
  const {
    fullName,
    stateVal,
    country,
    email,
    gender,
    dateOfBirth,
    matricNo,
    address,
    password,
  } = states;

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-nested-wrapper">
          <div className="signup-logo"></div>
          <div className="signup-progress-bar"></div>
          <div className="signup-personal-info-box"></div>
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
                  onChange={(selectedOption) => {
                    dispatch({ type: "SET_COUNTRY", payload: selectedOption });
                    console.log("Selected test:", "testing");
                    if (selectedOption !== null) {
                      const states = getStates(selectedOption.value)?.map(
                        (state: string) => ({
                          value: state,
                          label: state,
                          color: "#fff",
                        })
                      );

                      setStateptions(states);
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
                  onChange={(selectedOption: SingleValue<OptionType>) =>
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
                  onChange={(selectedOption: SingleValue<OptionType>) => {
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
              <div className="signup-inpt-1 signup">
                <p className="signup-text">Phone Number</p>
                <input
                  type="text"
                  name=""
                  placeholder="Enter your Phone Number"
                  value=""
                  className="signup-input"
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

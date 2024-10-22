import { MultiValue, SingleValue } from "react-select";
import requestClient from "../config/axiosInstance";
import { handleError } from "../lib/utilities";
import { MultiOptionType, OptionType } from "../Components/SignUpComp/SignUpComp";


export type IData = {
    fullName: string;
    phoneNumber:string;
  address: string;
  state: SingleValue<OptionType> | MultiValue<MultiOptionType>;
  country: SingleValue<OptionType>|MultiValue<MultiOptionType>;
  email: string;
  password: string;
  dateOfBirth:string;
  matricNo:string;
  courses: MultiValue<MultiOptionType>,

}


 


export const signUpApi = async ({
    fullName,
    phoneNumber,
  address,
  state,
  country,
  email,
  password,
  dateOfBirth,
  matricNo,
  courses,
  }: IData) => {
    return await requestClient
      .post(`/auth/register`, {
fullName,
 phoneNumber,
  address,
  state,
  country,
  email,
  password,
  dateOfBirth,
  matricNo,
  courses,
      })
      .catch((err) => {
        return handleError(err)
      })
  }
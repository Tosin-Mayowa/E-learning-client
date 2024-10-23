import { MultiValue, SingleValue } from "react-select";
import requestClient from "../config/axiosInstance";
import { handleError } from "../lib/utilities";



// export type IData = {
//     fullName: string;
//     phoneNumber:string|undefined;
//   address: string;
//   state: string;
//   country: SingleValue<OptionType>|MultiValue<MultiOptionType>;
//   email: string;
//   password: string;
//   dateOfBirth:string;
//   matricNo:string;
//   courses: MultiValue<MultiOptionType>,
// gender:SingleValue<OptionType> | MultiValue<MultiOptionType>
// }


 


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
  gender
  }:any) => {
    try {
        return await requestClient.post(`/auth/register`, JSON.stringify({
          fullName,
           phoneNumber,
            address,
            state,
            country,
            email,
            password,
            dateOfBirth,
            matricNo,
            courses,gender
                }))   
    } catch (err) {
        handleError(err as { response: { data: any; status: any; headers: any }; request: any; message: any; config: any });
    }
     
  }
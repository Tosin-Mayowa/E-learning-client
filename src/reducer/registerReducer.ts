
import { MultiValue, SingleValue } from "react-select";
import { OptionType,MultiOptionType } from "../Components/SignUpComp/SignUpComp";

type IRegister={
    fullName:string,
    stateVal:SingleValue<OptionType>|MultiValue<MultiOptionType>,
    country:SingleValue<OptionType>|MultiValue<MultiOptionType>,
    email:string,
    courses:MultiValue<MultiOptionType>;
    gender: SingleValue<OptionType>|MultiValue<MultiOptionType>,
    dateOfBirth:string,
    matricNo:string,
    address:string,
    password:string,
    phone_num:string|undefined
  }

  type RegisterAction =
  | { type: 'SET_FULL_NAME'; payload: string }
  | { type: 'SET_ADDRESS'; payload: string }
  | { type: 'SET_PHONE_NUM'; payload: string | undefined }
  | { type: 'SET_STATE_VAL'; payload: SingleValue<OptionType>|MultiValue<MultiOptionType> }
  | { type: 'SET_COUNTRY'; payload: SingleValue<OptionType>|MultiValue<MultiOptionType>}
  | { type: 'SET_GENDER'; payload: SingleValue<OptionType>|MultiValue<MultiOptionType> }
  | { type: 'SET_MATRIC_NO'; payload: string }
  | { type: 'SET_DATE_OF_BIRTH'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_COURSES'; payload:MultiValue<MultiOptionType> }
  | { type: 'RESET'; payload: Partial<IRegister> };





 
   

const registerReducer = (state: IRegister, action: RegisterAction): IRegister => {
    if (action.type === 'SET_FULL_NAME') {
      return { ...state, fullName: action.payload };
    }
   
    if (action.type === 'SET_COURSES') {
      return { ...state, courses: action.payload };
    }
   
    if (action.type === 'SET_ADDRESS') {
      return { ...state, address: action.payload };
    }
    if (action.type === 'SET_STATE_VAL') {
      return { ...state, stateVal: action.payload };
    }
    if (action.type === 'SET_COUNTRY') {
      return { ...state, country: action.payload };
    }
    if (action.type === 'SET_PHONE_NUM') {
      return { ...state, phone_num: action.payload };
    }
    if (action.type === 'SET_MATRIC_NO') {
      return { ...state, matricNo: action.payload };
    }
  
    if (action.type === 'SET_DATE_OF_BIRTH') {
        return { ...state, dateOfBirth: action.payload };
      }

    if (action.type === 'SET_GENDER') {
      return { ...state, gender: action.payload };
    }
    if (action.type ==='SET_EMAIL') {
      return { ...state, email: action.payload };
    }
    if (action.type === 'SET_PASSWORD') {
      return { ...state, password: action.payload };
    }
  
    if (action.type === 'RESET') {
      return { ...state, ...action.payload };
    }
  
    return state;
  };
  export default registerReducer;
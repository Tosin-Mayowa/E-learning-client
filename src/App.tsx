import "./App.css";
import LandingPage from "./pages/landingPage";
import "@fontsource/manrope";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import EmailVerification from './Components/EmailVerification/EmailVerification'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import '@fortawesome/fontawesome-free/css/all.css';

// import Class from './pages/Class'
// import Course from './pages/Course'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'
// import Overview from './pages/Overview'
// import TestExam from './pages/TestExam'


function App() {
  return (
    <>
      {/* <Overview/>  */}
      {/* <SignUp /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>

    {/* <SignUp/> */}
   {/* <Overview/>  */}
   {/* <Course /> */}
   {/* <TestExam/> */}
   {/* <Login/> */}
   {/* <EmailVerification/> */}

    </>
  );
}

export default App;

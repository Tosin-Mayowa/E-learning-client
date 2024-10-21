import "./App.css";
import LandingPage from "./pages/landingPage";
import "@fontsource/manrope";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Overview/>  */}
      {/* <SignUp /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

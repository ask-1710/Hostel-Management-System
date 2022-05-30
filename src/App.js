import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HomePageStud from "./components/HomePageStud";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Temporary from "./components/Temporary";
import OutpassStudent from "./components/OutpassStudent" ;
import OutpassForm from "./components/OutpassForm";

function App() {
  // const [userType, setUserType] = useState("") ;

  return (
    <div className="App">
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePageStud />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/temporary" element={<Temporary />} />
          <Route path="/outpass" element={<OutpassStudent />} />
          <Route path='/outpass/apply' element={<OutpassForm/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

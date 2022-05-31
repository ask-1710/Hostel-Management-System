import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HomePageStud from "./components/HomePageStud";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Temporary from "./components/Temporary";
import OutpassStudent from "./components/OutpassStudent" ;
import OutpassForm from "./components/OutpassForm";
import RoomForm from './components/RoomBooking' ;
import VerifyOutpass from './components/VerifyOutpass' ;

function App() {
  // const [userType, setUserType] = useState("") ;

  return (
    <div className="App">
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<HomePageStud loggedIn={false}/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/temporary" element={<Temporary />} />
          <Route path="/outpass" element={<OutpassStudent />} />
          <Route path='/outpass/apply' element={<OutpassForm/>} />
          <Route path='/outpass/verify' element={<VerifyOutpass/>} />
          <Route path='/rooms' element={<RoomForm/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

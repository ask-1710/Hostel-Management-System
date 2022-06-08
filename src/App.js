import "./App.css";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import HomePageStud from "./components/HomePageStud";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Temporary from "./components/Temporary";
import OutpassForm from "./components/OutpassForm";
import RoomForm from './components/RoomBooking' ;
import VerifyOutpass from './components/VerifyOutpass' ;
import MakeAnnouncements from "./components/MakeAnnouncements";
import MessBillUpload from "./components/MessBillUpload";
import CourierUpload from './components/CourierUpload';
import VerifyRoomRequests from './components/VerifyRoomRequests' ;

function App() {
  // const [userType, setUserType] = useState("") ;

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path='/home' element={<HomePageStud/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/temporary" element={<Temporary />} />
          <Route path='/outpass/apply' element={<OutpassForm/>} />
          <Route path='/outpass/verify' element={<VerifyOutpass/>} />
          <Route path='/makeannouncements' element={<MakeAnnouncements/>} />
          <Route path='/rooms' element={<RoomForm/>}/>
          <Route path='/messbill/upload' element={<MessBillUpload/>}/>
          <Route path='/courier/upload' element={<CourierUpload/>}/>
          <Route path='/rooms/verify' element={<VerifyRoomRequests/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

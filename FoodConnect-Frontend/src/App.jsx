import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import SignUp from "./Component/SignUp";
import Foodlist from "./pages/Foodlist";
import Connect from "./pages/Connect";
import Address from "./Component/Address";
import Availability from "./Component/Availablity";
import Request from './Component/Request'
import SignIn from './Component/SignIn'
import CaputurePhoto from "./Component/CaputurePhoto";
import AddressDonor from "./Component/AddressDonor";
import  { useState, createContext } from "react"

export const MyContext = createContext();

function App() {
  const [storeSignUpData, setStoreSignUpData] = useState("");
  
  return (
      <MyContext.Provider value={{ storeSignUpData, setStoreSignUpData }}>
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/list" element={<Foodlist />} />
            <Route path="/CapturePhoto" element={<CaputurePhoto />} />
            <Route path="/get-address" element={<Address />} />
            <Route path="/get-address-donor" element={<AddressDonor />} />
            <Route path="/request-food" element={<Request />} />
            <Route path="/show-availability" element={<Availability />} />
            <Route path="/request-food" element={<Request />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
      </MyContext.Provider>
  );
}

export default App;

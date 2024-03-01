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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/list" element={<Foodlist />} />
          <Route path="/get-address" element={<Address></Address>}> </Route>
          <Route path="/request-food" element={<Request></Request>}></Route>
          <Route path="/show-availability" element={<Availability></Availability>}></Route>
          <Route path="/request-food" element={<Request></Request>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

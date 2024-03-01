import React, { useState } from "react";
import "../index.css";
import "../pages/Registration.css";
import axios from "axios";
import logo from "../assets/imgs/logo-f1.png";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const nav = useNavigate();
  const [inpval, setinpval] = useState({
    name: "",
    email: "",
    no: "",
    address: "",
    category: null,
    desc: "",
  });

  const handlechange = (e) => {
    setinpval({
      ...inpval,
      [e.target.name]: e.target.value,
    });
    console.log(setinpval);
  };

  const handlecache = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://foodfill.onrender.com/api", {
      name: inpval.name,
      email: inpval.email,
      no: inpval.no,
      address: inpval.address,
      category: inpval.category,
      desc: inpval.desc,
    });
    nav("/");

    if (res) {
      alert("data added");
    } else {
      alert("error");
    }

    setinpval({
      name: "",
      email: "",
      no: "",
      address: "",
      category: "",
      desc: "",
    });
  };

  return (
    <>
      <section className="sub-header">
        {/* <div className="home-ico">
          <a href="index.html">
            <i className="fa fa-home"></i>
          </a>
        </div> */}
        <nav>
          <a href="index.html" className="flx">
            <i>
              <img src={logo} height="70px" alt="" />
            </i>
          </a>
        </nav>
        <h1>Join Us To Change The World</h1>
      </section>
      <br />
      <br />
      <section className="contact-us">
        <center>
          <h1>
            Registration <span className="red">Form</span> <br />
            <br />
          </h1>
        </center>

        <div className="row">
          <div className="con-col">
            <form action="form-handler.php" method="post">
              <input
                type="text"
                name="name"
                onChange={handlechange}
                placeholder="Enter your name"
                required
              />
              <input
                name="email"
                type="email"
                onChange={handlechange}
                placeholder="Enter your email address"
                required
              />
              <input
                type="Number"
                name="no"
                onChange={handlechange}
                placeholder="Mobile Number"
                required
              />
              <input
                type="text"
                name="address"
                onChange={handlechange}
                placeholder="address"
                required
              />
              <select onClick={handlechange} name="category" id="">
                <option value="-1">Select Your Role</option>
                <option value="NGO">NGO</option>
                <option value="Food Donor">Food Donor</option>
                <option value="Food Receiver">Food Receiver</option>
                <option value="Hospital">Hospital</option>
                <option value="Waste Collector">Waste Collector</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                name="desc"
                onChange={handlechange}
                placeholder="enter brief description of your food"
                required
              />
              <button
                type="submit"
                onClick={handlecache}
                className="btn red-btn pad"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer">
        <h4>About US</h4>
        <p className="par">
          This Website Food Waste Management system can assist in collecting the
          leftover food from hotels & restaurants to distribute among those in
          need. NGOs that are helping poor communities to battle against
          starvation & malnutrition can raise a request for food supply from
          restaurants through this application. Once the request is accepted,
          the NGOs can collect the food from the restaurants for its
          distribution. In this way this android-based food waste management
          system will help restaurants to reduce food waste and will help in
          feeding the poor and needy people.
        </p>
        <p>
          Made with
          <i className="fa fa-heart-o"></i> by quadHackers
        </p>
      </section>
    </>
  );
};

export default Registration;

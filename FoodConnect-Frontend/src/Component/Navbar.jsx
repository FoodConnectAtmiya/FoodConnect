import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo-f1.png";
function Navbar() {
  return (
    <div>
        <nav>
          <Link to="/" className="flx">
            <i>
              <img src={logo} height="70px" alt="" />
            </i>
          </Link>
          <div className="links" id="nav-links">
            <i className="fa fa-times"></i>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/post">Facilities</Link>
              </li>
              <li>
                <Link to="/review">Reviews</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                {/* {(!localStorage.getItem("loggedInDonor") || !localStorage.getItem("loggedInOrganization")) && <Link to="/signup">
                  <span className="btn">Sign-Up</span>
                </Link>} */}
                {(!localStorage.getItem("loggedInDonor") && !localStorage.getItem("loggedInOrganization")) && <Link to="/signup">
                  <span className="btn">Sign-Up</span>
                </Link>}
              </li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
    </div>
  )
}

export default Navbar
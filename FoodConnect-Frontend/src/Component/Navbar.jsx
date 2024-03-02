import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo-f1.png";
function Navbar() {
  return (
    <div>
        <nav>
          <a className="flx">
            <i>
              <img src={logo} height="70px" alt="" />
            </i>
          </a>
          <div className="links" id="nav-links">
            <i className="fa fa-times"></i>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#post">Facilities</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <Link to="/signup">
                  <span className="btn">Sign-Up</span>
                </Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
    </div>
  )
}

export default Navbar
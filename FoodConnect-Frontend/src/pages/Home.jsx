import React from "react";
import "../index.css";
import vid from "../assets/vids/home.mp4";
import logo from "../assets/imgs/logo-f1.png";
import About from "./About";
import Service from "./Service";
import Post from "./Post";
import Review from "./Review";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="header" id="home">
        <video autoPlay muted loop id="myVideo">
          <source src={vid} type="video/mp4" />
        </video>
        <nav>
          <a className="flx">
            <i>
              <img src={logo} height="70px" alt="" />
            </i>
          </a>
          <div className="links" id="nav-links">
            <i className="fa fa-times" onclick="hidemanu()"></i>
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
                <a href="#post">Posts</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <Link to="/signup" onclick="togglePopup()">
                  <span className="btn">Sign-Up</span>
                </Link>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars"></i>
        </nav>
        <div className="text-box">
          <h1>Food shouldn't be wasted</h1>
          <h1 className="red">FoodFill</h1>
          <p className="txt-q" id="txt-q">
            A step towards hunger elimination.
          </p>
          <a className="btn">Visit us to know more</a>
        </div>
      </section>

      <div>
        <About />
      </div>

      <div>
        <Service />
      </div>

      <div>
        <Post />
      </div>

      <div>
        <Review />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

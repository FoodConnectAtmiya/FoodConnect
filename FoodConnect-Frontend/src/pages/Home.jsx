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
import Navbar from "../Component/Navbar";
const Home = () => {
  return (
    <>
      <section className="header" id="home">
        <video autoPlay muted loop id="myVideo">
          <source src={vid} type="video/mp4" />
        </video>
        <Navbar/>
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

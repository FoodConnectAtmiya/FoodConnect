import React from "react";
import "../index.css";
import del from "../assets/imgs/del.jpg";
import van from "../assets/imgs/van.jpg";
import pack from "../assets/imgs/pack.jpg";
const Post = () => {
  return (
    <>
      <section className="facilities" id="post">
        <h1>Our Facilities</h1>
        <p> To take cognizance of social, ethical and environmental issues.</p>
        <div className="row">
          <div className="f-col">
            <img src={del} alt="" />
            <h3>Onplace Service</h3>
            <p>
            Providing on-place services is all about bringing help right where it's needed. At FoodConnect, we're committed to making sure your donations and support reach their destination without hassle. With our on-place services, we come to you, making it easy to donate food or receive assistance. Whether it's picking up surplus food or delivering meals to those in need, we're there every step of the way.
            </p>
          </div>
          <div className="f-col">
            <img src={van} alt="" />
            <h3>Transportation</h3>
            <p>
            Getting food where it needs to go is super important. That's why we're all about making sure your generous donations get to people who could really use them, fast and easy. With FoodConnect, we've got it all figured out. We work hard to make sure your food gets picked up and delivered quickly and safely. So, when you donate, you're not just giving food, you're giving hope. Thanks for being awesome!
              
            </p>
          </div>
          <div className="f-col">
            <img src={pack} alt="" />
            <h3>Packaging</h3>
            <p>
            Packaging your food donations is like wrapping up a gift of kindness. At FoodFill, we understand the importance of keeping your donations safe and fresh. That's why we take care to package everything securely, so it arrives just as delicious as when you donated it. Whether it's in a box or a reliable container, we make sure your food is ready to make someone's day. Thanks for packaging your kindness with us!
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;

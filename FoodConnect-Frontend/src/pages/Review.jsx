import React from "react";
import "../index.css";
// import user1 from "../assets/imgs/user1.jpg";
import user2 from "../assets/imgs/user2.jpg";

const Review = () => {
  return (
    <>
      <section className="test" id="review">
        <h1>What Our Clients Says</h1>
        <p>Trusted by happy clients.</p>
        <div className="row">
          <div className="t-col">
            <img src={user2} alt="" />
            <div>
              <p>
                The team is well organised and arrived within 1 hour of making 
                the call about donation. They administered the food , came in
                their own vehicle n gathered food in own utensils ..hasslefree
                food pick up.. definitely would suggest for others to use this
                NGO if you have untouched safe food to donate
              </p>
              <h3>Saurav</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="t-col">
            <img src={user2} alt="" />
            <div>
              <p>
                It is a fantastic job..It is also not easy to do this kind of
                work bcz nowasdays ppl always busy with thier work untill they
                didn't hv a time to think abt others..so, whatever you guys did
                is outstanding..May god bless you all always.
              </p>
              <h3>Priyansh</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;

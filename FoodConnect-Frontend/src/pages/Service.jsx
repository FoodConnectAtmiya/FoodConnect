import React from "react";
import "../index.css";
const Service = () => {
  return (
    <>
      <section className="course" id="service">
        <h1>Services We Offer</h1>
        <p> To be very helpfull for the NGOs and other Authorities</p>
        <div className="row">
          <div className="course-col">
            <h3>Collecting Food</h3>
            <p>
              When anyone fills up the form to donate the food, we contact them
              and collect the food from them to deliver it to the needy poeple.
            </p>
          </div>
          <div className="course-col">
            <h3>Providing Food</h3>
            <p>
              The food we collect from the donors, we distribute it to the needy
              poeple based on thier previous locations.
            </p>
          </div>
          <div className="course-col">
            <h3>Make Fertilizer</h3>
            <p>
              The food which is left out due to some reasons, we give it to the
              farmers who utilize it to make the organic decompose from it.
            </p>
          </div>
        </div>
        <center>
          <a href="/list">
            <div className="btn red-btn">LIST</div>
          </a>
        </center>
      </section>
    </>
  );
};

export default Service;

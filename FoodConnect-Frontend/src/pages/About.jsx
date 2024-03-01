import React from "react";
import "../index.css";
import Ab from "../assets/imgs/ab.jpg";

const About = () => {
  return (
    <>
      <section className="about-us" id="about">
        <center>
          <h1>
            About <b className="red">hackFood</b>
          </h1>
        </center>
        <div className="row">
          <div className="about-col">
            <p className="paraa pt-0">
              This Website Food Waste Management system can assist in collecting
              the leftover food from hotels & restaurants to distribute among
              those in need. NGOs that are helping poor communities to battle
              against starvation & malnutrition can raise a request for food
              supply from restaurants through this application. Once the request
              is accepted, the NGOs can collect the food from the restaurants
              for its distribution. In this way this android-based food waste
              management system will help restaurants to reduce food waste and
              will help in feeding the poor and needy people.
            </p>
            <div className="p-link">
              <div className="s-btn">Waste</div>
              <div className="s-btn">Food</div>
              <div className="s-btn">Over Production</div>
              <div className="s-btn">Hotels</div>
              <br />
              <div className="s-btn">NGOs</div>
              <div className="s-btn">Home Waste</div>
              <div className="s-btn">Expired</div>
            </div>
            <p className="paraa">
              In this system, we have tried to reduce restaurant food wastage by
              giving waste food to NGOs. NGOs will raise a request, in case of
              any leftover food restaurants have. This request is sent to the
              restaurant manager of that particular restaurant. The NGO Manager
              then approves the request and assigns it to one of the NGO
              employees for takeaway and forwards the request to the restaurant.
              The leftover food at the restaurant can be given to NGOs at the
              end of the day. The admin can track the history of restaurants and
              NGOs for the leftover foods.
            </p>
            <p className="paraa">
              <div className="red">
                <b>Advantages</b>
              </div>
              Benefits will be both the restaurant (reducing food wastage), and
              the needy Keep track of wastage food for restaurant User can play
              role in saving food wastage and help the needy
            </p>
            <div className="mission-t red">Mission</div>

            <div className="mission mmm">
              <ul>
                <li>
                  <p>To be very helpfull for the NGOs and other Authorities</p>
                </li>

                <li>
                  <p>
                    Trying to connect more and more people in this campaign to
                    save and protact our mother earth.
                  </p>
                </li>

                <li>
                  <p>
                    To take cognizance of social, ethical and environmental
                    issues.
                  </p>
                </li>
              </ul>
            </div>

            <a href="/register">
              <div className="btn red-btn">Join Us Now</div>
            </a>
          </div>
          <div className="about-col">
            <figure>
              <img src={Ab} className="di" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

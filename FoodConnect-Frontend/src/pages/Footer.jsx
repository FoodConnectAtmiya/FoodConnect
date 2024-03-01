import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <>
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
        {/* <div className="icons">
          <div className="fa fa-facebook"></div>
          <div className="fa fa-twitter"></div>
          <div className="fa fa-instagram"></div>
          <div className="fa fa-linkedin"></div>
        </div> */}
        <p>
          Made with
          <i className="fa fa-heart-o">_</i>
          by quadHackers
        </p>
      </section>
    </>
  );
};

export default Footer;

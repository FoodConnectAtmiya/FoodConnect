import React from "react";
const Popup = () => {
  return (
    <>
      <section>
        <div className="popup" id="popup-1">
          <div className="content">
            <div className="close-btn">×</div>
            <div className="wrap">
              <h1>
                Sign <span className="red">Up</span>
              </h1>
              <div className="input-field">
                <input placeholder="Email" className="validate" />
              </div>
              <div className="input-field">
                <input placeholder="Password" className="validate" />
              </div>
              <div className="btn btn-g">Sign in</div>
              <p>
                Don't have an account? Than Login with{" "}
                <a href="/signup.html">Google</a>
              </p>

              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popup;

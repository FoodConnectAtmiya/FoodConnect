import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./../index.css";
import { useDispatch } from "react-redux";
import { loginOrganizationAsync } from "../ReduxAPIs/mainSlice";
function SignIn() {
  const nav = useNavigate();
  const dispatch  = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    dispatch(loginOrganizationAsync(data));
  };

  return (
    <>
      <section className="pop-sec">
        <div className="content pop">
          <div>
            <div className="wrap">
              <h1>
                Sign <span className="red">In</span>
              </h1>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <select name="role" id="role" placeholder="select your role">
                  <option value="organization">Organization</option>
                  <option value="donor">Food Donor</option>
                </select>
                <div className="input-field">
                  <input
                    placeholder="Email"
                    className="validate"
                    //   onChange={(e) => setemail(e.target.value)}
                    //   value={email}
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "Invalid Email Adress",
                      },
                    })}
                  />
                  {/* {errors} */}
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                {/* <div className="input-field">
                  <input
                    placeholder="Phone Number"
                    className="validate"
                    //   onChange={(e) => setPhoneNumber(e.target.value)}
                    //   value={phoneNumber}
                    {...register("phoneNumber", {
                      required: true,
                      pattern: {
                        value: /\b^[789]\d{9}$\b/gi,
                        message: "invalid phone number",
                      },
                    })}
                  />
                  {errors.phoneNumber && <p>Invalid Phone Number</p>}
                </div> */}
                <div className="input-field">
                  <input
                    placeholder="Password"
                    className="validate"
                    type="password"
                    //   onChange={(e) => setpassword(e.target.value)}
                    //   value={password}
                    {...register("password", { required: true })}
                  />
                </div>
                <button className="btn btn-g" type="submit">
                  Sign In
                </button>
                <p className="text-white">
                  Want to sign up?{" "}
                  <Link to="/signup">
                    <p className="underline">Sign Up</p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;

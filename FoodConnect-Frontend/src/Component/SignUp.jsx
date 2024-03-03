import { React, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { addOrganizationAsync, addDonorAsync } from "../ReduxAPIs/mainSlice";
import { useDispatch } from "react-redux";
// import {storeSignUpDataToRedux} from "../ReduxAPIs/mainSlice";

// import {useHistory} from "react-router-dom";
import "./../index.css";


function SignUp() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // const {storeSignUpData,setStoreSignUpData}=useContext(MyContext);

  // const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    // console.log(data.role);

    if (data.role == "organization") {
      dispatch(addOrganizationAsync(data));
    }
    else {
      dispatch(addDonorAsync(data));
    }
    console.log("777")
  }

  return (
    <>
      {/* {errors && console.log(errors)} */}
      <section className="pop-sec">
        <div className="content pop">
          <div>
            <div className="wrap">
              <h1>
                Sign <span className="red">Up</span>
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field full-width">
                  <select name="role" id="role" className="mb-2 full-content" {...register("role")}>
                    <option value="organization" >Organization</option>
                    <option value="donor">Food Donor</option>
                  </select>
                </div>
                <div className="flex">

                  <div className="input-field">
                    <label htmlFor="city">Email</label><br />
                    <input
                      placeholder="Email"
                      className="validate"
                      // onChange={(e) => setEmail(e.target.value)}
                      // value={email}
                      {...register("email", { required: true, pattern: { value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "Invalid Email Adress" } })}
                    />
                    {errors.email && <p role="alert">{errors.email.message}</p>}
                  </div>
                  <div className="input-field">
                    <label htmlFor="city">Phone Number</label><br />
                    <input
                      placeholder="Phone Number"
                      className="validate"
                      // onChange={(e) => setPhoneNumber(e.target.value)}
                      // value={phoneNumber}
                      {...register("phoneNumber", { required: true, pattern: { value: /\b^[789]\d{9}$\b/gi, message: "invalid phone number" } })}
                    />
                    {errors.phoneNumber && <p>Invalid Phone Number</p>}
                  </div>
                </div>
                <div className="full-width">
                  <div className="input-field full-content">
                    <label htmlFor="city" >password</label><br />
                    <input
                      placeholder="Password"
                      className="validate full-content"
                      type="password"
                      // onChange={(e) => setPassword(e.target.value)}
                      // value={password}
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>

                <div className='mb-2 input-field full-width' >
                  <label htmlFor="name" >Organization Name</label><br />
                  <input placeholder="Name of Organization" className="validate full-content" required type="text" id="name" name="name" autoComplete="name" enterKeyHint="next" {...register("name")} />
                </div>
                <div className='mb-2 input-field full-width'>
                  <label htmlFor="street-address">Street address</label><br />
                  <input placeholder="Street address" className="validate full-content" type="text" id="street-address" name="street-address" autoComplete="street-address" required enterKeyHint="next" {...register("address")}></input>

                </div>
                <div className="flex">

                  <div className='mb-2 input-field'>
                    <label htmlFor="city">city</label><br />
                    <input placeholder="City" className="validate" required type="text" id="city" name="city" autoComplete="address-level2" enterKeyHint="next" {...register("city")} />
                  </div>
                  <div className='mb-2 input-field'>
                    <label htmlFor="postal-code">ZIP code </label><br />
                    <input placeholder="ZIP or postal code" required className="postal-code validate" id="postal-code" name="postal-code" autoComplete="postal-code" enterKeyHint="next" {...register("pinCode")} />
                  </div>
                </div>
                <center>
                  <button className="btn btn-g" type="submit">
                    Sign Up
                  </button>

                </center>

                <center>

                  <div className="text-white" id="already">Already have an account?
                    <Link to="/login" ><p className="underline">Login</p></Link>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

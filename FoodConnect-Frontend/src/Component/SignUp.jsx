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
      // nav("/get-address");
    }
    else {
      dispatch(addDonorAsync(data));

      // nav("/get-address-donor");
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
                <div className="input-field">
                  <select name="role" id="role" className="mb-2" {...register("role")}>
                    <option value="organization" >Organization</option>
                    <option value="donor">Food Donor</option>
                  </select>
                </div>
                <div className="input-field">
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
                  <input
                    placeholder="Phone Number"
                    className="validate"
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    // value={phoneNumber}
                    {...register("phoneNumber", { required: true, pattern: { value: /\b^[789]\d{9}$\b/gi, message: "invalid phone number" } })}
                  />
                  {errors.phoneNumber && <p>Invalid Phone Number</p>}
                </div>
                <div className="input-field">
                  <input
                    placeholder="Password"
                    className="validate"
                    type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    // value={password}
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="text-white" id="already">Already have an account?
                  <Link to="/login" ><p className="underline">Login</p></Link>
                </div>
                <div className='mb-2'>
                  <label htmlFor="name">Name Of Organization:</label><br />
                  <input required type="text" id="name" name="name" autoComplete="name" enterKeyHint="next" {...register("name")} />
                </div>
                <div className='mb-2'>
                  <label htmlFor="street-address">Street address:</label><br />
                  <input type="text" id="street-address" name="street-address" autoComplete="street-address" required enterKeyHint="next" {...register("address")}></input>

                </div>
                <div className='mb-2'>
                  <label htmlFor="postal-code">ZIP or postal code (optional):</label><br />
                  <input className="postal-code" id="postal-code" name="postal-code" autoComplete="postal-code" enterKeyHint="next" {...register("pinCode")} />
                </div>
                <div className='mb-2'>
                  <label htmlFor="city">City:</label><br />
                  <input required type="text" id="city" name="city" autoComplete="address-level2" enterKeyHint="next" {...register("city")} />
                </div>
                <button className="btn btn-g" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

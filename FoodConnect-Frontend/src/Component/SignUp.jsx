import {React, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import {useDispatch} from "react-redux";
// import {storeSignUpDataToRedux} from "../ReduxAPIs/mainSlice";
import {useContext} from "react";
import {MyContext} from "../App";
// import {useHistory} from "react-router-dom";
import "./../index.css";


function SignUp() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const {storeSignUpData,setStoreSignUpData}=useContext(MyContext);

  // const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    // console.log(data.role);
   
    if(data.role == "organization"){
      console.log("jdkjfakld");
      setStoreSignUpData(data);
      console.log(storeSignUpData)
      nav("/get-address");
    }
    else{
      console.log("12345");
      nav("/get-address-donor");
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
              <form  onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("email", {required: true, pattern: {value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "Invalid Email Adress"}})}
                />
                {errors.email && <p role="alert">{errors.email.message}</p>}
              </div>
              <div className="input-field">
                <input
                  placeholder="Phone Number"
                  className="validate"
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  // value={phoneNumber}
                  {...register("phoneNumber", {required: true, pattern: {value: /\b^[789]\d{9}$\b/gi, message: "invalid phone number"}})}
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
                  {...register("password", {required: true})}
                />
              </div>
              <button className="btn btn-g" type="submit">
                Sign Up 
              </button>
              <div className="text-white" id="already">Already have an account? 
              <Link to="/login" ><p className="underline">Login</p></Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

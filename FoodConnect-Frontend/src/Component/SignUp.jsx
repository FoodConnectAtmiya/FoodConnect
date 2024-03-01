import React, { useState } from "react";
import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import "./../index.css";
function SignUp() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    console.log(data)
  } 

  return (
    <>
      <section className="pop-sec">
        <div className="content pop">
          <div>
            <div className="wrap">
              <h1>
                Sign <span className="red">Up</span> 
              </h1>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
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
              <div className="btn btn-g">
                Sign Up 
              </div>
              <p className="text-white">Already have an account? <Link to="/login" ><p className="underline">Login</p></Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

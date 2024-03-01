import React, { useState } from "react";
import { auth } from "./config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import "./../index.css";
function SignUp() {
  const nav = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
                Sign <span className="red">In</span> 
              </h1>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <select name="role" id="role">
                    <option value="organization">Organization</option>
                    <option value="donor">Food Donor</option>
                </select>
              <div className="input-field">
                <input
                  placeholder="Email"
                  className="validate"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={email}
                  {...register("email", {required: true, pattern: {value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi, message: "Invalid Email Adress"}})}
                />
                {/* {errors} */}
                {errors.email && <p>{errors.email.message}</p>}

              </div>
              <div className="input-field">
                <input
                  placeholder="Phone Number"
                  className="validate"
                //   onChange={(e) => setPhoneNumber(e.target.value)}
                //   value={phoneNumber}
                  {...register("phoneNumber", {required: true, pattern: {value: /\b^[789]\d{9}$\b/gi, message: "invalid phone number"}})}
                />
                {errors.phoneNumber && <p>Invalid Phone Number</p>}
              </div>
              <div className="input-field">
                <input
                  placeholder="Password"
                  className="validate"
                  type="password"
                //   onChange={(e) => setpassword(e.target.value)}
                //   value={password}
                  {...register("password", {required: true})}
                />
              </div>
              <button className="btn btn-g" type="submit"> 
                Sign In
              </button>
              <p className="text-white">Want to sign up? <Link to="/signup" ><p className="underline">Sign Up</p></Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

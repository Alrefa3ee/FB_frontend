import React from "react";
import "./Register.css";



const Register = () => {
    return(
      <div className="reg">
      <div className="wrapper">
      

      <span className="bg-animate2"></span>
      <div className="form-box-r register">  
  
      <h2>Sign Up</h2>
      <form action="">
        <div className="input-box-r">
          <input type="text" name="" id="" />
          <label >Name</label>
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box-r">
          <input type="text" name="" id="" />
          <label >Email</label>
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box-r">
          <input type="text" name="" id="" />
          <label htmlFor="Password">Password</label>
          <i className="bx bx-lock-alt"></i>
        </div>
        <button className="btn" type="submit">
        Sign Up
        </button>
      </form>
  
      </div>
      <div className="info-text register">
            <h2>welcome back</h2>
            <p>

              {/* short url tool text */}

              Short Url Tool
              is a free tool to shorten a URL or reduce a link. Use our URL Shortener to create a shortened link making it easy to remember.
              
            </p>
          </div>
          </div></div>
    )
  }
export default Register;  
import React from 'react'
import "./main.css"
export const Login = () => {
  return (
    <div class="tab-pane fade in" id="login">
    <h2 class="text-uppercase text-center"> Log in</h2>
    <form id="login">
      <div class="form-group">
        <label> Your Email<span class="req">*</span> </label>
        <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address." autocomplete="off"/>
        <p class="help-block text-danger"></p>
      </div>
      
      <div class="form-group">
        <label> Password<span class="req">*</span> </label>
        <input type="password" class="form-control" id="password" required data-validation-required-message="Please enter your password" autocomplete="off"/>
        <p class="help-block text-danger"></p>
      </div>


        <div className='mrgn-30-top'>
            <button className="btn btn-larger btn-block" type="submit">
            Login
            </button>

        </div>
    </form>
    </div>

  )
}


export default Login
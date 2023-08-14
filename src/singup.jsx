import React from 'react'

export const Singup = () => {
  return (

    <form id="signup">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label>First Name<span class="req">*</span> </label>
            <input type="text" class="form-control" id="first_name" required data-validation-required-message="Please enter your name." autocomplete="off"/>
            <p class="help-block text-danger"></p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="form-group">
            <label> Last Name<span class="req">*</span> </label>
            <input type="text" class="form-control" id="last_name" required data-validation-required-message="Please enter your name." autocomplete="off"/>
            <p class="help-block text-danger"></p>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label> Your Email<span class="req">*</span> </label>
        <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address." autocomplete="off"/>
        <p class="help-block text-danger"></p>
      </div>
      <div class="form-group">
        <label> Your Phone<span class="req">*</span> </label>
        <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number." autocomplete="off"/>
        <p class="help-block text-danger"></p>
      </div>
      <div class="form-group">
        <label> Password<span class="req">*</span> </label>
        <input type="password" class="form-control" id="password" required data-validation-required-message="Please enter your password" autocomplete="off"/>
        <p class="help-block text-danger"></p>
      </div>
      <div class="mrgn-30-top">
        <button type="submit" class="btn btn-larger btn-block"/>
        Sign up
        </button>
      </div>

      </form>

  )
}


export default Singup
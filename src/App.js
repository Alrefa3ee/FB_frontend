import React from 'react'
import Login from './login'
// import Signup from './signup'
import './main.css'
export const App = () => {
  return (
<div id="form">
  <div class="container">
    <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-md-8 col-md-offset-2">
      <div id="userform">
        <ul class="nav nav-tabs nav-justified" role="tablist">
          <li class="active"><a href="#signup"  role="tab" data-toggle="tab">Sign up</a></li>
          <li><a href="#login"  role="tab" data-toggle="tab">Log in</a></li>
        </ul>
        <div class="tab-content">

          {/* <Signup /> */}
          <Login />

        </div>
      </div>
    </div>
  </div>
</div>
  )
}


export default App
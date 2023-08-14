import React, { useState } from "react";
import "./home.css";
import Contant from "./Contant";


function Header() {
 
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


const handleEmail = (e)=>{
  setEmail(e.target.value);
}
const handlePassword = (e)=>{
  setPassword(e.target.value);
}


const handleSubmit = ()=>{
  const data = {email,password};
  console.log(data);
  fetch('http://localhost:5000/api/user/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  }).then(res=>{ return res.json()})
  .then(data=>{
    console.log(data)
    localStorage.setItem('Token',JSON.stringify(data['token']))
    window.location.href = '/user'
  })
}

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary head">
      <div class="container-fluid">
        {/* domain name */}

        <a class="navbar-brand head_title font_type" href="#">
          <i class="bx bx-link-alt icon_head"></i> Short Url{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form method="POST" class="d-flex form" role="login">
            <input
              class="form-control me-1"
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
              aria-label="Email"
            />
            <input
              class="form-control me-1"
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              aria-label="Email"
            />

          </form>
          <button
              class="btn btn-outline-success font_type"
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </button>
        </div>
      </div>
    </nav>
  );
}

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Contant />
    </div>
  );
};

export default Home;


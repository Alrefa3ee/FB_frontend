import React,{useState} from 'react'
import "./Login.css";


const Login = ()=>{

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
  // redirect to home page
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
    return(
      <div className='log'>
      <div className='wrapper'>
        <span className="bg-animate"></span>
        <div className="form-box login">
          <h2>login</h2>
          <form >
            <div className="input-box">
              <input type="text" value={email} onChange={handleEmail} name="email" id="emain" />
              <label >Email</label>
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="password" value={password} onChange={handlePassword} name="password" id="password" />
              <label htmlFor="Password">Password</label>
              <i className="bx bx-lock-alt"></i>
            </div>
          
          </form>
  <button className="btn" onClick={handleSubmit} type="submit">
              Login
            </button>
        </div>
        <div className="info-text login">
          <h2>welcome back</h2>
          <p>
            {/* short url login text */}
            Short Url is a free tool to shorten a URL or reduce a link. Use our
            URL Shortener to create a shortened link making it easy to remember.
          </p>
        </div>
  </div></div>
    )}


export default Login
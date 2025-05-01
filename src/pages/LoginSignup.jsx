import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

const [state, setState] = useState("Login")
const [formData, setFormData] = useState({
  username:"",
  password:"",
  email:""
})

const changeHandler = (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
}

const login = async () =>{
  console.log("Login Function Excecuted", formData);

  let responseData;
  try {
    const res = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password
      }),
    });
    responseData = await res.json();
    if (res.status === 200 && responseData.token) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.error || "Login failed");
    }
  } catch (err) {
    alert("Failed to connect to server");
  }
}

const signup = async () =>{
  console.log("Signup Function Excecuted", formData);

  let responseData;
  try {
    const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        email: formData.email
      }),
    });
    responseData = await res.json();
    if (res.status === 201) {
      alert("Signup successful! Please login.");
      setState("Login");
    } else {
      alert(responseData.error || "Signup failed");
    }
  } catch (err) {
    alert("Failed to connect to server");
  }
}
  return (
    <div className="loginsignup">
      <div className="loginisignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up"? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Adress" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">
          Already have an account : <span onClick={()=>{setState("Login")}}>Login Here</span>
        </p>:<p className="loginsignup-login">
          Create an account : <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
        </p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

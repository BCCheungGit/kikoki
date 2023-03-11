import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPass, setEnteredPass] = useState();


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var uname = enteredEmail;
    var pass = enteredPass;
    console.log(uname);
    console.log(pass);
    console.log('hi');
    // Find user login info
    Axios.post('http://localhost:5432/login', {
      email: uname,
      password: pass
    }).then((response) => {
      if (!response.data.message) 
      {
        setIsSubmitted(true);
      }
      else {
        setErrorMessages(response.data.message)
      }
    })
  }
    
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text"
          onChange={(e) => {setEnteredEmail(e.target.value)}}   
          required
          />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" 
          onChange={(e)=>{setEnteredPass(e.target.value)}}
          required 
          />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Welcome to Kikoki! Please Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;

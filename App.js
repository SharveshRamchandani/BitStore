import React from 'react';
import img from './Assets/Google.png';
import img1 from "./Assets/Group_1-removebg-preview.png";
import './App.css';


function App() {
  return (
    
    <div className="App">
    <div className="illustration">
          <img
            loading="lazy"
            src={img1}

            alt="Illustration"
          />
        </div>
      <div className="login-container">
        
        <div className="login-form">
          <div className="login-header">
            <h1>BIT STORES</h1>
            <h2><u>Login</u></h2>
          </div>
          <form>
            <div className="input-container">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-container">
              <input type="password" placeholder="Password" />
            </div>
            <a href="/" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="google-signin">
              <img
                src={img}
                alt="Google Logo"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import '../../assets/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateMobileNumber = () => {
    return mobileNumber.length === 10 && !isNaN(mobileNumber);
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if (email.trim() === '' || mobileNumber.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill the details');
      return;
    }

    if (!validateEmail()) {
      setErrorMessage('Invalid email format');
      return;
    }
    if (!validateMobileNumber()) {
      setErrorMessage('Invalid mobile number');
      return;
    }
    if (!validatePassword()) {
      setErrorMessage('Password should be at least 8 characters long');
      return;
    }
    

    // All validations passed, you can proceed with form submission
    setErrorMessage('');
    // Your form submission logic goes here
  };

  return (
    <>
    <Navi/>
    <div style = {{ backgroundColor : "white"}}>
      
      
      <div className="main"  style ={{backgroundColor: "white"}} >
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleSubmit} >
            <label htmlFor="chk" aria-hidden="true" style={{ marginBottom: "6px" , color: "lightblue"}}>
              Sign up
            </label>
            <input style ={{width : "250px",height : "50%"}} 
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input style ={{width : "250px",height : "50%"}} 
              type="text"
              name=""
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required=""
            />
            <input style ={{width : "250px",height : "50%"}} 
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input style ={{width : "250px",height : "50%"}} 
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button style={{ color: "black" }}>Sign up</button>
            {errorMessage && <p style={{ textAlign: 'center',color: 'red' }}>{errorMessage}</p>}
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true" style={{ color: 'white' }} >
              Login
            </label>
            <input style ={{width : "250px",height : "50%"}} 
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input style ={{width : "250px",height : "50%"}} 
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button style={{ color: "black" }}>Login</button>
            {errorMessage && <p style={{ textAlign: "center", color: "red" }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;

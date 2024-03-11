import Axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/signup.css';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await Axios.post('http://localhost:8080/products/new', {
        name,
        email,
        password,
        roles: 'USER',
      });
      console.log(response.data);
      console.log('Signup successful');
      navigate('/Login'); 
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error signing up');
    }
  };

  return (
    <div style={{ paddingTop: "70px" }} className="flex justify-center items-center h-screen">
      <div style={{ width: "30%", paddingBottom: "15px" }} className="bg-white shadow-md border border-gray">
        <h1 className='text-3xxl text-center'>Register</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label style={{ padding: "15px" }} htmlFor="name" className="block text-gray text-sm font-bold ">
              Name:
            </label>
            <input style={{ height: "50%", width: "70%", marginLeft: "14%" }} type="text" required id="name" name="name" value={name} onChange={handleNameChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700" />
          </div>
          <div className="mb-4">
            <label style={{ padding: "15px" }} htmlFor="email" className="block text-gray text-sm font-bold "> Email: </label>
            <input style={{ height: "50%", width: "70%", marginLeft: "14%" }} type="email" required id="email" value={email} name="email" onChange={handleEmailChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700" />
          </div>
          <div className="mb-4">
            <label style={{ padding: "15px" }} htmlFor="password" className="block text-gray text-sm font-bold"> Password: </label>
            <input style={{ height: "50%", width: "70%", marginLeft: "14%" }} type="password" required value={password} id="password" name="password" onChange={handlePasswordChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700" />
          </div>
        
          <div className=" justify-center space-x-4 mt-4"> {/* flex container with space between children */}
            <center>
              {/* <Link to="/home"> */}
              <button type="submit" className='custom-btn'>SignUp </button>
            </center>
            <br/>
            <center>Already have an Account? <Link to="/login"> SignIn </Link></center> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

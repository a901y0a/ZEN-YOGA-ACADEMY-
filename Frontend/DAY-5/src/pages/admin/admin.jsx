import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/admin.css';

function Admin({
  email,
  pass,
  
  name,
  setEmail,
  setPass,
  
}) {
  const check = (e) => {
    e.preventDefault();
    if (pass === 'agalya') {
      setCheckPass(true);
    }
  };

  return (
    <>
    <div className='entire'>
    <div className="logmain">
      <div  style={{background:"transparent",marginTop:"23%",height:"70%",marginBottom:"20%"}}className="login">
        <form onSubmit={check}>
          <div>
        <img style={{width:'15%',height:"20%",marginBottom:"5%",marginLeft:"43%"}}src="https://cdn-icons-png.flaticon.com/128/2978/2978688.png"/>
        </div>
          <label style={{marginTop:"-15%",marginLeft:"10%",fontSize:'30px',color:"black"}} htmlFor="chk" aria-hidden="true">
             Admin Login
          </label>
         <br></br>
         <br></br>
          <input style={{width:"80%",height:"50%",marginLeft:"20%"}}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <input style={{width:"80%",height:"50%",marginLeft:"20%"}}
            type="password"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            required
          /><br></br><br></br>
          <div  style={{width:"50%"}} >
          <Link to = "/status"><button className="logbut">Login</button></Link>
          </div>
          <br></br>


        </form>
      </div>
    </div>
    </div>
  </>
  );
}



export default Admin;
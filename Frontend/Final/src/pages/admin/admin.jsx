import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/admin.css';

function Admin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [checkPass, setCheckPass] = useState(false);

  const check = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && pass === '12345') {
      setCheckPass(true);
    }
  };

  if (checkPass) {
   
    return <Link to="/Status"> <center style={{fontSize:"300%",marginTop:"15%",width:"100rem"}}> <b>Add Student Administration</b></center></Link>;
  }

  return (
    <>
      <div className='entire'>
        <div className="logmain">
          <div style={{ background: "transparent",  height: "70%", marginBottom: "-4%" ,marginRight:"35%"}} className="login">
            <form onSubmit={check}>
              <div>
                <img style={{ width: '15%', height: "20%", marginLeft: "50%" }} src="https://cdn-icons-png.flaticon.com/128/2978/2978688.png" alt="Admin Icon" />
              </div>
              <label style={{ marginLeft: "10%", fontSize: '30px', color: "black" }} htmlFor="chk" aria-hidden="true">
                Admin Login
              </label>
              <br></br>
            
              <input style={{ width: "80%", height: "50%", marginLeft: "20%" }}
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
              <input style={{ width: "80%", height: "50%", marginLeft: "20%" }}
                type="password"
                name="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
                required
              /><br></br><br></br>
              <div style={{ width: "50%" }} >
                <button type="submit" className="logbut">Login</button>
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

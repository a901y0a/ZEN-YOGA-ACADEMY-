import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/front.css';



  function Front () {
    return (
      <>
        

      <div className='agalya'>
<div className="hero--row">
        <div className="hero--wrapper">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          <b><strong><h1 style={{ color: 'black', fontSize: '10rem', width: '100%', margin: '0 auto' }}> ZEN  YOGA  </h1></strong></b>
          <div className='front'>
            <b><i>
            <h4 style={{color:"black"}}>
          <p >we don't just seek physical flexibility, but also flexibility of the mind and spirit. <br></br>
          It's about finding balance and harmony within ourselves and with the world around us."<br></br><br></br>
          where the whispers of our soul guide us towards inner harmony and wholeness.</p>
                    <p style={{color:"white",width: '100%'}}>"EMBRACE THE HERE AND NOW."</p></h4></i></b>
          <br></br><br></br>
          <div id="hero--buttons">
            <Link to = "/admin"><button id="finance-btn">   Admin Login</button></Link>
            <Link to = "/login"><button id="refer-btn"> Login/SignUp</button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
            
        
        
      
      
      </>
    );
  }

  export default Front;
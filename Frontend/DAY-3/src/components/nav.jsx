import React from 'react';
import '../assets/nav.css'; 

function Navi() {
  return (
    <div className="navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <a href="https://codepen.io/nitesh_29/full/NWvrPXr"><img src="https://cdn-icons-png.flaticon.com/128/2978/2978688.png" alt="" /></a><h5> Zen Academy</h5>
          <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav-shift" id="collapsibleNavbar">
            <ul className="navbar-nav NavItems">
              <li className="nav-item"><a className="nav-link" href="https://codepen.io/nitesh_29/full/NWvrPXr">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Our Course</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Apply Online</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Blogs</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="https://codepen.io/nitesh_29/full/RwZEwyM">Contact
                  Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navi;

import { Link } from "react-router-dom";
import "../assets/nav.css";

function Navi() {
  return (
    <nav>
      <div className="navbrand">
        <img className="navlogo" src="https://cdn-icons-png.flaticon.com/128/84/84145.png" alt="logo" />
        <div className="navbrand-text">
          <h6><b>ZEN YOGA</b></h6> 
        </div>
      </div>
      <div className="navlinks">
        <Link className="navele" to="/home">Home</Link>
        <Link className="navele" to="/about">About</Link>
        <Link className="navele" to="/contact">Contact</Link>
        <Link className="navele" to="/application">Apply Online</Link>
        <Link className="navele" to="/course">Courses</Link>
        <Link className="navele" to="/service">View Courses</Link>
        <Link className="navele" to="/feedback">Feedback</Link>
        <Link className="navele" to="/profile">Profile</Link>
        <Link className="navele" to="/">LogOut</Link>
      </div>
    </nav>
  );
}

export default Navi;

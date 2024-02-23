import { Link } from "react-router-dom";
import "../assets/nav.css";

function Navi() {
  return (
    <nav>
      <div><img  style ={{marginRight:"50%",width:"20%",height:"30%"}}className="navlogo" src="https://cdn-icons-png.flaticon.com/128/84/84145.png" alt="logo" /></div>
      <div className="navlinks">
      <h6 style={{fontFamily:"cursive",marginRight:"24%",fontStyle:"italic",fontWeight:"bold"}}> Zen Yoga</h6>
      <Link className="navele" to="/">Home</Link>
        <Link className="navele" to="/about">About</Link>
        <Link className="navele" to="/contact">Contact </Link>
        <Link className="navele" to="/application">Apply Online</Link>
        <Link className="navele" to="/profile">Profile</Link>
        <Link className="navele" to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navi;
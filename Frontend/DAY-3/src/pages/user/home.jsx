import React from 'react'
import '../../assets/home.css';
import { Link } from 'react-router-dom';


  function Home () {
    return (
        <div style={{backgroundColor:"white"}}>
            
        <link rel="icon" href="/J&A/image/J&A PNG 1.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admission Form||J&amp;A Academy</title>
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.css" />
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
                  <Link to = "/Navi"><li className="nav-item"><a className="nav-link" href="#">Blogs</a></li></Link>
                  <Link to = "/Login"><li className="nav-item"><a className="nav-link" href="#">Login</a></li></Link>

                  <li className="nav-item"><a className="nav-link" href="https://codepen.io/nitesh_29/full/RwZEwyM">Contact
                      Us</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* --------------------Admission Form-------------------- */}
        
          
        {/* --------------Subscribe---------------- */}
        <div className="subscribe-page" style = {{'height':"300px", 'marginTop':"-300px"}}>
          <div className="container">
            <div className="row">
              <div className="sub-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>For information on regular updates, batch launches, important announcements,
                  and specials
                  classes, please
                  subscribe to our site.</p>
                <div className="sub-email">
                  <input type="email" placeholder="Enter your Email Address" />
                  <a href="#">
                    <span><i className="fa fa-user-o" />Subscribe</span>
                    <span><i className="fa fa-user-o" />Subscribe</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer style={{backgroundColor:"black",width : "100%"}}>
          <div className="my-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-lg-3 footer-col-1">
                  <a href="index.html"><img src="https://static.wixstatic.com/media/56fad0_5ee659e18f014cd2a7179c0c5ff834f6~mv2.png/v1/fill/w_146,h_99,al_c,q_85,usm_0.66_1.00_0.01/56fad0_5ee659e18f014cd2a7179c0c5ff834f6~mv2.webp.png" alt="" /></a>
                  <div className="footer-logo">
                    <a href="https://www.youtube.com/channel/UCmPFR2rjxeiFacfbur1clZw?sub_confirmation=1" target="_blank"><i className="fa fa-youtube-play" /></a>
                    <a href target="_blank"><i className="fa fa-instagram" /></a>
                    <a href target="_blank"><i className="fa fa-facebook" /></a>
                    <a href target="_blank"><i className="fa fa-twitter" /></a>
                  </div>
                  <div className="telegram">
                    <a href="whatsapp://send?text=Hello! How are you? https://static.wixstatic.com/media/56fad0_361bb8bb862a4b9ea40420987dba04af~mv2.jpg/v1/fill/w_513,h_381,al_c,q_80,usm_0.66_1.00_0.01/56fad0_361bb8bb862a4b9ea40420987dba04af~mv2.webp" target="_blank"><i className="fa fa-whatsapp" /></a>
                    <a href="https://wa.me/+919096328528" target="_blank" type="button">WhatsApp</a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3 footer-col-2">
                  <h5>Quick Links</h5>
                  <ul>
                    <li><a href="https://codepen.io/nitesh_29/full/NWvrPXr">Home</a></li>
                    <li><a href>Blogs</a></li>
                    <li><a href>Our Course</a></li>
                    <li><a href>Study Material</a></li>
                    <li><a href="https://codepen.io/nitesh_29/full/gOxQEbX">Learning Videos</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3 footer-col-3">
                  <h5>Quick Links</h5>
                  <ul>
                    <li><a href="https://codepen.io/nitesh_29/full/qBXgoRd">FAQ</a></li>
                    <li><a href>Offers</a></li>
                    <li><a href>Events</a></li>
                    <li><a href="https://codepen.io/nitesh_29/full/eYEjodj">Admission Form</a></li>
                    <li><a href>Upcoming Events</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-lg-3 footer-col-4">
                  <h3>Contact Us</h3>
                  <div className="phone">
                    <a href="tel:+919680033244"><i className="fa fa-phone" /></a>
                    <a href="tel:+919680033244">+91-9680033244</a>
                  </div>
                  <div className="email">
                    <a href="mailto:supports@jangidandassociates.com"><i className="fa fa-envelope" /></a>
                    <a href="mailto:supports@jangidandassociates.com">supports@jangidandassociates.com</a>
                  </div>
                  <div className="address">
                    <a href="http://"><i className="fa fa-map-marker" /></a>
                    <a href="http://">Amravati-444605, Maharashtra, INDIA</a>
                  </div>
                 
                </div>
              </div>
              <hr />
              <div className="copyright">
                <a href>Terms &amp; Condition</a>
                <a href>Refund Policy</a>
                <p><i className="fa fa-copyright" /><span id="currentYear">2020</span>
                  jangidandassociates.com</p>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    );
  }

  export default Home;
import React from 'react';
import '../../assets/footer.css'; // Import footer CSS

function Footer() {
  return (
    <footer>
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
  );
}

export default Footer;

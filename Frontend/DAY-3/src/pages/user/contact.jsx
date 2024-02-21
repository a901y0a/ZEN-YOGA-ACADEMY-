import React from 'react';
import '../assets/contact.css'



  function Contact() {
    return (
        <section className="contact-page-section">
        <div className="container">
          <div className="sec-title">
            <div className="title"><h4>Contact Us</h4></div>
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/*Form Column*/}
              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">
                  {/*Contact Form*/}
                  <div className="contact-form">
                    <form method="post" action="sendemail.php" id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="name"  placeholder="Name" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="email" name="email"  placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="subject"  placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="phone"  placeholder="Phone" required />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea  style ={{height:"150px"}}name="message" placeholder="Massage" defaultValue={""} />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Contact Form*/}
                </div>
              </div>
              {/*Info Column*/}
              <div  style ={{height:"150px"}}className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2>Contact Info</h2>
                  <ul className="list-info">
                    <li><i className="fas fa-globe" />321 , Lorem Street , Hyderabad</li>
                    <li><i className="fas fa-phone" /> zenyogaaca@gmail.com &nbsp;&nbsp;    +41 7513200400</li>
                  </ul>
                  <ul className="social-icon-four">
                    <li className="follow">Follow on: </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style = {{height:"50px",width: "50px"}}src  ="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style = {{height:"50px",width: "50px"}}src  ="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style = {{height:"50px",width: "50px"}}src  ="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style = {{height:"50px",width: "50px"}}src  ="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Contact;

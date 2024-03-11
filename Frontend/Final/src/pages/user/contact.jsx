import axios from 'axios';
import React, { useState } from 'react';
import '../../assets/contact.css';
import Navi from '../../components/nav';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:8080/contact/add", {
          name: name,
          email: email,
          message: message
        });
        console.log("Response:", response.data);
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <Navi />
      <div className='Contactaa'>
        <section className="contact-page-section-new">
          <div className="sec-title">
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container">
            <div style={{ width: "150%", marginRight: "70%" }} className="row clearfix">
              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="contact-form">
                    <form onSubmit={handleSubmit} id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input style={{width:"110%"}}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input style={{width:"110%"}}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea
                            style={{ height: "150px" }}
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                          {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                        </div>
                      </div>
                    </form>
                    {success && (
                      <div className="success-message">Message sent successfully!</div>
                    )}
                  </div>
                </div>
              </div> <br></br>
              <div style={{ width: "50%" }} className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <br></br>
                  <h2>Contact Info</h2>
                  <ul className="list-info">
                    <li><i className="fas fa-globe" />321 , Lorem Street , Hyderabad</li>
                    <li><i className="fas fa-phone" /> zenyogaaca@gmail.com &nbsp;&nbsp; +41 7513200400</li>
                  </ul>
                  <ul className="social-icon-four">
                    <br></br>
                    <li className="follow">Follow on: </li>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style={{ height: "50px", width: "50px" }} src="https://cdn-icons-png.flaticon.com/128/3670/3670032.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style={{ height: "50px", width: "50px" }} src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style={{ height: "50px", width: "50px" }} src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                    <a href="#"><img style={{ height: "50px", width: "50px" }} src="https://cdn-icons-png.flaticon.com/128/145/145808.png" alt="Attila Nagy" /></a>&nbsp;&nbsp;&nbsp;
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;

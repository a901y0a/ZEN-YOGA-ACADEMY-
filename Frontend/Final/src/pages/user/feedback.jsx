import Axios from 'axios'; // Import Axios
import React, { useState } from 'react';
import '../../assets/feedback.css';
import Navi from '../../components/nav';

const Feedback = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post('http://localhost:8080/feedback/add', formData); // Axios POST request
      console.log('Feedback posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting feedback:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navi />
      <div style={{alignItems:"center"}} id="feed-main">
        <br />
        <h3>Feedback Form</h3>
        <div><img style={{ marginLeft: "80px", width: "60px", height: "60px", alignItems: "center" }} className="navlogo" src="https://cdn-icons-png.flaticon.com/128/10936/10936451.png" alt="logo" /></div>

        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleSubmit}>
            <p className="name">
              <input 
                name="name"
                type="text"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </p>
            <p className="email">
              <input 
                name="email"
                type="text"
                className="validate[required,custom[email]] feedback-input"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </p>
            <p className="text">
              <textarea 
                name="comment"
                className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Comment"
                value={formData.comment}
                onChange={handleChange}
              />
            </p>
            <div className="submitfeed">
              <input type="submit" defaultValue="POST COMMENT" placeholder="POST COMMENT" id="button-blue" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;

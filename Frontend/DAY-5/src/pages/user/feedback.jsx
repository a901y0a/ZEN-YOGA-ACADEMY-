import React from 'react';
import '../../assets/feedback.css';
import Navi from '../../components/nav';

const Feedback = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form data:', data);
  };

  return (
    <>
      <Navi />
      <div id="feed-main">
        <br></br>
        <h3>Feedback Form</h3>
        <div><img  style ={{marginLeft:"20px",width:"60px",height:"60px",alignItems:"center"}}className="navlogo" src="https://cdn-icons-png.flaticon.com/128/10936/10936451.png" alt="logo" /></div>

        
        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleSubmit}>
            <p className="name">
              <input
                name="name"
                type="text"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="Name"
                id="name"
              />
            </p>
            <p className="email">
              <input
                name="email"
                type="text"
                className="validate[required,custom[email]] feedback-input"
                id="email"
                placeholder="Email"
              />
            </p>
            <p className="text">
              <textarea
                name="text"
                className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Comment"
                defaultValue={''}
              />
            </p>
            <div className="submitfeed">
              <input type="submit" defaultValue="POST COMMENT" placeholder=" POST COMMENT"id="button-blue" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/home.css';
import Navi from '../../components/nav';

function Home() {
  return (
    <>
    <Navi/>
      <div className='agal'>
        <div className="hero--row">
          <div className="hero--wrapper">
            <div className="front-image">
              <img src="https://cdn-icons-png.flaticon.com/128/2982/2982214.png" alt="Attila Nagy" />
            </div>
            <strong><h1 style={{ color: 'black' }}>ZEN YOGA ACADEMY</h1></strong>
            <br></br>
            <div style={{fontFamily:"cursive",fontSize:"120%"}}className='para'>
              <b>
<p>we believe in the transformative power of yoga to nurture the mind, body, and spirit.<br></br> Our academy is a sanctuary for those seeking to deepen their practice and cultivate a sense of inner peace and well-being. </p> 
<p>Yoga is the art of living, the science of being  and unlock the secrets of inner peace and vitality.</p>                
  <p><strong>Inhale possibility, exhale doubt. Welcome to a world of limitless potential at Zen Yoga Academy.</strong></p>            
              </b>
              <br></br>
              <div id="hero--buttons">
                <button id="finance-btn"><Link to="/application">Book Admission</Link></button>
                <button id="refer-btn"><Link to="/course">Explore Courses</Link></button>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <br></br>
        <br></br>
        <div className="home">
          <br></br>
          <br></br>
          <br></br>
          <h2 className="services-title">WHAT DO I DO?</h2>
          <br></br>
          <div className="services">
            <div className="service">
              <h2 className="service-title">Meditation Guide</h2>
              <p className="service-text">
              Meditation is a practice that involves training the mind to focus and redirect thoughts, leading to a state of mental clarity, emotional calmness, and inner peace.              </p>
              <img src="https://media.istockphoto.com/id/1913259293/photo/beautiful-woman-practicing-padmasana-on-yoga-mat-on-wooden-pier-near-pond-space-for-text.webp?b=1&s=170667a&w=0&k=20&c=KIrLZrN3KO92Zds2DnXTvxEEGWH_S-UEY5ptrJiUnIA=" alt="" style={{height: "300px" }}/>
            </div>
            <div className="service">
              <h2 className="service-title">Mindful Eating</h2>
              <p className="service-text">
              Practicing mindfulness while eating is a fundamental principle of yoga. Pay attention to the taste, texture, and aroma of your food.               </p>
              <img src="https://media.istockphoto.com/id/1084423556/photo/vegetarian-lentil-salad-with-fried-cheese-greens-and-fresh-vegeables.webp?b=1&s=170667a&w=0&k=20&c=bhSlQOxeWuRwWkPBkymoRJqZ0ZrocD3Uqx5JUTzbu3Q=" alt="" style={{ height: "300px" }}/>
            </div>
            <div className="service">
              <h2 className="service-title">Prenatal and Postnatal Classes</h2>
              <p className="service-text">
              Whether you're pregnant or a new mother, prenatal and postnatal yoga classes offer valuable support for physical, emotional, and spiritual well-being during this transformative time.               </p>
              <img src="https://media.istockphoto.com/id/1730878050/photo/pregnant-woman-exercising-with-her-husband.webp?b=1&s=170667a&w=0&k=20&c=mYMKG8JoO2XZPyVyGYA2exFWjBJ6gn6pXZ9ZF9nEe6k=" alt="" style={{ height: "300px" }}/>
            </div>
          
          </div>
          <br></br>
          <br></br><div className="services">
            <div className="service">
              <h2 className="service-title">Online Yoga</h2>
              <p className="service-text">
              The  classes that incorporate elements of Zen philosophy and practices into their yoga sessions.
              </p>
              <img src="https://media.istockphoto.com/id/1220314025/photo/group-of-people-practicing-yoga-with-trainer-via-video-conference.webp?b=1&s=170667a&w=0&k=20&c=qFwCiH9GJqGfJ4OyE44IuDkOp0oloYsiTFzf9XPW_v0=" alt="" style={{ height: "300px" }}/>
            </div>
            <div className="service">
              <h2 className="service-title">Emotional Calmness</h2>
              <p className="service-text">
              Yoga encourages awareness of the mind-body connection, allowing individuals to recognize and process emotions stored in the body.               </p>
              <img src="https://media.istockphoto.com/id/872191096/photo/a-woman-with-cancer-is-sitting-in-a-wheelchair-she-walks-on-the-street-with-her-daughter-and.webp?b=1&s=170667a&w=0&k=20&c=r3IknknJK9yeUEckYPZaqgsv_qtitb1MIAGHRY2A0Ww=" alt="" style={{ height: "300px" }}/>
            </div>
            <div className="service">
              <h2 className="service-title">Weight Management</h2>
              <p className="service-text">
              oga can be a valuable component of a weight management plan, supporting both physical fitness and mental well-being.               </p>
              <img src="https://media.istockphoto.com/id/1355420777/photo/a-portrait-of-a-asian-fat-man-show-out-his-body-and-big-belly-concept-of-obesity.webp?b=1&s=170667a&w=0&k=20&c=h7OAgq7JWBkS46TDZ1_FWUj6r6foTzPlZLIWKEUlGp8=" alt="" style={{ height: "300px" }} />
            </div>
          </div>
          
        </div>
        <div className="youtube"> 
        <iframe width={560} height={315} src="https://www.youtube.com/embed/R9njw_Y8Ctk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
        <div  style={{width: "100%"}}className="footer-home">
        <a style={{ color: "white" }} href=""> CONTACT INFO </a><br></br>

          <a style={{ color: "white" }} href="tel:+919680033244">+91-9680033244</a><br></br>
          <a style={{ color: "white" }} href="mailto:supports@jangidandassociates.com">supports@zenyogaacademy.com</a><br></br>
          <a style={{ color: "white" }} href="http://">Amravati-444605, Maharashtra, INDIA</a>
          <br></br>
          @ all copy right reserved
        </div>
      </div>
    </>
  );
}

export default Home;

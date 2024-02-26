import React from 'react';
import '../../assets/about.css';
import Navi from '../../components/nav';

function About() {


  return (
    <>
    <Navi/>
    <div className = "top">
        <div>
          
        
        <main className="about">
          <div className="aboutaa">
            <section className="grid info">
            <center>
              <div className="column-xs-12 column-md-1">
                <div className="about">
                  <h1 className="section-heading">About Me</h1>
                </div>
              </div>
              <div  className="column-xs-12 column-md-4">
                <img style ={{marginLeft:"80%"}}src="https://media.istockphoto.com/id/1399722709/photo/young-woman-training-yoga-at-home.jpg?s=612x612&w=0&k=20&c=ZHGnMCpH_CRBrxKRasoGJmPz6DC3r2QAfyozGX3VnKk=" /> 
              </div>
              <br></br>
              <div className="column-xs-12 column-md-7">
             
                <div className="intro">
                  <h2> Zen Yoga Academy Gateway </h2>
                  <br></br>
                  <p>Zen Yoga Gateway is not just a yoga studio; it's a sanctuary where individuals embark on a transformative journey towards holistic well-being. </p>
                  <p>Nestled in the heart of serene landscapes, our studio offers a serene escape from the hustle and bustle of daily life. Here, we blend the ancient wisdom of yoga with contemporary practices to nurture the mind, body, and spirit.</p>
                  <p>At Zen Yoga Gateway, we believe that yoga is more than just physical exercise; it's a path to self-discovery and inner peace. Our experienced instructors guide students through a variety of yoga styles, meditation techniques, and mindfulness practices, allowing each individual to explore and deepen their practice at their own pace.</p>
                </div>
              </div>
              <div className="column-xs-12 column-md-7">
                <blockquote>
                  <h3>"Yoga is not about touching your toes, it's about what you learn on the way down.The attitude of gratitude is the highest yoga.Inhale the future, exhale the past.The pose begins when you want to leave it."</h3>
                </blockquote>
              </div>
              </center>
            </section>
          </div>
        </main>
        
      </div>
      </div>
            </>
  );
}

export default About;

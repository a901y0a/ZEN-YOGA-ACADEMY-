import React from 'react';
import '../../assets/course.css';
import Navi from '../../components/nav';
function Course(){
  
    return(
        <>
        <Navi/>
        <div>
        <div className='resource'>
      <br></br>
      <div className="containeraaa">
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://media.istockphoto.com/id/1499028370/photo/young-woman-relaxing-in-shavasana-or-corpse-yoga-pose-after-her-morning-fitness-routine.webp?b=1&s=170667a&w=0&k=20&c=k7Sm2rmP3hoPZlS6w_R_A8yZpxTWwmisuFzDfyJtd5o=" />
        </div>
        <div className="content">
          <h2>Yoga Nidra</h2>
        
          <p style={{fontSize: '90%'}}>
           A guided meditation technique practiced in a comfortable lying position to induce deep relaxation and mental clarity.
          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>

        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0aGElMjB5b2dhfGVufDB8fDB8fHww" />
        </div>
        <div className="content">
          <h2>Hatha Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Focuses on physical postures and breathing techniques to achieve balance and relaxation.
          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://images.unsplash.com/photo-1593811167565-4672e6c8ce4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWluJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        <div className="content">
          <h2>Yin Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Targets the deep connective tissues and fascia through passive, long-held poses to increase flexibility and release tension.
          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>

      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://images.unsplash.com/photo-1604431696980-07e518647bec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RvcmF0aXZlJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        <div className="content">
          <h2>Restorative Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Utilizes props to support the body in gentle postures, allowing for deep relaxation and stress relief.
          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://plus.unsplash.com/premium_photo-1667520070054-76a719280fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlbmF0YWwlMjB5b2dhfGVufDB8fDB8fHww" />
        </div>
        <div className="content">
          <h2>Prenatal Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Yoga courses specifically designed for pregnant women, providing safe and gentle exercises to support their physical and emotional well-being during pregnancy. 
          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
        
        
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://media.istockphoto.com/id/1388137253/photo/high-angle-view-of-a-mom-lying-on-an-exercise-mat-with-her-baby.webp?b=1&s=170667a&w=0&k=20&c=tRvrRp0CfciluL2w0_7p2CNZgn9Qc1N-RsnlrVjmzik=" />
        </div>
        <div className="content">
          <h2>Postnatal  Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Yoga courses tailored for new mothers, focusing on restoring strength and flexibility, relieving tension in the shoulders and back, and promoting relaxation and bonding with their baby.          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://media.istockphoto.com/id/1311044744/photo/happy-young-parents-and-little-children-doing-yoga-and-practicing-meditation-at-home.webp?b=1&s=170667a&w=0&k=20&c=578aCZ13G26bYu0yOAS5ne2CQPV5wIAfGMXUTcx3tHE=" />
        </div>
        <div className="content">
          <h2>Family Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Yoga courses that welcome participants of all ages, offering an opportunity for families to practice yoga together and strengthen their connection.</p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://media.istockphoto.com/id/996105696/photo/time-for-a-break.webp?b=1&s=170667a&w=0&k=20&c=J2j5nkw2rvYqT7UfpdN1ZbSVCqEgJqd5TYmp6Z91YbU=" />
        </div>
        <div className="content">
          <h2>Yoga Workshops & Seminars</h2>
          <p style={{fontSize: '90%'}}>
          National yoga organizations may organize workshops ,seminars featuring renowned yoga teachers, scholars, and experts.          </p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
      <div className="card" style={{color: 'black'}}>
        <div className="img-box">
          <img src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbnlhc2ElMjB5b2dhfGVufDB8fDB8fHww" />
        </div>
        <div className="content">
          <h2>Vinyasa Yoga</h2>
          <p style={{fontSize: '90%'}}>
          Emphasizes flowing sequences of poses coordinated with breath to build strength and flexibility.</p>
          <a href = "/payment"><button style={{backgroundColor:"lightblue"}}>Learn More</button> </a>
        </div>
      </div>
    </div>
       
      </div>
      </div>
      </>
    );

}
export default Course;



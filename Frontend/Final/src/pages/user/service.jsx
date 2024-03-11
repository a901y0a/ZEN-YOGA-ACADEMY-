import axios from "axios";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import '../../assets/service.css';
import Navi from "../../components/nav";
function Service()
{

    const handleSubmit = () => {
        try {
          const amountx = 250;
          var options = {
            key: "rzp_test_i1tLowNKXmrrLX",
            key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
            amount: amountx * 100,
            currency: "INR",
            name: "D-Portal",
            description: "for testing purpose",
            handler: function (response) {
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name: "DEEPAK",
              email: "deepakprabu1234@gmail.com",
              contact: "8754988838",
            },
            notes: {
              address: "Sri krishna college of Engineering and Technology",
            },
            theme: {
              color: "#3399cc",
            },
          };
    
          var pay = new window.Razorpay(options);
          pay.open();
        } catch (error) {
          console.error(error);
        }
      };
    const PlanCard = ({ name, description, image, charge }) => {
        return (
          <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{description}</p>
              <p className="card-text">{charge}</p>
              <button>Avail</button>
            </div>
          </div>
        );
      };
      
      PlanCard.propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        charge: PropTypes.number.isRequired
      };
    const token=localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] =   ` Bearer ${token}`;
    console.log("Token:", token);
    console.log("Headers:", axios.defaults.headers.common);
    const [cardData, setcardData] = useState([]);
    useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios.get('http://localhost:8080/api/services')
      .then(response => {
        setcardData(response.data.map(services => ({
          id: services.id,
          name:services.name,
          description: services.description,
          image: services.image,
          
          charge:services.charge
      })));
      })
      .catch(error => console.error("There was an error fetching the services!", error));
  };
    return(
        <>
        <Navi/>
        <div >
        <div className="scard" style={{marginLeft:"19%"}}>
    <img src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713366/mockup-graphics-i1iqQRLULlg-unsplash_gaiptu.jpg" alt="Image 1"></img>
    <p>Medical equipment and devices</p>
       </div>
       <div className="scard">
    <img src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713370/alexander-andrews-JYGnB9gTCls-unsplash_deduiw.jpg" alt="Image 2"></img>
    <p>Tele consultation</p>
     </div>
     <div className="scard">
    <img src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713366/brooke-lark-lcZ9NxhOSlo-unsplash_qd7mtl.jpg" alt="Image 1"></img>
    <p>Health support</p>
       </div>
       <div className="scard">
    <img src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1708713371/logan-weaver-lgnwvr-lK0l9pzxLps-unsplash_gto54q.jpg" alt="Image 2"></img>
    <p>Home care</p>
     </div>
     </div>
     <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw",marginTop:"5%"}}>
        <div>
            <h3>Oxygen Cylinder</h3>
            <ul>
                <li>Popular choice</li>
                <li>Quick delivery</li>
                <li>T&C Apply</li>
            </ul>
        </div>
        <div>
            <button style={{backgroundColor:"red",marginRight:"10%",width:"150px",height:"40px",borderRadius:"20px",border:"none",color:"white"}}>
                Book Service
            </button>
        </div>
     </div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw",marginTop:"5%"}}>
        <div>
            <h3>B P Instruments</h3>
            <ul>
                <li>Excellent quality</li>
                <li>Accurate reading</li>
                <li>T&C Apply</li>
            </ul>
        </div>
        <div>
            <button style={{backgroundColor:"red",marginRight:"10%",width:"150px",height:"40px",borderRadius:"20px",border:"none",color:"white"}} onClick={handleSubmit}>
                Book Service
            </button>
        </div>
     </div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw",marginTop:"5%"}}>
        <div>
            <h3>Gun Thermometer</h3>
            <ul>
                <li>Popular choice</li>
                <li>Quick delivery</li>
                <li>T&C Apply</li>
            </ul>
        </div>
        <div>
            <button style={{backgroundColor:"red",marginRight:"10%",width:"150px",height:"40px",borderRadius:"20px",border:"none",color:"white"}}>
                Book Service
            </button>
        </div>
     </div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     <div style={{display:"flex",justifyContent:"space-evenly",width:"100vw",marginTop:"5%"}}>
        <div>
            <h3>Digital Thermometer</h3>
            <ul>
                <li>Excellent quality</li>
                <li>Accurate reading</li>
                <li>T&C Apply</li>
            </ul>
        </div>
        <div>
            <button style={{backgroundColor:"red",marginRight:"10%",width:"150px",height:"40px",borderRadius:"20px",border:"none",color:"white"}}>
                Book Service
            </button>
        </div>
     </div>
     <div style={{border:"1px solid grey",width:"1300px",marginLeft:"7%"}}></div>
     
  <div className="app" style={{display:"flex",marginLeft:"7%"}}>
      {cardData.map((card, index) => (
        
        <PlanCard 
        key={index}
        name={card.name}
        description={card.description}
        image={card.image}
        charge={card.charge}
        />
        ))}
    </div>

        </>
    );
}
export default Service;
import React from 'react';
import '../../assets/payment.css';
import Navi from '../../components/nav';

function  Payment() {
    const handlePay = () => {
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

  


  return (
    <>
    <Navi/>
   
    <div className="background">
  <div className="container">
    <br></br>
    <br/>
    
    <div className="panel pricing-table">
      <div className="pricing-plan">
        
        <h2 className="pricing-header">Kids</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 10</li>
          <li className="pricing-features-item">
            class duration: 1 hour
          </li>
        </ul>
        <span className="pricing-price">₹2500</span>
        <a onClick={handlePay}  className="pricing-button">
          Pay
        </a>
      </div>
      <div className="pricing-plan">
       
        <h2 className="pricing-header">Teenagers</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 25</li>
          <li className="pricing-features-item">
          class duration: 2 hour
          </li>
        </ul>
        <span className="pricing-price">₹5000</span>
        <a onClick={handlePay} className="pricing-button is-featured">
          Pay
        </a>
      </div>
      <div className="pricing-plan">
       
        <h2 className="pricing-header">Adult</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Under the age of 70</li>
          <li className="pricing-features-item">
          class duration: 1 hour 30 mins

          </li>
        </ul>
        <span className="pricing-price">₹6000</span>
        <a onClick={handlePay}  className="pricing-button">
          Pay
        </a>
      </div>
    </div>
  </div>
</div>
</>
  
  );
}

export default Payment;
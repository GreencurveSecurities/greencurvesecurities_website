import React, { useState, useEffect } from 'react';
import './popup.css';
import emailjs from 'emailjs-com';
import axios from 'axios';

const SlidingPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', false);
        
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const data = {
      Name: e.target.name.value,
      Email: e.target.email.value,
      PhoneNumber: e.target.phone.value,
      PreferredMethodOfContact: e.target.mfa.value,
      InterestedServices: e.target.investedservice.value,
      InvestmentExperience: e.target.investedexperience.value,
      City: e.target.city.value,
      isContactForm: false
  }; 
  // console.log(data);
  axios.post('https://greencurvesecurities-server.vercel.app/contact/contactus', data)
    .then((result) => {
        console.log(result);
        }, 
        (error) => {
            console.log(error);
        }
    );
    e.target.reset();
    setShowPopup(false);

    
};
  


  return (
    <div className={`sliding-popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">
      <h2 className='popup-header'>Get in Touch!!!</h2>
        <form className='form' action="" onSubmit={sendEmail} >
        <input className='text' type="text" name="name" placeholder="Name" required />
        <input className='email' type="email" name="email" placeholder="Email" required />
        <input className='tel' type="number" name="phone" placeholder="Phone Number" required />
        <select className='select' name="method-for-apply" id="mfa" required>
          <option value="">Preferred Method of Contact</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        <select className='select' name="investedservice" id="invested-service" required>
          <option value="">Interested Services</option>
          <option value="stock-picks">Stock Picks</option>
          <option value="index-options">Index Options</option>
          <option value="unlisted-shares">Unlisted Shares</option>
        </select>
        <select className='select' name="investedexperience" id="invested-experience">
          <option value="">Investment Experience</option>
          <option value="beginner">Beginner (less than 1 Year)</option>
          <option value="intermediate">Intermediate (1-5 years)</option>
          <option value="advance">Advance (more than 5 Year)</option>
        </select>
        <select  className='select' name="city" id="cityDropdown">
          <option value="">Select a city</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Pune">Pune</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Kanpur">Kanpur</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Indore">Indore</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Patna">Patna</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Ludhiana">Ludhiana</option>
          <option value="Kochi">Kochi</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
        </select>
        <button className="button submit-btn" type="submit">Submit!</button>
        <button className="button close-btn" onClick={handleClose}>Close</button>
      </form>
      
      </div>
    </div>
  );
};

export default SlidingPopup;

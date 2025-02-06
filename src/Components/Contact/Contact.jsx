import React, { useState, useEffect } from 'react';
import './Contact.css';
import mail_icon from '/mail_icon.svg';
import location_icon from '/location_icon.svg';
import call_icon from '/call_icon.svg';
import github_icon from '/github.svg';
import linkedin_icon from '/linkedin.svg';
import instagram_icon from '/instagram.svg';
import facebook_icon from '/facebook.svg';

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [moveButton, setMoveButton] = useState(false); // State for button movement
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Check if all fields are filled and valid
    if (name && email && message) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(email)) {
        setSuccessMessage("Good to go...");
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage("Please enter a valid email address.");
      }
    } else {
      setSuccessMessage('');
      setErrorMessage('');
    }
  }, [name, email, message]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields and write a message.");
      return;
    }

    // Prepare the form data for submission
    const object = {
      name,
      email,
      message,
      access_key: "158987cd-4526-4858-9c8e-8a9338a4f5d3",
    };
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setErrorMessage("Failed to send message. Please try again.");
    }
  };



  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk...</h1>
          <p>Let’s Create Something Great Together!</p>
          <p>Feel free to reach out for any inquiries, collaborations, or just to say hello. I’d love to hear from you!</p>
          <div className="contact-details">
            <div className="details">
              <img src={mail_icon} alt="" /><p>dyanbashitha5@gmail.com</p>
            </div>
            <div className="details">
              <img src={call_icon} alt="" /><p>+94 76 393 2043</p>
            </div>
            <div className="details">
              <img src={location_icon} alt="Location" /><p>Rathmalana, Sri Lanka</p>
            </div>
            <div className="details">
              <a href="https://github.com/DhyanBSh" target="_blank" rel="noopener noreferrer">
                <img src={github_icon} alt="Github" /><p>Github</p>
              </a>
            </div>
            <div className="details">
              <a href="https://www.linkedin.com/in/dhyan-jayasinghe-697324228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} alt="LinkedIn" /><p>Dhyan Jayasinghe</p>
              </a>
            </div>
            <div className="details">
              <a href="https://www.instagram.com/dhyan_b_sh?igsh=amxxdTRmNTk4MW9s" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" /><p>dyan_b_sh</p>
              </a>
            </div>
            <div className="details">
              <a href="https://www.facebook.com/profile.php?id=100009085552244&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <img src={facebook_icon} alt="Facebook" /><p>Dhyan Bhashitha</p>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" name='name' value={name} onChange={handleChange} />

          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" name='email' value={email} onChange={handleChange} />

          <label htmlFor="">Message</label>
          <textarea name="message" rows="8" placeholder="How can I create your idea" value={message} onChange={handleChange}></textarea>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button
            type='submit'
            className={"contact-submit"}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

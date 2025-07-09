import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profile_img from '/profile_img.svg';

const Home = () => {
  const navigate = useNavigate(); // React Router hook
  const googleDriveLink = 'https://drive.google.com/file/d/1fCvvBFcDV7R-t0VfdkJOXHnchlmWKyBE/view?usp=sharing';

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      handleCloseModal();
    }
  };

  return (
    <div id='Home' className='hero'>
      {/* Tag */}
      <div className="open-for-work">
        <button onClick={scrollToContact}>OPEN FOR WORK</button>
      </div>
      
      <img src={profile_img} alt="profile" />
      <h1>I'm_<span>Dhyan_</span>Jayasinghe;</h1>
      <p>I am a <span>Software Engineering Undergraduate</span> and<span> Creative Professional</span> from <span>Sri Lanka</span>, passionate in <span>Full Stack Development, UI/UX Designing, Graphic Designing, Video Editing </span> and<span> Photography</span>. With a deep passion for visual storytelling, I create captivating web and creative designs and dynamic videos that connect with audiences, reflecting meticulous attention to detail, combining technical proficiency with an innovative approach to design. Whether it's crafting a brand identity or producing visually compelling content, I am dedicated to delivering high-quality results that leave a lasting impact.</p>
      <div className="hero-action">
        <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className="hero-resume">Download_CV</a>
      </div>
    </div>
  );
}

export default Home;

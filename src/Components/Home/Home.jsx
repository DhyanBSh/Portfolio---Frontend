import React from 'react';
import './Home.css';
import profile_img from '../../assets/profile_img.svg';


const Home = () => {
  // Replace with your actual Google Drive link
  const googleDriveLink = 'https://drive.google.com/file/d/1L7-s9TrM3j5sPer5PW8v2oo8rpTF3u63/view?usp=sharing';

  return (
    <div id='Home' className='hero'>
      <img src={profile_img} alt="profile" />
      <h1>I'm <span>Dhyan</span> Bhashitha</h1>
      <p>I am a <span>Software Engineering Undergraduate and Creative Professional</span> from Sri Lanka, specializing in <span>Graphic Designing, Video Editing and Photography</span>. With a deep passion for visual storytelling, I create captivating designs and dynamic videos that connect with audiences, reflecting meticulous attention to detail, combining technical proficiency with an innovative approach to design. Whether it's crafting a brand identity or producing visually compelling content, I am dedicated to delivering high-quality results that leave a lasting impact.</p>
      <div className="hero-action">
        <a href={googleDriveLink} target="_blank" rel="noopener noreferrer" className="hero-resume">Download CV</a>
      </div>
    </div>
  );
}

export default Home;

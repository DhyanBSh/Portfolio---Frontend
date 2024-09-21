import React from 'react';
import './Experience.css';
import experience_data from '../../assets/experience_data';

const Experience = () => {
  return (
    <div id='Portfolio' className='experience'>
      
      <div className="experience-title">
        <h1>Portfolio</h1>
      </div>
      
      <div className="experience-container">
        {experience_data.map((work, index) => (
          <a 
            key={index} 
            href={work.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="experience-item"
          >
            <img src={work.w_img} alt={work.w_name} className="experience-img" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;

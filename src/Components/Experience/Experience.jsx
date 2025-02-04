import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

import serviceImageWeb from '../../assets/exweb.svg'; // Replace with your image
import serviceImageUi from '../../assets/exui.svg';
import serviceImageLogo from '../../assets/exlogo.svg';
import serviceImagePoster from '../../assets/exposter.svg';
import serviceImageEvent from '../../assets/exflyer.svg';
import serviceImageVideo from '../../assets/exvideo.svg';
import serviceImageProduct from '../../assets/exproduct.svg';

const Experience = () => {
  const [currentImage, setCurrentImage] = useState(serviceImageWeb); // Initially set to the first image
  const navigate = useNavigate();

  const experiences = [
    { title: 'Web Development', description: 'Full stack web development', img: serviceImageWeb, path: '/projects/web-development' },
    { title: 'UI Designs', description: 'UI designs for web & mobile applications', img: serviceImageUi, path: '/projects/ui-designs' },
    { title: 'Logo Designs', description: 'Crafting unique, memorable logos...', img: serviceImageLogo, path: '/projects/logo-designs' },
    { title: 'Poster/Banner Designs', description: 'Creating impactful flyers...', img: serviceImagePoster, path: '/projects/poster-designs' },
    { title: 'Event Flyer Designs', description: 'Capturing the greatest moments...', img: serviceImageEvent, path: '/projects/event-flyers' },
    { title: 'Video Editing', description: 'Producing creative, high-quality videos...', img: serviceImageVideo, path: '/projects/video-editing' },
    { title: 'Product Designing', description: 'Producing creative models of products...', img: serviceImageProduct, path: '/projects/product-designing' },
  ];

  return (
    <div id="Experience" className="experience">
      <div className="experience-title">
        <h1>Portfolio</h1>
      </div>

      <div className="experience-container">
        {/* Left Image */}
        <div className="experience-image-container">
          <img src={currentImage} alt="Main Image" className="experience-main-image" />
        </div>

        {/* Right Side Cards */}
        <div className="experience-cards">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card"
              onMouseEnter={() => setCurrentImage(experience.img)} // Change image on hover
              onClick={() => navigate(experience.path)} // Redirect on click
            >
              <h2>{experience.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

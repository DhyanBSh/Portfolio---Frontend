import React, { useState } from 'react';
import './Services.css';
import closeIcon from '../../assets/close.png'; // Replace with your close icon path
import downloadIcon from '../../assets/download.png'; // Replace with your download icon path

import serviceImageWeb from '../../assets/WebDesignPackages.png'; // Replace with actual images for services
import serviceImageUi from '../../assets/UiDesignPackages.png';
import serviceImageLogo from '../../assets/LogoDesignPackages.png';
import serviceImagePoster from '../../assets/Poster_BannerDesignPackages.png';
import serviceImageEvent from '../../assets/EventDesignPackages.png';
import serviceImageVideo from '../../assets/VideoEditingPackages.png';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: 'Web Development', description: 'Full stack web development', img: serviceImageWeb },
    { title: 'UI Designs', description: 'UI designs for web & mobile applications', img: serviceImageUi },
    { title: 'Logo Designs', description: 'Crafting unique, memorable logos...', img: serviceImageLogo },
    { title: 'Poster / Banner Designs', description: 'Creating impactful flyers...', img: serviceImagePoster },
    { title: 'Event Flyer Designs', description: 'Capturing the greatest moments...', img: serviceImageEvent },
    { title: 'Video Editing', description: 'Producing creative, high-quality videos...', img: serviceImageVideo },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedService.img; // Use the URL of the image
    link.download = `${selectedService.title}.png`; // Set the desired download name
    link.click();
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact'); // Assuming the contact section has this ID
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      handleCloseModal(); // Close the modal after scrolling
    }
  };

  return (
    <div id='Services' className={`services`}>
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service" onClick={() => handleServiceClick(service)}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedService.img} alt={selectedService.title} />
            <div className="button-container">
              <button className="send-message" onClick={scrollToContact}>Send Message</button>
              <img src={downloadIcon} alt="Download" className="download-icon" onClick={handleDownload} />
            </div>
            <img src={closeIcon} alt="Close" className="close-icon" onClick={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

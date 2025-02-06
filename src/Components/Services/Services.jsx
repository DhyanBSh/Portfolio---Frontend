import React, { useState } from 'react';
import './Services.css';
import closeIcon from '/close.png';
import downloadIcon from '/download.png';

import serviceImageWeb from '/WebDesignPackages.png';
import serviceImageUi from '/UiDesignPackages.png';
import serviceImageLogo from '/LogoDesignPackages.png';
import serviceImagePoster from '/Poster_BannerDesignPackages.png';
import serviceImageEvent from '/EventDesignPackages.png';
import serviceImageVideo from '/VideoEditingPackages.png';
import serviceImageProduct from '/ProductDesignPackages.png';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: 'Web Development', description: 'Full stack web development', img: serviceImageWeb , pdfUrl: "https://drive.google.com/file/d/1w3iN1llEEfqAXQYETh8X_knv_bAFXx8j/view?usp=sharing"},
    { title: 'UI Designs', description: 'UI designs for web & mobile applications', img: serviceImageUi , pdfUrl: "https://drive.google.com/file/d/1myFWuvhWonfLfv197D-tPrDqkUm-vGnz/view?usp=sharing"},
    { title: 'Logo Designs', description: 'Crafting unique, memorable logos...', img: serviceImageLogo , pdfUrl: "https://drive.google.com/file/d/1iCsEi_HgnleRXIiCRpbJJFhnSKwEvTzQ/view?usp=sharing"},
    { title: 'Poster / Banner Designs', description: 'Creating impactful flyers...', img: serviceImagePoster , pdfUrl: "https://drive.google.com/file/d/14A25uTlBPvr97PdPN6gNaMcEZumTe2qZ/view?usp=sharing"},
    { title: 'Event Flyer Designs', description: 'Capturing the greatest moments...', img: serviceImageEvent , pdfUrl: "https://drive.google.com/file/d/1U38mhSDLD50gCSxl3pxj5dN6AV2VDOd1/view?usp=sharing"},
    { title: 'Video Editing', description: 'Producing creative, high-quality videos...', img: serviceImageVideo , pdfUrl: "https://drive.google.com/file/d/195L9-nsEUA_n1YeKy1ReKzlW-cWkSc0E/view?usp=sharing"},
    { title: 'Product Designs', description: 'Producing creative, 3D models...', img: serviceImageProduct , pdfUrl: "https://drive.google.com/file/d/1ROhcPBFNgHrCbTqqcrvPJfdNZvW4r43k/view?usp=sharing"},
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
    if (selectedService) {
      const link = document.createElement('a');
      link.href = selectedService.pdfUrl;
      link.download = `${selectedService.title}.pdf`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      handleCloseModal();
    }
  };

  return (
    <div id='Services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {services.map((service, index) => {
          // If it's the last row with only one service, center it
          const isLastRow = index >= Math.floor(services.length / 3) * 3;
          const isSingleItemInRow = isLastRow && (services.length % 3 === 1) && index === services.length - 1;

          return (
            <div
              key={index}
              className={`service ${isSingleItemInRow ? "centered-service" : ""}`}
              onClick={() => handleServiceClick(service)}
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          );
        })}
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

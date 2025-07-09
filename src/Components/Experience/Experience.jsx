import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";

// import serviceImageWeb from "/exweb.svg";
import serviceImageUi from "/exui.svg";
import serviceImageLogo from "/exlogo.svg";
import serviceImagePoster from "/exposter.svg";
import serviceImageEvent from "/exflyer.svg";
import serviceImageVideo from "/exvideo.svg";
import serviceImageProduct from "/exproduct.svg";

const Experience = () => {
  const [currentImage, setCurrentImage] = useState(serviceImagePoster);
  const [clickedCard, setClickedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    // {
    //   title: "Web_Development",
    //   description: "Full stack web development",
    //   img: serviceImageWeb,
    //   path: "/projects/web-development",
    // },
    {
      title: "UI_Designs",
      description: "UI designs for web & mobile applications",
      img: serviceImageUi,
      path: "/projects/ui-designs",
    },
    {
      title: "Logo_Designs",
      description: "Crafting unique, memorable logos...",
      img: serviceImageLogo,
      path: "/projects/logo-designs",
    },
    {
      title: "Poster/Banner_Designs",
      description: "Creating impactful flyers...",
      img: serviceImagePoster,
      path: "/projects/poster-designs",
    },
    {
      title: "Event_Flyer_Designs",
      description: "Capturing the greatest moments...",
      img: serviceImageEvent,
      path: "/projects/event-flyers",
    },
    {
      title: "Video_Editing",
      description: "Producing creative, high-quality videos...",
      img: serviceImageVideo,
      path: "/projects/video-editing",
    },
    {
      title: "Product_Designing",
      description: "Producing creative models of products...",
      img: serviceImageProduct,
      path: "/projects/product-designing",
    },
  ];

  const handleCardClick = (index, experience) => {
    if (isMobile) {
      if (clickedCard === index) {
        navigate(experience.path); // Navigate on second click
      } else {
        setCurrentImage(experience.img); // Change image on first click
        setClickedCard(index); // Set clicked card
      }
    } else {
      navigate(experience.path); // Directly navigate on desktop
    }
  };

  return (
    <div id="Experience" className="experience">
      <div className="experience-title">
        <h1>Portfolio</h1>
      </div>
      

      <div className="experience-container">
        {/* Left Image */}
        <div className="experience-image-container">
          <img
            src={currentImage}
            alt="Main Image"
            className="experience-main-image"
          />
        </div>

        {/* Right Side Cards */}
        <div className="experience-cards">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card"
              onMouseEnter={() => !isMobile && setCurrentImage(experience.img)}
              onClick={() => handleCardClick(index, experience)}
            >
              <h2>{experience.title}</h2>
              {/* Show overlay on first click */}
              {isMobile && clickedCard === index && (
                <div className="overlay">
                  <span>View_Projects</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

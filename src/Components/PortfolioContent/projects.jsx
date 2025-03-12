import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projects.css";

import logoImage from "/Dhyanlogo.svg";

//Project Images
import PixelWeb from "/PixelWeb.gif";
import BandaCurry from "/BandaCurry.gif";

import BabybobLogo from "/BabybobLogo.gif";
import BULogo from "/BULogo.gif";
import DramaLogo from "/DramaLogo.gif";
import IntimateLogo from "/IntimateLogo.gif";
import PhFLogo from "/PhFLogo.gif";
import PMIELogo from "/PMIELogo.gif";
import BigNutzLogo from "/BigNutzLogo.gif";

import ChocoBanner from "/ChocoBanner.gif";
import BusinessFlyers from "/BusinessFlyers.gif";
import ClassFlyers from "/ClassFlyers.gif";
import Magazines from "/Magazines.gif";
import SimpleEvents from "/SimpleEvents.gif";
import SpecialDays from "/SpecialDays.gif";
import SpecialEvents from "/SpecialEvents.gif";

import Events from "/Events.gif";
import Files from "/Files.gif";
import Invitations from "/Invitations.gif";

import Backdrop from "/Backdrop.gif";
import Commercial from "/Commercial.gif";
import Concert from "/Concert.gif";
import IntroVids from "/IntroVids.gif";
import ProjectVids from "/ProjectVids.gif";

import ThreeDImage from "/ThreeDImage.gif";
import ProductImage from "/ProductImage.gif";
import Tshirt from "/Tshirt.gif";
import WristBand from "/WristBand.gif";




const Projects = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  // Project Categories
/*
web-development
ui-designs
logo-designs
poster-designs
event-flyers
video-editing
product-designing
*/

  const dummyProjects = [
    

    {
      title: "Banda_Curry",
      description: "A Sri Lankan restourent based in Japan. The Design is inspired by the traditional Sri Lankan identity.",
      technologies: ["FIGMA, Canva, Adobe Photoshop"],
      image: BandaCurry,
      link:
        "https://drive.google.com/drive/folders/1_EM3Y2XAw8Z62H9p4iHG6mWfRsC-643_?usp=sharing",
      category: "ui-designs",
    },

    {
      title: "PixelWeb",
      description: "Web site for a small creative and web solution provider.",
      technologies: ["FIGMA"],
      image: PixelWeb,
      link:
        "https://drive.google.com/drive/folders/1akOyJeFWK6OSNkpYiXmFSPj4rlwg8tXx?usp=sharing",
      category: "ui-designs",
    },

    {
     
      title: "BaByBoB_Logo",
      description: "Logo for a small creative and web solution provider.",
      technologies: ["Adobe Photoshop, Adobe Illustrator, Canva"],
      image:
      BabybobLogo,
      link: "https://drive.google.com/drive/folders/1CABP66v9xLe7vIxX9ma7H7ieGySzir0W?usp=sharing",
      category: "logo-designs",
    },
    
    {
     
      title: "BeeU_Logo",
      description: "Logo for a small online clothing business.",
      technologies: ["Canva, Adobe Photoshop"],
      image:
        BULogo,
      link: "https://drive.google.com/drive/folders/1wU5Ly0MNChdJ_8OuObEYon5M-RAn7URv?usp=sharing",
      category: "logo-designs",
    },

    {
    
      title: "Drama_Logo",
      description: "A logo for the Drama club of KDU.",
      technologies: ["Adobe Photoshop"],
      image:
      DramaLogo,
      link:
        "https://drive.google.com/drive/folders/1h90JGeh0bLEd_fW7xul2IRIf6_lvrz5m?usp=sharing",
      category: "logo-designs",
    },

    {
      
      title: "Intimate_Photography_Logo",
      description: "A simple logo for a photographer.",
      technologies: ["Canva, Adobe Photoshop"],
      image:
      IntimateLogo,
      link: "https://drive.google.com/drive/folders/1VhTKFWXziOCILUnQgiTj-nlNUMUfPT_o?usp=drive_link",
      category: "logo-designs",
    },

    {
      
      title: "PhF_Logo",
      description: "A simple logo for a clothing business.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      PhFLogo,
      link: "https://drive.google.com/drive/folders/1Q2Ejk0a-nsAe3QU58B_4U07lz7UT9PD_?usp=drive_link",
      category: "logo-designs",
    },

    {
      title: "PMIE_Logo",
      description: "A simple logo for a association of an Advanced level Management students.",
      technologies: ["Adobe Photoshop"],
      image:
      PMIELogo,
      link: "https://drive.google.com/drive/folders/1GBaqaXpA0_tcXNvk6JC6DOq7a-LIuzfw?usp=drive_link",
      category: "logo-designs",
    },

    {
      title: "BigNutz_Logo",
      description: "A logo for a cashewnut brand.",
      technologies: ["Adobe Illustrator"],
      image:
      BigNutzLogo,
      link: "https://drive.google.com/drive/folders/1JCdzdk1x5PKbg-xnYg5gUY3C6qrG_zum?usp=sharing",
      category: "logo-designs",
    },

    {
      title: "Web_Banners",
      description: "A set of web banner adverticements for a chocolate product.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      ChocoBanner,
      link: "https://drive.google.com/drive/folders/1r6Cq_dkzWhmV0xyQWZ6sHw4eut_yoLnO?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Business_Ads_Posters",
      description: "An adverticements for the businesses.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      BusinessFlyers,
      link: "https://drive.google.com/drive/folders/1-0f6htWBysEU94jnneHjKmDYOq90K6iG?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Tuition_Class_Flyers",
      description: "Flyer designs for the tuition classes.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      ClassFlyers,
      link: "https://drive.google.com/drive/folders/1_sMS1xrY3at5YugUSXGAUyzDECHB915q?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Magazines",
      description: "Magazine & newsletter designs.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      Magazines,
      link: "https://drive.google.com/drive/folders/1JvDm7QajyNaN_v7WSFafllpBO3fRrWhm?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Simple_Events",
      description: "Creative designs for the simple events and projects.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      SimpleEvents,
      link: "https://drive.google.com/drive/folders/1RwocnAiB5XFrqU_TY8HVVy-dh6j_leo8?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Special_Day_Flyers",
      description: "Creative designs for the special days.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      SpecialDays,
      link: "https://drive.google.com/drive/folders/1ymhBHYUoJj7dfP6sXU8ClxraDH6P4vYm?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Special_Events",
      description: "Creative designs for the special events.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      SpecialEvents,
      link: "https://drive.google.com/drive/folders/1IfaGyM3sddO3ppoNx6Nd4TzKqAa5pr9c?usp=drive_link",
      category: "poster-designs",
    },

    {
      title: "Concert_PR",
      description: "Creative designs for the concerts and special events.",
      technologies: ["Adobe Photoshop"],
      image:
      SpecialEvents,
      link: "https://drive.google.com/drive/folders/1gtQU6vNoG7idxRFS-CaDU3HInNpICDTx?usp=drive_link",
      category: "event-flyers",
    },

    {
      title: "Event_PR",
      description: "Creative designs for the clong term events.",
      technologies: ["Adobe Photoshop"],
      image:
      Events,
      link: "https://drive.google.com/drive/folders/1gtQU6vNoG7idxRFS-CaDU3HInNpICDTx?usp=drive_link",
      category: "event-flyers",
    },

    {
      title: "File_Designs",
      description: "Creative file designs for the events and classes.",
      technologies: ["Adobe Photoshop"],
      image:
      Files,
      link: "https://drive.google.com/drive/folders/147UwO8zyzwBDX9ZstOJvv7cxsKycHA7n?usp=drive_link",
      category: "event-flyers",
    },

    {
      title: "Invitations_&_Tokens",
      description: "Creative invitations and agenda designs for the events.",
      technologies: ["Adobe Photoshop, Canva"],
      image:
      Invitations,
      link: "https://drive.google.com/drive/folders/1gQzmGsHufDArYe16sOU5obmHxkyR8TKi?usp=drive_link",
      category: "event-flyers",
    },

    {
      title: "Screen_Backdrops",
      description: "Creative backdrops and videos for the events.",
      technologies: ["Adobe After Effects, Adobe Premier Pro, Davinci Resolve"],
      image:
      Backdrop,
      link: "https://drive.google.com/drive/folders/1DysF-YMoZw14n7-RPmiXH_JSd2IJp4e3?usp=sharing",
      category: "video-editing",
    },

    {
      title: "Commercial",
      description: "Creative videos for the promotions and commercials.",
      technologies: ["Adobe After Effects, Adobe Premier Pro, Davinci Resolve"],
      image:
      Commercial,
      link: "https://drive.google.com/drive/folders/1mtKYkgw68Uz1kR-6M4xb-EpsFmwZ3_ns?usp=drive_link",
      category: "video-editing",
    },

    {
      title: "Concert_PR",
      description: "Creative videos for the promotions and commercials of concerts and musical events.",
      technologies: ["Adobe After Effects, Adobe Premier Pro, Davinci Resolve"],
      image:
      Concert,
      link: "https://drive.google.com/drive/folders/1_-tY69JL-Z0mYDVXWhU9nNBk-tFtlsHU?usp=drive_link",
      category: "video-editing",
    },

    {
      title: "Intro_Videos",
      description: "Creative videos for the introductions of events.",
      technologies: ["Adobe After Effects, Adobe Premier Pro, Davinci Resolve"],
      image:
      IntroVids,
      link: "https://drive.google.com/drive/folders/18KVrwPNUNRQChqlLqQ3oENLcmX0x0B5g?usp=drive_link",
      category: "video-editing",
    },

    {
      title: "Project_Promotion_Videos",
      description: "Creative videos for the introductions and promotions of projects. (CSR Projects)",
      technologies: ["Adobe After Effects, Adobe Premier Pro, Davinci Resolve"],
      image:
      ProjectVids,
      link: "https://drive.google.com/drive/folders/1o7GJwB9QdyJG4_qKgDV8APzsUbpAEDqJ?usp=drive_link",
      category: "video-editing",
    },

    {
      title: "3D_Designs",
      description: "Creative videos for the introductions and promotions of projects. (CSR Projects)",
      technologies: ["Blender"],
      image:
      ThreeDImage,
      link: "https://drive.google.com/drive/folders/1veZjuwfsJsSd3kLLrBT9QdeO3QKbn0ZQ?usp=sharing",
      category: "product-designing",
    },

    {
      title: "Product_Designs",
      description: "Creative product flyers and designs for promotions.",
      technologies: ["Blender, Adobe Photoshop"],
      image:
      ProductImage,
      link: "https://drive.google.com/drive/folders/1E9b-rQLAiP_HoWRlpEd-gR_-CnHu37Mb?usp=drive_link",
      category: "product-designing",
    },

    {
      title: "T-Shirt_Designs",
      description: "Creative T-shirt designs.",
      technologies: ["Adobe Photoshop, Blender"],
      image:
      Tshirt,
      link: "https://drive.google.com/drive/folders/1sMCF4zXnUVo3V1qlygZHWQIfanlJqRGJ?usp=drive_link",
      category: "product-designing",
    },

    {
      title: "Wrist_Band_Designs",
      description: "Creative Wrist Band designs.",
      technologies: ["Adobe Photoshop, Blender"],
      image:
      WristBand,
      link: "https://drive.google.com/drive/folders/1h2iauusaKThs8oREEwLpsDAe-AROp0CY?usp=drive_link",
      category: "product-designing",
    },


  ]; 

  useEffect(() => {
    // Simulate loading dummy data (no API call)
    setProjects(dummyProjects);
    setLoading(false);
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  if (loading) {
    return (
      <div className="projects-container">
        <h1 className="projects-title">Loading...</h1>
      </div>
    );
  }

  const skeletonCards = Array(3).fill(null);

  if (!filteredProjects.length) {
    return (
      <div className="projects-container">
        <h1 className="projects-title">No_Projects_Found !</h1>
        <p className="no-projects-message">
          Sorry, there are no projects available in this category ;
        </p>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="logo-container">
        <img
          src={logoImage}
          alt="Logo"
          onClick={handleLogoClick}
          className="logo"
        />
      </div>

      {/* Back Text Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      </div>

      <h1 className="projects-title">Completed_Projects</h1>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id || index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="project-image"
              />
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="technology-list">
                <li>{project.technologies.join(", ")}</li>
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View details for ${project.title}`}
              >
                View_Project
              </a>
            </div>
          </div>
        ))}
        {skeletonCards.map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-details">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-tech"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

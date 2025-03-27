import React, { useState, useEffect } from 'react';
import './RecentProjects.css';
import project1 from '/BigNutzLogo.gif';
import project2 from '/BandaCurry.gif';
import project3 from '/Files.gif';

const projects = [
  { id: 1,  image: project1 },
  { id: 2,  image: project2 },
  { id: 3,  image: project3 },
];

const RecentProjects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="recent-projects">
      <h1>Recent_Projects</h1>
      <div className="projects-carousel">
        {projects.map((project, index) => {
          const position =
            index === current
              ? 'active'
              : index === (current + 1) % projects.length
              ? 'next'
              : 'prev';
          return (
            <div key={project.id} className={`project-card ${position}`}>
              <img src={project.image} alt={project.title} />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;

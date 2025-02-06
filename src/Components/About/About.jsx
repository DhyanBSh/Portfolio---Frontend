import React from "react";
import "./About.css";
import Technologies from "../Technologies/Technologies";
//import DesigningTools from "../DesigningTools/DesigningTools";


const About = () => {
  return (
    <div id="AboutMe" className="about" data-cursor="pointer2">
      
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-para">
          <h1>Software Development</h1>
          <p>
            I develop clean, efficient software with a focus on simple, user-friendly interfaces. I’m skilled in both front-end and back-end development, ensuring smooth and intuitive user experiences. I also enjoy creating attractive and functional UI designs that are easy to use.
          </p>
        </div>
        <div>
          <Technologies />
        </div>

        <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p>
            <hr style={{ width: "70%" }} />
            <span className="percentage">70%</span>
          </div>
          <div className="about-skill">
            <p>React</p>
            <hr style={{ width: "80%" }} />
            <span className="percentage">80%</span>
          </div>
          <div className="about-skill">
            <p>JavaScript</p>
            <hr style={{ width: "80%" }} />
            <span className="percentage">80%</span>
          </div>
          <div className="about-skill">
            <p>Next JS</p>
            <hr style={{ width: "60%" }} />
            <span className="percentage">60%</span>
          </div>
          <div className="about-skill">
            <p>Figma</p>
            <hr style={{ width: "90%" }} />
            <span className="percentage">90%</span>
          </div>
          <div className="about-skill">
            <p>MongoDB</p>
            <hr style={{ width: "70%" }} />
            <span className="percentage">70%</span>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default About;

import React from "react";
import "./About.css";
import Technologies from "../Technologies/Technologies";
import Designing from "../Designing/Designing";


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

      <div className="about-section">
        <div className="about-para">
          <h1>Graphic Designing</h1>
          <p>
            I design attractive, simple, and clean UI interfaces, along with creative and detailed graphics such as flyer designs, banner designs, event screens, logo designs, and card designs. In addition to graphic work, I also produce engaging and creative videos that bring ideas to life through visual storytelling.
          </p>
        </div>

        <div>
          <Designing />
        </div>

        <div className="about-skills">
          <div className="about-skill">
            <p>Adobe Photoshop</p>
            <hr style={{ width: "90%" }} />
            <span className="percentage">90%</span>
          </div>
          <div className="about-skill">
            <p>Adobe Illustrator</p>
            <hr style={{ width: "70%" }} />
            <span className="percentage">70%</span>
          </div>
          <div className="about-skill">
            <p>Adobe Lightroom</p>
            <hr style={{ width: "80%" }} />
            <span className="percentage">80%</span>
          </div>
          <div className="about-skill">
            <p>Canva</p>
            <hr style={{ width: "100%" }} />
            <span className="percentage">100%</span>
          </div>
          <div className="about-skill">
            <p>Adobe Premiere Pro</p>
            <hr style={{ width: "90%" }} />
            <span className="percentage">90%</span>
          </div>
          <div className="about-skill">
            <p>Adobe After Effects</p>
            <hr style={{ width: "80%" }} />
            <span className="percentage">80%</span>
          </div>
          <div className="about-skill">
            <p>DaVinci Resolve</p>
            <hr style={{ width: "60%" }} />
            <span className="percentage">60%</span>
          </div>
          <div className="about-skill">
            <p>Blender</p>
            <hr style={{ width: "50%" }} />
            <span className="percentage">50%</span>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>03+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Visual Creation Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>25+</h1>
          <p>Designing Projects</p>
        </div>
      </div>

      <div>
          
        </div>
    </div>
  );
};

export default About;

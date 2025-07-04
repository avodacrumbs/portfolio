import React from 'react';
import loryn from '../images/loryn.jpg';
import '../styles/GlobalStyle.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <div className="about-header-image">
          <img src={loryn} alt="Loryn" />
        </div>
        <h2 className="about-title">About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>Hello there!</p>
          <p>
            I'm <strong>Loryn</strong>, a dedicated Software Developer and UI/UX Designer based in Cebu City, Philippines. My journey into technology started with a fascination for how digital solutions can solve real-world problems and enhance everyday experiences.
          </p>
          <p>
            I specialize in building robust backend systems and crafting intuitive, visually appealing user interfaces. My passion lies in bridging the gap between complex code and seamless user experiences, ensuring that the applications I create are not just functional but also a joy to use.
          </p>
          <p>
            During my On-the-Job Training (OJT) and through rigorous school training, I've honed my skills in <strong>full-stack development and agile methodologies</strong>. My Capstone Project was a significant milestone, allowing me to dive deep into <strong>developing a smart system for campus navigation</strong>.
          </p>
          <p>
            I'm constantly learning and exploring new technologies, always striving to improve and adapt. When I'm not coding or designing, you can find me <strong>exploring new cafes in Cebu</strong>.
          </p>
          <p>
            I'm excited about the possibility of contributing to innovative projects and collaborating with forward-thinking teams. Let's connect and build something impactful together!
          </p>

          <div className="about-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="about-button">
              View My Resume →
            </a>
            <a href="#contact" className="about-button">
              Let&apos;s Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import loryn from "../images/loryn.jpg";
import "../styles/GlobalStyle.css";

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
            I'm <strong>Loryn</strong>, a dedicated Software Developer and UI/UX
            Designer based in Cebu City, Philippines. My journey into technology
            started with a fascination for how digital solutions can solve
            real-world problems and enhance everyday experiences.
          </p>
          <p>
            I work on both frontend and backend development, but I find myself
            most drawn to crafting clean, intuitive, and user-centered
            interfaces. I enjoy transforming complex logic into smooth, visually
            engaging user experiences—making applications not just functional,
            but genuinely enjoyable to use.{" "}
          </p>
          <p>
            During my On-the-Job Training (OJT), I focused on enhancing my
            frontend skills, especially in creating responsive and
            mobile-friendly layouts. My Capstone Project, a Barangay
            Computerized Management System, gave me the opportunity to
            contribute heavily to both the backend (using PHP and MySQL) and the
            frontend, allowing me to apply my full-stack skills in a real-world
            setting.{" "}
          </p>
          <p>
            I'm constantly learning and exploring new technologies, always
            striving to improve and adapt. When I’m not coding or designing,
            you’ll find me exploring online platforms for new ideas and
            inspiration. I enjoy discovering tools, trends, and best practices
            that help me improve my skills and bring fresh insights into my
            work.
          </p>
          <p>
            I'm excited about the possibility of contributing to innovative
            projects and collaborating with forward-thinking teams. Let's
            connect and build something impactful together!
          </p>

          <div className="about-buttons">
            <a href="/villamor-loryn-M..pdf" download className="about-button">
              Download My Resume →
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

import React, { useState, useEffect, useRef } from "react";
import "../styles/GlobalStyle.css";
import { allImages } from "../assets/images";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("systems");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);
  const scrollRefs = useRef([]);

  useEffect(() => {
    const scrollSpeed = 30;
    const scrollAmount = 1;

    const intervals = scrollRefs.current.map((container) => {
      if (!container) return null;

      return setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }, scrollSpeed);
    });

    return () =>
      intervals.forEach((interval) => interval && clearInterval(interval));
  }, [activeTab]);

  const systemProjects = [
    {
      title: "Expense Tracker Web Application",
      description:
        "A simple yet efficient web application designed to help users monitor and manage their daily expenses...",
      skills:
        "C#, ASP.NET Core, Entity Framework, SQL Server, JavaScript, Bootstrap",
      type: "Web Application",
      experience: "Training Project",
      role: "Tester and Programmer",
      company: "Alliance Software Inc.",
      companyLink: "https://alliance.com.ph/",
      images: allImages.xpense,
    },
    {
      title: "Barangay Resident Management System",
      description:
        "The Barangay Computerized Management System is a role-based web application designed for Admin, Staff, and User access...",
      skills: "PHP, MySQL, React, HTML, CSS, JavaScript",
      type: "Web Application",
      experience: "Capstone Project",
      role: "Project Manager and Full Stack Developer",
      company: "University of Cebu Pardo - Talisay",
      companyLink: "https://www.uc.edu.ph/",
      images: allImages.brgy,
    },
    {
      title: "Xterium Mobile and Xode.App",
      description:
        "Xterium Mobile is a responsive mobile app project where I contributed to the frontend UI and logic along with the Xode.App",
      skills: "React Native, JavaScript, CSS, UI Design",
      type: "Web and Mobile Application",
      experience: "Internship",
      role: "Software Developer",
      company: "RAK SON OPC",
      xteriumLink: "https://xterium.app/",
      xodeLink: "https://xode.app/",
      images: allImages.xterium,
    },
  ];

  const designProjects = [
    {
      title: "Xterium Cover design",
      description: "A clean and modern Figma design for Xterium App",
      Tools: "Figma",
      images: allImages.design1,
    },
    {
      title: "yOURSpace Lean Canvas",
      description: "Academic project for startup idea development.",
      Tools: "Figma",
      images: allImages.design2,
    },
  ];

  const projectsToShow =
    activeTab === "systems" ? systemProjects : designProjects;

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>

      <div className="portfolio-tabs">
        <button
          className={activeTab === "systems" ? "active" : ""}
          onClick={() => setActiveTab("systems")}
        >
          Systems / Applications
        </button>
        <button
          className={activeTab === "designs" ? "active" : ""}
          onClick={() => setActiveTab("designs")}
        >
          Designs
        </button>
      </div>

      <div className="portfolio-grid">
        {(() => {
          scrollRefs.current = [];
          return projectsToShow.map((project, index) => (
            <div
              className={`portfolio-card ${
                expandedIndex === index ? "expanded" : ""
              }`}
              key={index}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div
                className="portfolio-thumbnails-scroll"
                ref={(el) => (scrollRefs.current[index] = el)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImages(project.images.map((src) => ({ src })));
                  setLightboxOpen(true);
                }}
              >
                {project.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`${project.title} ${i + 1}`}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card expansion
                      setSelectedImages(project.images.map((src) => ({ src })));
                      setLightboxOpen(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
              <h3>{project.title}</h3>
              {expandedIndex === index ? (
                <>
                  <p>{project.description}</p>
                  {activeTab === "systems" ? (
                    <>
                      <p>
                        <strong>Skills Used:</strong> {project.skills}
                      </p>
                      <p>
                        <strong>Type:</strong> {project.type}
                      </p>
                      <p>
                        <strong>Experience:</strong> {project.experience}
                      </p>
                      <p>
                        <strong>Role:</strong> {project.role}
                      </p>
                      {project.company && (
                        <p>
                          <strong>Company:</strong>{" "}
                          <a
                            href={project.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.company}
                          </a>
                        </p>
                      )}
                      {project.xteriumLink && (
                        <p>
                          <strong>Xterium Link:</strong>{" "}
                          <a
                            href={project.xteriumLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.xteriumLink}
                          </a>
                        </p>
                      )}
                      {project.xodeLink && (
                        <p>
                          <strong>Xode Link:</strong>{" "}
                          <a
                            href={project.xodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.xodeLink}
                          </a>
                        </p>
                      )}
                    </>
                  ) : (
                    <p>
                      <strong>Tools Used:</strong> {project.Tools}
                    </p>
                  )}
                  <p className="more-toggle">Show Less</p>
                </>
              ) : (
                <p className="more-toggle">Show More</p>
              )}
            </div>
          ));
        })()}
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={selectedImages}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;

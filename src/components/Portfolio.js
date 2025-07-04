import React, { useState, useEffect, useRef } from 'react';
import '../styles/GlobalStyle.css';

import xpensea from '../images/Login.png';
import xpensea2 from '../images/Signup.png';
import xpense3 from '../images/category.png';
import xpense4 from '../images/xpense.png';
import xpense5 from '../images/xpensesum.png';
import xpense6 from '../images/reports.png';
import brgy1 from '../images/brgy1.png';
import brgy2 from '../images/brgy2.png';
import brgy3 from '../images/brgy3.png';
import brgy4 from '../images/brgy4.png';
import brgy5 from '../images/brgy5.png';
import brgy6 from '../images/brgy6.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('systems');
  const [expandedIndex, setExpandedIndex] = useState(null);
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

    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [activeTab]);

  const systemProjects = [
    {
      title: 'Expense Tracker Web Application',
      description:
        'A simple yet efficient web application designed to help users monitor and manage their daily expenses...',
      skills: 'C#, ASP.NET Core, Entity Framework, SQL Server, JavaScript, Bootstrap',
      images: [xpensea, xpensea2, xpense3, xpense4, xpense5, xpense6],
    },
    {
      title: 'Barangay Resident Management System',
      description:
        'The Barangay Computerized Management System is a role-based web application designed for Admin, Staff, and User access...',
      skills: 'PHP, MySQL, React, HTML, CSS, JavaScript',
      images: [brgy1, brgy2, brgy3, brgy4, brgy5, brgy6],
    },
    {
      title: 'Xterium Mobile',
      description:
        'Xterium Mobile is a responsive mobile app project where I contributed to the frontend UI and logic...',
      skills: 'React Native, JavaScript, CSS, UI Design',
      images: [xpensea2, xpense3, xpense6, xpense5],
    },
  ];

  const designProjects = [
    {
      title: 'Mobile Banking App UI',
      description:
        'A clean and modern Figma design for a mobile banking application...',
      skills: 'Figma, UX Research, Prototyping',
      images: [xpensea, xpensea2, xpense3, xpense4],
    },
    {
      title: 'E-Learning Dashboard',
      description:
        'An interactive dashboard UI designed for e-learning platforms...',
      skills: 'Figma, UI Design',
      images: [xpense5, xpense6, xpensea],
    },
  ];

  const projectsToShow = activeTab === 'systems' ? systemProjects : designProjects;

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>

      <div className="portfolio-tabs">
        <button
          className={activeTab === 'systems' ? 'active' : ''}
          onClick={() => setActiveTab('systems')}
        >
          Systems / Applications
        </button>
        <button
          className={activeTab === 'designs' ? 'active' : ''}
          onClick={() => setActiveTab('designs')}
        >
          Designs
        </button>
      </div>

      <div className="portfolio-grid">
        {(() => {
          scrollRefs.current = [];
          return projectsToShow.map((project, index) => (
            <div
              className={`portfolio-card ${expandedIndex === index ? 'expanded' : ''}`}
              key={index}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div
                className="portfolio-thumbnails-scroll"
                ref={(el) => (scrollRefs.current[index] = el)}
              >
                {[...project.images, ...project.images].map((imgSrc, i) => (
                  <a key={i} href={imgSrc} target="_blank" rel="noopener noreferrer">
                    <img src={imgSrc} alt={`${project.title} ${i + 1}`} />
                  </a>
                ))}
              </div>
              <h3>{project.title}</h3>

              {/* Expandable content */}
              {expandedIndex === index && (
                <>
                  <p>{project.description}</p>
                  <p><strong>Skills Used:</strong> {project.skills}</p>
                </>
              )}
            </div>
          ));
        })()}
      </div>
    </section>
  );
};

export default Portfolio;

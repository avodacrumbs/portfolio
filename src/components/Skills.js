import React from 'react';
import '../styles/GlobalStyle.css';

const frontendSkills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'React.js', logo: 'https://reactjs.org/logo-og.png' },
  { name: 'React Native', logo: 'https://reactnative.dev/img/header_logo.svg' },
];

const backendSkills = [
  { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'Express.js', logo: 'https://expressjs.com/images/favicon.png' },
  { name: 'PHP', logo: 'https://www.php.net/images/logos/php-logo.svg' },
  { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
  { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-group">
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-logo" title={skill.name}>
              <img src={skill.logo} alt={skill.name} />
            </div>
          ))}
        </div>
        <div className="skills-grid">
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill-logo" title={skill.name}>
              <img src={skill.logo} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

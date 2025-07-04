import React from 'react';
import '../styles/GlobalStyle.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-intro">
  I'm currently seeking exciting opportunities to kickstart my career in a dynamic and forward-thinking company. If you're hiring or open to fresh ideas, I'd love to connect. Feel free to reach out through any of the channels below — I'm eager to contribute, learn, and grow!
</p>


      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <a href="mailto:lorynvillamor04@gmail.com">lorynvillamor04@gmail.com</a>
        </div>

        <div className="contact-item">
          <span className="label">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/loryn-villamor-036b01348/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/loryn-villamor-036b01348/
          </a>
        </div>

        <div className="contact-item">
          <span className="label">Location:</span>
          <span>Cebu City, Central Visayas, Philippines</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

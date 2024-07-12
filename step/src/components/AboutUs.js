// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <h1>About Us</h1>
//     </div>
//   );
// }

// export default AboutUs;


import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="krishna-mall about-us">
      <main className="about-content">
        <h2>About Krishna Shopping Mall</h2>
        
        <section className="about-section">
          <h3>Our Story</h3>
          <p>Founded in 2010, Krishna Shopping Mall has grown from a small local shop to a beloved shopping destination. Our journey is rooted in the rich cultural heritage of India, combined with a modern shopping experience.</p>
        </section>

        <section className="about-section">
          <h3>Our Mission</h3>
          <p>At Krishna Shopping Mall, we aim to provide a unique shopping experience that blends traditional values with contemporary trends. We strive to offer high-quality products at competitive prices, ensuring customer satisfaction in every purchase.</p>
        </section>

        <section className="about-section">
          <h3>What Sets Us Apart</h3>
          <ul>
            <li>Curated collection of both traditional and modern products</li>
            <li>Commitment to supporting local artisans and businesses</li>
            <li>Exceptional customer service and a warm shopping environment</li>
            <li>Regular cultural events and exhibitions</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Quality</h4>
              <p>We ensure all our products meet high standards of quality.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We conduct our business with honesty and transparency.</p>
            </div>
            <div className="value-item">
              <h4>Community</h4>
              <p>We actively contribute to and support our local community.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We constantly evolve to meet changing customer needs.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mall-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Visit Us</h3>
            <p>123 Krishna Lane, Mumbai, India</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@krishnamall.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 Krishna Shopping Mall. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
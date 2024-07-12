// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1>Contact Us</h1>
//     </div>
//   );
// }

// export default ContactUs;



import React, { useState } from 'react';
import './ContactUs.css';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import Quckacs from './Quck-acs';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="krishna-mall contact-us">
        <main className="contact-content">
        <h2>Contact Us</h2>
        
        <div className="contact-container">
          <section className="contact-info">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Please feel free to contact us with any questions or feedback.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Krishna Lane, Mumbai, India</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 1234567890</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@krishnamall.com</p>
              </div>
            </div>
            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
              <p>Sunday: 11:00 AM - 7:00 PM</p>
            </div>
          </section>

          <section className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </section>
        </div>
      </main>

      <footer className="mall-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Quckacs/>
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

export default ContactUs;
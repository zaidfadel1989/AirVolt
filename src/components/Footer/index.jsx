import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column brand-column">
              <div className="brand-info">
                <h3 className="brand-title">AirVoltPro</h3>
                <p className="brand-tagline">
                  Your Trusted Electrical & HVAC Experts. Professional, reliable service for Chicago homes and businesses.
                </p>
                <div className="certifications">
                  <span className="cert-badge">Licensed</span>
                  <span className="cert-badge">Insured</span>
                  <span className="cert-badge">EPA Certified</span>
                  <span className="cert-badge">NATE Certified</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column links-column">
              <h4 className="column-title">Quick Links</h4>
              <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/about" className="footer-link">About Us</a>
                <a href="/services" className="footer-link">Services</a>
                <a href="/projects" className="footer-link">Projects</a>
                <a href="/testimonials" className="footer-link">Testimonials</a>
                <a href="/contact" className="footer-link">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-column contact-column">
              <h4 className="column-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <p>Chicago, IL, USA</p>
                    <span>Serving Chicago & Suburbs</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <p>24/7 Emergency Service</p>
                    <span>Available for urgent repairs</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <p>Call for Free Estimate</p>
                    <span>Licensed & Insured Professionals</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-column newsletter-column">
              <h4 className="column-title">Stay Updated</h4>
              <p className="newsletter-description">
                Get maintenance tips, seasonal offers, and energy-saving advice
              </p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
              <p className="privacy-text">
                By subscribing, you agree to receive occasional updates. Unsubscribe anytime.
                <a href="/privacy-policy" className="privacy-link"> Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Company Info */}
          <div className="company-info">
            <p className="company-name">AirVoltPro Electrical & HVAC Solutions</p>
            <p className="license-info">IL License #HVAC-123456 | Based in Chicago, IL, USA</p>
            <p className="service-area">
              <strong>Service Areas:</strong> Chicago and surrounding suburbs within 30-mile radius
            </p>
          </div>

          {/* Legal Links */}
          <div className="legal-links">
            <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <a href="/terms" className="legal-link">Terms of Service</a>
            <a href="/cookies" className="legal-link">Cookie Policy</a>
            <a href="/accessibility" className="legal-link">Accessibility</a>
            <a href="/cancellation" className="legal-link">Cancellation Policy</a>
            <a href="/warranty" className="legal-link">Warranty</a>
            <a href="/financing" className="legal-link">Financing</a>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer">
            <p>
              *Disclaimer: All information provided on this website is for general informational purposes only. 
              Service availability, pricing, and promotions may vary. All services subject to terms and conditions. 
              Licensed and regulated by the State of Illinois. Contact us directly for confirmed quotes, availability, 
              and emergency services. Not all services available in all areas.*
            </p>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>© {currentYear} AirVoltPro Electrical & HVAC Solutions. All rights reserved.</p>
            <p className="developer-credit">Website designed & developed by Zaid Fadel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
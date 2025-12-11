import React from "react";
import "./Footer.css";
import MapImage from "../../assets/Map.jpg";
import timingImage from '../../assets/timing.png'; // or from your assets if you prefer

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
                <h3 className="brand-title">AirVoltPro.Inc</h3>
                <p className="brand-tagline">
                  Your Trusted Electrical & HVAC Experts. Professional, reliable service for Chicago homes and businesses.
                </p>
                <div className="timing-image-container">
              <img 
                src={timingImage} 
                alt="Opening Hours: Monday to Saturday 8AM-6PM, Sunday Closed" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
                <div className="certifications">
                  <span className="cert-badge">Licensed</span>
                  <span className="cert-badge">Insured</span>
                  <span className="cert-badge">Bonded</span>
                  <span className="cert-badge">EPA Certified</span>
                  
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
                    <p>Illinois, USA</p>
<div className="contact-details">
  <p>(847)-800-3443</p>
  <span>info@AlrvoltPro.com</span>
</div>
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
<div className="service-map">
                <h5 className="map-title">Service Area Map</h5>
                <div className="map-container">
                  <img 
                    src={MapImage} 
                    alt="Service area map covering Cook County, DuPage County, Lake County, Williams County, City of Chicago, and parts of Indiana" 
                    className="map-image"
                  />
                </div>
                <p className="map-caption">
                  Serving: <strong>Cook County</strong>, <strong>DuPage County</strong>, <strong>Lake County</strong>, 
                  <strong>Williams County</strong>, <strong>City of Chicago</strong>, and surrounding areas including parts of <strong>Indiana</strong>
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
            <p className="company-name">AirVoltPro.Inc Electrical & HVAC Solutions</p>
            <p className="license-info">ELECTRICAL CONTRACTORS LICENSE & EPA LICENSE | Based in Illinois, USA</p>
            <p className="service-area">
              <strong>Service Areas:</strong> Serving <strong>Cook County, DuPage County,</strong> the Surrounding Suburbs, and <strong>Areas Within a 50-Mile</strong> Radius
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
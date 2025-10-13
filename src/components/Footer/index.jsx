import React from "react";
import "./Footer.css";
import { footer } from "../../data";
import { Link } from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Filter out the Blog page from footer data
  const filteredFooter = footer.map(section => ({
    ...section,
    routes: section.routes.filter(route => route.name !== "Blog")
  })).filter(section => section.name !== "Explore"); // Remove entire Explore section

  return (
    <footer id="footer">
      {/* Logo at Top Middle */}
      <div className="footer-header">
        <div className="container">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="brand-tagline">
            <h3>Your Trusted Electrical & HVAC Experts</h3>
            <p>Professional, reliable service for Chicago homes and businesses</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Newsletter */}
          <div className="column">
            <form className="newsletter">
              <h3>Stay Updated</h3>
              <p className="newsletter-description">
                Get maintenance tips, seasonal offers, and energy-saving advice
              </p>
              <div className="control__container">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="control"
                  required
                />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </div>
              <p className="small text__muted">
                By subscribing, you agree to receive occasional updates from
                AirVoltPro. You can unsubscribe anytime. We respect your privacy 
                and comply with GDPR and CCPA regulations. See our{" "}
                <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>{" "}
                for how we handle your data.
              </p>
            </form>
          </div>

          {/* Dynamic Footer Links - Filtered */}
          {filteredFooter.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes__name">{list.name}</div>
              <div className="routes__container">
                {list.routes.map((route, i) => (
                  <Link to={route.id} className="route__item" key={i}>
                    <p className="name">{route.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info Column */}
          <div className="column">
            <div className="routes__name">Contact Info</div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <p>Chicago, IL, USA</p>
                  <small>Serving Chicago & Suburbs</small>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-text">
                  <p>24/7 Emergency Service</p>
                  <small>Available for urgent repairs</small>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <p>Call for Free Estimate</p>
                  <small>Licensed & Insured Professionals</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Info Section */}
      <div className="business-info">
        <div className="certification-badges">
          <span className="badge">Licensed</span>
          <span className="badge">Insured</span>
          <span className="badge">EPA Certified</span>
          <span className="badge">NATE Certified</span>
        </div>
        <p>AirVoltPro Electrical & HVAC Solutions</p>
        <p>IL License #HVAC-123456 | Based in Chicago, IL, USA</p>
      </div>

      {/* Service Area Disclosure */}
      <div className="service-area">
        <p><strong>Service Areas:</strong> Chicago and surrounding suburbs within 30-mile radius</p>
      </div>

      {/* Legal Links */}
      <div className="footer__legal">
        <a href="/privacy-policy" className="route__item">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="route__item">
          Terms of Service
        </a>
        <a href="/cookie-policy" className="route__item">
          Cookie Policy
        </a>
        <a href="/accessibility-statement" className="route__item">
          Accessibility Statement
        </a>
        <a href="/cancellation-policy" className="route__item">
          Cancellation Policy
        </a>
        <a href="/warranty" className="route__item">
          Warranty Information
        </a>
        <a href="/financing" className="route__item">
          Financing Options
        </a>
      </div>

      {/* Enhanced Disclaimer */}
      <div className="disclaimer">
        <p className="text__muted">
          *Disclaimer: All information provided on this website is for general 
          informational purposes only. Service availability, pricing, and promotions 
          may vary. All services subject to terms and conditions. Licensed and regulated 
          by the State of Illinois. Contact us directly for confirmed quotes, availability, 
          and emergency services. Not all services available in all areas.*
        </p>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <h3>
            © {currentYear} AirVoltPro Electrical & HVAC Solutions. All rights
            reserved.
          </h3>
          <p className="text__muted">
            Website designed & developed by Zaid Fadel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HVAC.css";


// Import all HVAC images from the HVAC folder
import HVAC1 from '../../assets/HVAC/HVAC1.jpg';
import HVAC2 from '../../assets/HVAC/HVAC2.jpg';
import HVAC3 from '../../assets/HVAC/HVAC3.jpg';
import HVAC4 from '../../assets/HVAC/HVAC4.jpg';
import HVAC5 from '../../assets/HVAC/HVAC5.jpg';
import HVAC6 from '../../assets/HVAC/HVAC6.jpg';
import HVAC7 from '../../assets/HVAC/HVAC7.jpg';
import HVAC8 from '../../assets/HVAC/HVAC8.jpg';
import HVAC9 from '../../assets/HVAC/HVAC9.jpg';
import HVAC10 from '../../assets/HVAC/HVAC10.jpg';
// import HVAC11 from '../../assets/HVAC/HVAC11.jpg';
// import HVAC12 from '../../assets/HVAC/HVAC12.jpg';
// import HVAC13 from '../../assets/HVAC/HVAC13.jpg';
import HVAC14 from '../../assets/HVAC/HVAC14.jpg';
import HVAC15 from '../../assets/HVAC/HVAC15.jpg';




const HVAC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState('hvac');

  useEffect(() => {
    document.body.classList.add('hvac-page');
    return () => {
      document.body.classList.remove('hvac-page');
    };
  }, []);

  // All HVAC images array
 const hvacImages = [
  HVAC1, HVAC2, HVAC3, HVAC4, HVAC5,
  HVAC6, HVAC7, HVAC8, HVAC9, HVAC10, HVAC14, HVAC15
];

// Split images into rows for better layout
const hvacFirstRow = hvacImages.slice(0, 7); // Gets indexes 0-4 (5 images)
const hvacSecondRow = hvacImages.slice(5); // Gets indexes 5-9 (5 images)
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleContactClick = () => {
    if (window.location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#contact');
      }
    } else {
      navigate('/#contact');
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    const currentIndex = hvacImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % hvacImages.length;
    setSelectedImage(hvacImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = hvacImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + hvacImages.length) % hvacImages.length;
    setSelectedImage(hvacImages[prevIndex]);
  };

  return (
    <div className="hvac-container">
      <div className="hvac-header">
        <div className="hvac-icon-title">
          <div className="hvac-title-text">
            <h1>AirVoltPRO.Inc</h1>
            <p>HVAC SERVICES</p>
          </div>
        </div>

        <div className="hvac-header-buttons">
          <button className="back-button-contact-style" onClick={handleBackClick}>← Back</button>
          <button className="contact-us-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>

      <div className="projects-tabs">
        <button className={`tab-button ${currentGallery === 'hvac' ? 'active' : ''}`} onClick={() => setCurrentGallery('hvac')}>HVAC Projects</button>
      </div>

      <center>
        <div className="service-types-box">
          <div className="service-types-content">
            <span className="service-type">Industrial</span>
            <span className="service-type">Residential</span>
            <span className="service-type">Commercial</span>
            <span className="service-type">AC Installation</span>
            <span className="service-type">AC Repair</span>
            <span className="service-type">Furnace Installation</span>
            <span className="service-type">Furnace Repair</span>
            <span className="service-type">Water Heaters</span>



          </div>
        </div>
      </center>

      {currentGallery === 'hvac' && (
        <div className="projects-section">
          <div className="images-row">
            {hvacFirstRow.map((image, index) => (
              <div key={index} className="project-card" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`HVAC project ${index + 1}`} className="project-image" />
              </div>
            ))}
          </div>
          <div className="images-row">
            {hvacSecondRow.map((image, index) => (
              <div key={index + 5} className="project-card" onClick={() => handleImageClick(image)}>
                <img src={image} alt={`HVAC project ${index + 6}`} className="project-image" />
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={handlePrevImage}>‹</button>
            
            {selectedImage && (
              <img src={selectedImage} alt="Enlarged view" className="modal-image" />
            )}

            <button className="modal-nav modal-next" onClick={handleNextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HVAC;
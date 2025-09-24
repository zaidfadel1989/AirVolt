import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Electric.css';
import Industrial1 from '../../assets/Industrial/Industrial_1.jpg';
import Industrial2 from '../../assets/Industrial/Industrial_2.jpg';
import Industrial3 from '../../assets/Industrial/Industrial_3.jpg';
import Industrial4 from '../../assets/Industrial/Industrial_4.jpg';
import Industrial5 from '../../assets/Industrial/Industrial_5.jpg';
import Industrial6 from '../../assets/Industrial/Industrial_6.jpg';
import Industrial7 from '../../assets/Industrial/Industrial_7.jpg';
import Industrial8 from '../../assets/Industrial/Industrial_8.jpg';
import Industrial9 from '../../assets/Industrial/Industrial_9.jpg';
import Industrial10 from '../../assets/Industrial/Industrial_10.jpg';
import Industrial11 from '../../assets/Industrial/Industrial_11.jpg';
import Industrial12 from '../../assets/Industrial/Industrial_12.jpg';
import Industrial13 from '../../assets/Industrial/Industrial_13.jpg';
// import ElicIcon from '../../assets/elic.png';

const Electric = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('electric-page');
    return () => {
      document.body.classList.remove('electric-page');
    };
  }, []);

  const industrialImages = [
    Industrial1, Industrial2, Industrial3, Industrial4, Industrial5,
    Industrial6, Industrial7, Industrial8, Industrial9, Industrial10,
    Industrial11, Industrial12, Industrial13
  ];

  const firstRowImages = industrialImages.slice(0, 7);
  const secondRowImages = industrialImages.slice(7, 13);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleContactClick = () => {
    navigate('/contact');
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
    const currentIndex = industrialImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % industrialImages.length;
    setSelectedImage(industrialImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = industrialImages.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + industrialImages.length) % industrialImages.length;
    setSelectedImage(industrialImages[prevIndex]);
  };

  return (
    <div className="electric-container">
      <div className="electric-header">
        <div className="electric-icon-title">
          {/* <img src={ElicIcon} alt="Electric Icon" className="electric-icon" /> */}
          <div className="electric-title-text">
            <h1>AirVoltPRO</h1>
            <p>INDUSTRIAL ELECTRICAL SERVICES</p>
          </div>
        </div>
        
        <div className="electric-header-buttons">
          <button className="back-button-contact-style" onClick={handleBackClick}>← Back</button>
          <button className="contact-us-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>

      <div className="industrial-section">
        <h2 className="industrial-title">Industrial Projects</h2>
        
        <div className="industrial-row">
          {firstRowImages.map((image, index) => (
            <div key={index} className="industrial-card" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Industrial project ${index + 1}`} className="industrial-image"/>
            </div>
          ))}
        </div>

        <div className="industrial-row">
          {secondRowImages.map((image, index) => (
            <div key={index + 7} className="industrial-card" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Industrial project ${index + 8}`} className="industrial-image"/>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={handlePrevImage}>‹</button>
            <img src={selectedImage} alt="Enlarged view" className="modal-image" />
            <button className="modal-nav modal-next" onClick={handleNextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Electric;
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
import Commercial1 from '../../assets/Commercial/Commercial_1.jpg';
import Commercial2 from '../../assets/Commercial/Commercial_2.jpg';
import Commercial3 from '../../assets/Commercial/Commercial_3.jpg';
import Commercial4 from '../../assets/Commercial/Commercial_4.jpg';
import Commercial5 from '../../assets/Commercial/Commercial_5.jpg';
import Commercial6 from '../../assets/Commercial/Commercial_6.jpg';
import Commercial7 from '../../assets/Commercial/Commercial_7.jpg';
import Commercial8 from '../../assets/Commercial/Commercial_8.jpg';
import Commercial9 from '../../assets/Commercial/Commercial_9.jpg';
import Commercial10 from '../../assets/Commercial/Commercial_10.jpg';
import Commercial11 from '../../assets/Commercial/Commercial_11.jpg';
import Commercial12 from '../../assets/Commercial/Commercial_12.jpg';
import CarCharger1 from '../../assets/Car Charger/Car Charger_1.jpg';
import CarCharger2 from '../../assets/Car Charger/Car Charger_2.jpg';
import CarCharger4 from '../../assets/Car Charger/Car Charger_4.jpg';
import CarCharger5 from '../../assets/Car Charger/Car Charger_5.jpg';
import CarCharger6 from '../../assets/Car Charger/Car Charger_6.jpg';
// Import Installation Generator media
import InstallationGenerator1 from '../../assets/Installation_Generator/Installation_Generator_1.jpg';
import InstallationGenerator2 from '../../assets/Installation_Generator/Installation_Generator_2.jpg';
import InstallationGenerator3 from '../../assets/Installation_Generator/Installation_Generator_3.mp4';

const Electric = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState('industrial');

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

  const commercialImages = [
    Commercial1, Commercial2, Commercial3, Commercial4, Commercial5,
    Commercial6, Commercial7, Commercial8, Commercial9, Commercial10,
    Commercial11, Commercial12
  ];

  const evChargerImages = [
    CarCharger1, CarCharger2, CarCharger4, CarCharger5, CarCharger6
  ];

  const installationGeneratorMedia = [
    { type: 'image', src: InstallationGenerator1, alt: 'Installation Generator 1' },
    { type: 'image', src: InstallationGenerator2, alt: 'Installation Generator 2' },
    { type: 'video', src: InstallationGenerator3, alt: 'Installation Generator Video' }
  ];

  // Split images into rows for better layout
  const industrialFirstRow = industrialImages.slice(0, 7);
  const industrialSecondRow = industrialImages.slice(7, 13);
  const commercialFirstRow = commercialImages.slice(0, 6);
  const commercialSecondRow = commercialImages.slice(6, 12);
  const evChargerFirstRow = evChargerImages.slice(0, 3);
  const evChargerSecondRow = evChargerImages.slice(3, 5);
  const installationGeneratorRow = installationGeneratorMedia;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleContactClick = () => {
    // Try multiple approaches to ensure it works
    if (window.location.pathname === '/') {
      // If we're already on home page, scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#contact');
      }
    } else {
      // Navigate to home page with contact hash
      navigate('/#contact');
    }
  };

  const handleImageClick = (image, gallery) => {
    setSelectedImage(image);
    setSelectedVideo(null);
    setCurrentGallery(gallery);
    setIsModalOpen(true);
  };

  const handleVideoClick = (video, gallery) => {
    setSelectedVideo(video);
    setSelectedImage(null);
    setCurrentGallery(gallery);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const getCurrentGallery = () => {
    if (currentGallery === 'industrial') return industrialImages;
    if (currentGallery === 'commercial') return commercialImages;
    if (currentGallery === 'evCharger') return evChargerImages;
    return installationGeneratorMedia.map(item => item.src);
  };

  const handleNextImage = () => {
    const currentImages = getCurrentGallery();
    const currentIndex = currentImages.indexOf(selectedImage || selectedVideo);
    const nextIndex = (currentIndex + 1) % currentImages.length;

    if (currentGallery === 'installationGenerator') {
      const mediaArray = installationGeneratorMedia;
      const nextItem = mediaArray[nextIndex];
      if (nextItem.type === 'image') {
        setSelectedImage(nextItem.src);
        setSelectedVideo(null);
      } else {
        setSelectedVideo(nextItem.src);
        setSelectedImage(null);
      }
    } else {
      setSelectedImage(currentImages[nextIndex]);
      setSelectedVideo(null);
    }
  };

  const handlePrevImage = () => {
    const currentImages = getCurrentGallery();
    const currentIndex = currentImages.indexOf(selectedImage || selectedVideo);
    const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;

    if (currentGallery === 'installationGenerator') {
      const mediaArray = installationGeneratorMedia;
      const prevItem = mediaArray[prevIndex];
      if (prevItem.type === 'image') {
        setSelectedImage(prevItem.src);
        setSelectedVideo(null);
      } else {
        setSelectedVideo(prevItem.src);
        setSelectedImage(null);
      }
    } else {
      setSelectedImage(currentImages[prevIndex]);
      setSelectedVideo(null);
    }
  };

  const renderMediaItem = (item, index, gallery) => {
    if (item.type === 'video') {
      return (
        <div key={index} className="project-card" onClick={() => handleVideoClick(item.src, gallery)}>
          <div className="video-thumbnail">
            <video src={item.src} alt={item.alt} className="project-image" />
            <div className="video-play-icon">▶</div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="project-card" onClick={() => handleImageClick(item.src, gallery)}>
          <img src={item.src} alt={item.alt} className="project-image" />
        </div>
      );
    }
  };

  return (
    <div className="electric-container">
      <div className="electric-header">
        <div className="electric-icon-title">
          <div className="electric-title-text">
            <h1>AirVoltPRO.Inc</h1>
            <p>ELECTRICAL HVAC</p>
          </div>
        </div>

        <div className="electric-header-buttons">
          <button className="back-button-contact-style" onClick={handleBackClick}>← Back</button>
          <button className="contact-us-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>

      <div className="projects-tabs">
                <button className={`tab-button ${currentGallery === 'commercial' ? 'active' : ''}`} onClick={() => setCurrentGallery('commercial')}>Residential</button>
        <button className={`tab-button ${currentGallery === 'commercial' ? 'active' : ''}`} onClick={() => setCurrentGallery('commercial')}>Commercial</button>
        <button className={`tab-button ${currentGallery === 'industrial' ? 'active' : ''}`} onClick={() => setCurrentGallery('industrial')}>Industrial</button>
      </div>

      {currentGallery === 'industrial' && (
        <div className="projects-section">
          <h2 className="section-title">Industrial Projects</h2>
          <div className="images-row">{industrialFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'industrial')}><img src={image} alt={`Industrial project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{industrialSecondRow.map((image, index) => (<div key={index + 7} className="project-card" onClick={() => handleImageClick(image, 'industrial')}><img src={image} alt={`Industrial project ${index + 8}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'commercial' && (
        <div className="projects-section">
          <h2 className="section-title">Commercial Projects</h2>
          <div className="images-row">{commercialFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'commercial')}><img src={image} alt={`Commercial project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{commercialSecondRow.map((image, index) => (<div key={index + 6} className="project-card" onClick={() => handleImageClick(image, 'commercial')}><img src={image} alt={`Commercial project ${index + 7}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'evCharger' && (
        <div className="projects-section">
          <h2 className="section-title">EV Charger Projects</h2>
          <div className="images-row">{evChargerFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'evCharger')}><img src={image} alt={`EV Charger project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{evChargerSecondRow.map((image, index) => (<div key={index + 3} className="project-card" onClick={() => handleImageClick(image, 'evCharger')}><img src={image} alt={`EV Charger project ${index + 4}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'installationGenerator' && (
        <div className="projects-section">
          <h2 className="section-title">Installation Generator Projects</h2>
          <div className="images-row">
            {installationGeneratorRow.map((item, index) =>
              renderMediaItem(item, index, 'installationGenerator')
            )}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={handlePrevImage}>‹</button>

            {selectedImage ? (
              <img src={selectedImage} alt="Enlarged view" className="modal-image" />
            ) : selectedVideo ? (
              <video src={selectedVideo} controls autoPlay className="modal-video">
                Your browser does not support the video tag.
              </video>
            ) : null}

            <button className="modal-nav modal-next" onClick={handleNextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Electric;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Electric.css';

// Industrial
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

// Commercial
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

// Residential
import Residential1 from '../../assets/Residential/Residential_1.jpg';
import Residential2 from '../../assets/Residential/Residential_2.jpg';
import Residential3 from '../../assets/Residential/Residential_3.jpg';
import Residential4 from '../../assets/Residential/Residential_4.jpg';
import Residential5 from '../../assets/Residential/Residential_5.jpg';
import Residential6 from '../../assets/Residential/Residential_6.jpg';
import Residential7 from '../../assets/Residential/Residential_7.jpg';
import Residential8 from '../../assets/Residential/Residential_8.jpg';
import Residential9 from '../../assets/Residential/Residential_9.jpg';
import Residential10 from '../../assets/Residential/Residential_10.jpg';
import Residential11 from '../../assets/Residential/Residential_11.jpg';
import Residential12 from '../../assets/Residential/Residential_12.jpg';
import Residential14 from '../../assets/Residential/Residential_14.jpg';
import Residential15 from '../../assets/Residential/Residential_15.jpg';
import Residential16 from '../../assets/Residential/Residential_16.jpg';
import Residential17 from '../../assets/Residential/Residential_17.jpg';
import Residential18 from '../../assets/Residential/Residential_18.jpg';
import Residential19 from '../../assets/Residential/Residential_19.jpg';
import Residential20 from '../../assets/Residential/Residential_20.jpg';
import Residential21 from '../../assets/Residential/Residential_21.jpg';

// Installation Generator
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
    return () => document.body.classList.remove('electric-page');
  }, []);

  // Industrial images
  const industrialImages = [
    Industrial1, Industrial2, Industrial3, Industrial4, Industrial5,
    Industrial6, Industrial7, Industrial8, Industrial9, Industrial10,
    Industrial11, Industrial12, Industrial13
  ];

  // Commercial images
  const commercialImages = [
    Commercial1, Commercial2, Commercial3, Commercial4, Commercial5,
    Commercial6, Commercial7, Commercial8, Commercial9, Commercial10,
    Commercial11, Commercial12
  ];

  // Residential: FIXED → now using {type, src}
  const residentialMedia = [
    { type: 'image', src: Residential1 },
    { type: 'image', src: Residential2 },
    { type: 'image', src: Residential3 },
    { type: 'image', src: Residential4 },
    { type: 'image', src: Residential5 },
    { type: 'image', src: Residential6 },
    { type: 'image', src: Residential7 },
    { type: 'image', src: Residential8 },
    { type: 'image', src: Residential9 },
    { type: 'image', src: Residential10 },
    { type: 'image', src: Residential11 },
    { type: 'image', src: Residential12 },
    { type: 'image', src: Residential14 },
    { type: 'image', src: Residential15 },
    { type: 'image', src: Residential16 },
    { type: 'image', src: Residential17 },
    { type: 'image', src: Residential18 },
    { type: 'image', src: Residential19 },
    { type: 'image', src: Residential20 },
    { type: 'image', src: Residential21 }
  ];

  // For cleaner rows
  const industrialFirstRow = industrialImages.slice(0, 7);
  const industrialSecondRow = industrialImages.slice(7);
  const commercialFirstRow = commercialImages.slice(0, 6);
  const commercialSecondRow = commercialImages.slice(6);

  const handleBackClick = () => navigate(-1);

  const handleContactClick = () => {
    if (window.location.pathname === '/') {
      const section = document.getElementById('contact');
      return section
        ? section.scrollIntoView({ behavior: 'smooth' })
        : navigate('/#contact');
    }
    navigate('/#contact');
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

  // FIXED: now supports residential
  const getCurrentGallery = () => {
    if (currentGallery === 'industrial') return industrialImages;
    if (currentGallery === 'commercial') return commercialImages;
    if (currentGallery === 'residential') return residentialMedia.map(i => i.src);
    return installationGeneratorMedia.map(i => i.src);
  };

  const handleNextImage = () => {
    const gallery = getCurrentGallery();
    const currentIndex = gallery.indexOf(selectedImage || selectedVideo);
    const nextIndex = (currentIndex + 1) % gallery.length;

    const nextSrc = gallery[nextIndex];
    const nextItem =
      installationGeneratorMedia.find(i => i.src === nextSrc) ||
      residentialMedia.find(i => i.src === nextSrc);

    if (nextItem?.type === 'video') {
      setSelectedVideo(nextItem.src);
      setSelectedImage(null);
    } else {
      setSelectedImage(nextSrc);
      setSelectedVideo(null);
    }
  };

  const handlePrevImage = () => {
    const gallery = getCurrentGallery();
    const currentIndex = gallery.indexOf(selectedImage || selectedVideo);
    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;

    const prevSrc = gallery[prevIndex];
    const prevItem =
      installationGeneratorMedia.find(i => i.src === prevSrc) ||
      residentialMedia.find(i => i.src === prevSrc);

    if (prevItem?.type === 'video') {
      setSelectedVideo(prevItem.src);
      setSelectedImage(null);
    } else {
      setSelectedImage(prevSrc);
      setSelectedVideo(null);
    }
  };

  // Universal render function
  const renderMediaItem = (item, index, gallery) => {
    if (item.type === 'video') {
      return (
        <div key={index} className="project-card" onClick={() => handleVideoClick(item.src, gallery)}>
          <div className="video-thumbnail">
            <video src={item.src} className="project-image" />
            <div className="video-play-icon">▶</div>
          </div>
        </div>
      );
    }

    return (
      <div key={index} className="project-card" onClick={() => handleImageClick(item.src, gallery)}>
        <img src={item.src} className="project-image" />
      </div>
    );
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

      {/* Tabs */}
      <div className="projects-tabs">
        <button className={`tab-button ${currentGallery === 'residential' ? 'active' : ''}`} onClick={() => setCurrentGallery('residential')}>Residential</button>
        <button className={`tab-button ${currentGallery === 'commercial' ? 'active' : ''}`} onClick={() => setCurrentGallery('commercial')}>Commercial</button>
        <button className={`tab-button ${currentGallery === 'industrial' ? 'active' : ''}`} onClick={() => setCurrentGallery('industrial')}>Industrial</button>
      </div>

      {/* Industrial */}
      {currentGallery === 'industrial' && (
        <div className="projects-section">
          <h2 className="section-title">Industrial Projects</h2>
          
          {/* Industrial Subcategory Divs - Non-clickable */}
          <div className="industrial-subcategories">
            <div className="industrial-subcategory industrial-subcategory-active">
              Electrical Service Wiring
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Data Center & Wiring
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Indestrial Power Panels
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Square D Switchgear and Distribution Panels
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Industrial Lighting and Circulation
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Indestrial Electrical Cabinets
            </div>
            <div className="industrial-subcategory industrial-subcategory-active">
              Underground Electrical Installation
            </div>
          </div>

          <div className="images-row">
            {industrialFirstRow.map((img, i) => (
              <div key={i} className="project-card" onClick={() => handleImageClick(img, 'industrial')}>
                <img src={img} className="project-image" />
              </div>
            ))}
          </div>
          <div className="images-row">
            {industrialSecondRow.map((img, i) => (
              <div key={i + 7} className="project-card" onClick={() => handleImageClick(img, 'industrial')}>
                <img src={img} className="project-image" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Commercial */}
      {currentGallery === 'commercial' && (
        <div className="projects-section">
          <h2 className="section-title">Commercial Projects</h2>
          
          {/* Commercial Subcategory Divs - Non-clickable */}
          <div className="commercial-subcategories">
            <div className="commercial-subcategory commercial-subcategory-active">
              Commercial Electric Service Maintenance
            </div>
            <div className="commercial-subcategory commercial-subcategory-active">
              Commercial Electrical Systems
            </div>
            <div className="commercial-subcategory commercial-subcategory-active">
              Retail Lighting Services
            </div>
             <div className="commercial-subcategory commercial-subcategory-active">
              Commercial Lighting Installation
            </div>
             <div className="commercial-subcategory commercial-subcategory-active">
              Office Lighting Installation
            </div>
          </div>

          <div className="images-row">
            {commercialFirstRow.map((img, i) => (
              <div key={i} className="project-card" onClick={() => handleImageClick(img, 'commercial')}>
                <img src={img} className="project-image" />
              </div>
            ))}
          </div>
          <div className="images-row">
            {commercialSecondRow.map((img, i) => (
              <div key={i + 6} className="project-card" onClick={() => handleImageClick(img, 'commercial')}>
                <img src={img} className="project-image" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Residential */}
      {currentGallery === 'residential' && (
        <div className="projects-section">
          <h2 className="section-title">Residential Projects</h2>
          
          {/* Residential Subcategory Divs - Non-clickable */}
          <div className="residential-subcategories">
            <div className="residential-subcategory residential-subcategory-active">
              Residential Ceiling Fans
            </div>
            <div className="residential-subcategory residential-subcategory-active">
              Residential Bathroom Lighting
            </div>
            <div className="residential-subcategory residential-subcategory-active">
              Electrical Service Upgrades
            </div>
          </div>

          <div className="images-row">
            {residentialMedia.map((item, i) => renderMediaItem(item, i, 'residential'))}
          </div>
        </div>
      )}

      {/* Installation Generator */}
      {currentGallery === 'installationGenerator' && (
        <div className="projects-section">
          <h2 className="section-title">Installation Generator Projects</h2>
          <div className="images-row">
            {installationGeneratorMedia.map((item, i) =>
              renderMediaItem(item, i, 'installationGenerator')
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={handlePrevImage}>‹</button>

            {selectedImage && <img src={selectedImage} className="modal-image" />}
            {selectedVideo && (
              <video src={selectedVideo} controls autoPlay className="modal-video" />
            )}

            <button className="modal-nav modal-next" onClick={handleNextImage}>›</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Electric;
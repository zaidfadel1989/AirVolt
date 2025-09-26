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
import Garage1 from '../../assets/Garage/Garage_1.jpg';
import Garage2 from '../../assets/Garage/Garage_2.jpg';
import Garage3 from '../../assets/Garage/Garage_3.jpg';
import Garage4 from '../../assets/Garage/Garage_4.jpg';
import Garage5 from '../../assets/Garage/Garage_5.jpg';
import Garage6 from '../../assets/Garage/Garage_6.jpg';
import CarCharger1 from '../../assets/Car Charger/Car Charger_1.jpg';
import CarCharger2 from '../../assets/Car Charger/Car Charger_2.jpg';
import CarCharger4 from '../../assets/Car Charger/Car Charger_4.jpg';
import CarCharger5 from '../../assets/Car Charger/Car Charger_5.jpg';
import CarCharger6 from '../../assets/Car Charger/Car Charger_6.jpg';
// Import Before & After images
import BeforeAfter1 from '../../assets/Before&After/Before_and_After_1.jpg';
import BeforeAfter2 from '../../assets/Before&After/Before_and_After_2.jpg';
import BeforeAfter3 from '../../assets/Before&After/Before_and_After_3.jpg';
import BeforeAfter4 from '../../assets/Before&After/Before_and_After_4.jpg';
import BeforeAfter5 from '../../assets/Before&After/Before_and_After_5.jpg';
import BeforeAfter6 from '../../assets/Before&After/Before_and_After_6.jpg';
import BeforeAfter7 from '../../assets/Before&After/Before_and_After_7.jpg';
import BeforeAfter8 from '../../assets/Before&After/Before_and_After_8.jpg';
import BeforeAfter9 from '../../assets/Before&After/Before_and_After_9.jpg';
import BeforeAfter10 from '../../assets/Before&After/Before_and_After_10.jpg';
import BeforeAfter11 from '../../assets/Before&After/Before_and_After_11.jpg';
import BeforeAfter12 from '../../assets/Before&After/Before_and_After_12.jpg';
import BeforeAfter13 from '../../assets/Before&After/Before_and_After_13.jpg';
import BeforeAfter14 from '../../assets/Before&After/Before_and_After_14.jpg';
import BeforeAfter15 from '../../assets/Before&After/Before_and_After_15.jpg';
// Import Installation Generator media
import InstallationGenerator1 from '../../assets/Installation_Generator/Installation_Generator_1.jpg';
import InstallationGenerator2 from '../../assets/Installation_Generator/Installation_Generator_2.jpg';
import InstallationGenerator3 from '../../assets/Installation_Generator/Installation_Generator_3.mp4';
// Import Residential New Service media
import ResidentialNewService1 from '../../assets/Residential_New_Service/Residential_New_Service_1.jpg';
import ResidentialNewService2 from '../../assets/Residential_New_Service/Residential_New_Service_2.jpg';
import ResidentialNewService3 from '../../assets/Residential_New_Service/Residential_New_Service_3.jpg';
import ResidentialNewService4 from '../../assets/Residential_New_Service/Residential_New_Service_4.mp4';

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

  const residentialImages = [
    Residential1, Residential2, Residential3, Residential4, Residential5,
    Residential6, Residential7, Residential8, Residential9, Residential10,
    Residential11, Residential12
  ];

  const commercialImages = [
    Commercial1, Commercial2, Commercial3, Commercial4, Commercial5,
    Commercial6, Commercial7, Commercial8, Commercial9, Commercial10,
    Commercial11, Commercial12
  ];

  const garageImages = [
    Garage1, Garage2, Garage3, Garage4, Garage5, Garage6
  ];

  const carChargerImages = [
    CarCharger1, CarCharger2, CarCharger4, CarCharger5, CarCharger6
  ];

  const beforeAfterImages = [
    BeforeAfter1, BeforeAfter2, BeforeAfter3, BeforeAfter4, BeforeAfter5,
    BeforeAfter6, BeforeAfter7, BeforeAfter8, BeforeAfter9, BeforeAfter10,
    BeforeAfter11, BeforeAfter12, BeforeAfter13, BeforeAfter14, BeforeAfter15
  ];

  const installationGeneratorMedia = [
    { type: 'image', src: InstallationGenerator1, alt: 'Installation Generator 1' },
    { type: 'image', src: InstallationGenerator2, alt: 'Installation Generator 2' },
    { type: 'video', src: InstallationGenerator3, alt: 'Installation Generator Video' }
  ];

  const residentialNewServiceMedia = [
    { type: 'image', src: ResidentialNewService1, alt: 'Residential New Service 1' },
    { type: 'image', src: ResidentialNewService2, alt: 'Residential New Service 2' },
    { type: 'image', src: ResidentialNewService3, alt: 'Residential New Service 3' },
    { type: 'video', src: ResidentialNewService4, alt: 'Residential New Service Video' }
  ];

  // Split images into rows for better layout
  const industrialFirstRow = industrialImages.slice(0, 7);
  const industrialSecondRow = industrialImages.slice(7, 13);
  const residentialFirstRow = residentialImages.slice(0, 6);
  const residentialSecondRow = residentialImages.slice(6, 12);
  const commercialFirstRow = commercialImages.slice(0, 6);
  const commercialSecondRow = commercialImages.slice(6, 12);
  const garageFirstRow = garageImages.slice(0, 3);
  const garageSecondRow = garageImages.slice(3, 6);
  const carChargerFirstRow = carChargerImages.slice(0, 3);
  const carChargerSecondRow = carChargerImages.slice(3, 5);
  const beforeAfterFirstRow = beforeAfterImages.slice(0, 8);
  const beforeAfterSecondRow = beforeAfterImages.slice(8, 15);
  const installationGeneratorRow = installationGeneratorMedia;
  const residentialNewServiceRow = residentialNewServiceMedia;

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
    if (currentGallery === 'residential') return residentialImages;
    if (currentGallery === 'commercial') return commercialImages;
    if (currentGallery === 'garage') return garageImages;
    if (currentGallery === 'carCharger') return carChargerImages;
    if (currentGallery === 'beforeAfter') return beforeAfterImages;
    if (currentGallery === 'installationGenerator') return installationGeneratorMedia.map(item => item.src);
    return residentialNewServiceMedia.map(item => item.src);
  };

  const handleNextImage = () => {
    const currentImages = getCurrentGallery();
    const currentIndex = currentImages.indexOf(selectedImage || selectedVideo);
    const nextIndex = (currentIndex + 1) % currentImages.length;

    if (currentGallery === 'installationGenerator' || currentGallery === 'residentialNewService') {
      const mediaArray = currentGallery === 'installationGenerator' ? installationGeneratorMedia : residentialNewServiceMedia;
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

    if (currentGallery === 'installationGenerator' || currentGallery === 'residentialNewService') {
      const mediaArray = currentGallery === 'installationGenerator' ? installationGeneratorMedia : residentialNewServiceMedia;
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
            <h1>AirVoltPRO</h1>
            <p>ELECTRICAL SERVICES</p>
          </div>
        </div>

        <div className="electric-header-buttons">
          <button className="back-button-contact-style" onClick={handleBackClick}>← Back</button>
          <button className="contact-us-button" onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>

      <div className="projects-tabs">
        <button className={`tab-button ${currentGallery === 'industrial' ? 'active' : ''}`} onClick={() => setCurrentGallery('industrial')}>Industrial</button>
        <button className={`tab-button ${currentGallery === 'commercial' ? 'active' : ''}`} onClick={() => setCurrentGallery('commercial')}>Commercial</button>
        <button className={`tab-button ${currentGallery === 'residential' ? 'active' : ''}`} onClick={() => setCurrentGallery('residential')}>Residential</button>
        <button className={`tab-button ${currentGallery === 'garage' ? 'active' : ''}`} onClick={() => setCurrentGallery('garage')}>Garage</button>
        <button className={`tab-button ${currentGallery === 'carCharger' ? 'active' : ''}`} onClick={() => setCurrentGallery('carCharger')}>Car Charger</button>
        <button className={`tab-button ${currentGallery === 'beforeAfter' ? 'active' : ''}`} onClick={() => setCurrentGallery('beforeAfter')}>Before & After</button>
        <button className={`tab-button ${currentGallery === 'installationGenerator' ? 'active' : ''}`} onClick={() => setCurrentGallery('installationGenerator')}>Installation Generator</button>
        <button className={`tab-button ${currentGallery === 'residentialNewService' ? 'active' : ''}`} onClick={() => setCurrentGallery('residentialNewService')}>Residential New Service</button>
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

      {currentGallery === 'residential' && (
        <div className="projects-section">
          <h2 className="section-title">Residential Projects</h2>
          <div className="images-row">{residentialFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'residential')}><img src={image} alt={`Residential project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{residentialSecondRow.map((image, index) => (<div key={index + 6} className="project-card" onClick={() => handleImageClick(image, 'residential')}><img src={image} alt={`Residential project ${index + 7}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'garage' && (
        <div className="projects-section">
          <h2 className="section-title">Garage Projects</h2>
          <div className="images-row">{garageFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'garage')}><img src={image} alt={`Garage project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{garageSecondRow.map((image, index) => (<div key={index + 3} className="project-card" onClick={() => handleImageClick(image, 'garage')}><img src={image} alt={`Garage project ${index + 4}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'carCharger' && (
        <div className="projects-section">
          <h2 className="section-title">Car Charger Projects</h2>
          <div className="images-row">{carChargerFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'carCharger')}><img src={image} alt={`Car Charger project ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{carChargerSecondRow.map((image, index) => (<div key={index + 3} className="project-card" onClick={() => handleImageClick(image, 'carCharger')}><img src={image} alt={`Car Charger project ${index + 4}`} className="project-image" /></div>))}</div>
        </div>
      )}

      {currentGallery === 'beforeAfter' && (
        <div className="projects-section">
          <h2 className="section-title">Before & After Transformations</h2>
          <div className="images-row">{beforeAfterFirstRow.map((image, index) => (<div key={index} className="project-card" onClick={() => handleImageClick(image, 'beforeAfter')}><img src={image} alt={`Before & After transformation ${index + 1}`} className="project-image" /></div>))}</div>
          <div className="images-row">{beforeAfterSecondRow.map((image, index) => (<div key={index + 8} className="project-card" onClick={() => handleImageClick(image, 'beforeAfter')}><img src={image} alt={`Before & After transformation ${index + 9}`} className="project-image" /></div>))}</div>
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

      {currentGallery === 'residentialNewService' && (
        <div className="projects-section">
          <h2 className="section-title">Residential New Service Projects</h2>
          <div className="images-row">
            {residentialNewServiceRow.map((item, index) =>
              renderMediaItem(item, index, 'residentialNewService')
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
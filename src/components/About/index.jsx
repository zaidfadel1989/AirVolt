import React, { useRef } from 'react';
import "./About.css";
import { about_image, building_1, building_2, building_3 } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const About = () => {
const container =useRef(null)
useGSAP(()=>{
  const timeline=gsap.timeline({
    delay:.5,
    scrollTrigger:{
      trigger:container.current,
      start:"20% bottom",
      end:"bottom top",
    }
  })
  timeline
  .from(
    ".company__photo",
    {x:-50,opacity:0}
  )
  .from(".title", {y:-50,opacity:0})


  .from(
    ".sub__title",
    {y:-50,opacity:0}
  )
  .from(
    ".box",
    {x:-50,opacity:0,stagger:.5}
  )
  .from(
    ".description",
    {y:-50,opacity:0}
  )
  .from(
    ".group",
    {y:-50,opacity:0}
  )
  .from(
    ".buttons__container",
    {y:-50,opacity:0}
  )
},{scope:container})


  return (
    <section id='about'>
      <div className='container' ref={container}>

        <div className='column company__photo'>
          <img src={about_image} alt='Benvix' />
        </div>
        <div className='column'> 
          <h1 className='title'>
            <span className='g-text'>About Us</span>
          </h1>
          <h3 className='sub__title'>Realizing visions through fundamental focus.</h3>
        <div className='company__media__container'>
          <div className='box'>
            <img src={building_1} alt='' />
          </div>


          <div className='box'>
            <img src={building_2} alt='' />
          </div>


          <div className='box'>
            <img src={building_3} alt='' />
          </div>
        </div>
       <p className='text__muted description'>
  <h5> <strong>AirVoltPro</strong>  is a full-service, family-owned HVAC and electrical company proudly serving 
  <strong> Cook County and DuPage area for over 25 years</strong>. 
  From day one, we have been committed to delivering high-quality workmanship and exceptional 
  customer service across both industries. Our philosophy is simple: we provide the same level 
  of service that we would expect for our own homes and businesses.

  This dedication to exceeding customer expectations has driven our growth year after year. 
  And while we take pride in how far we’ve come, our top priority remains the same — honoring 
  our promises and ensuring complete satisfaction on every HVAC or electrical project we take on.</h5>
</p>

        <div className='group'>
          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">New Service</p>
              <h3>Installation</h3>
            </div>
          </div>


            <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">Electrical</p>
              <h3>Upgrade</h3>
            </div>
          </div>

<div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">Lighting</p>
              <h3>Fixture</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">Troubleshooting</p>
              <h3>Service</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">Residential </p>
              <h3>Electrician</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted">EV</p>
              <h3>Chargers</h3>
            </div>
          </div>


<div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Circuit Breakers</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>New Construction</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Ceiling Exhaust</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Code Violation And Correction</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Expert Installation</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Sustainable Technology</h3>
            </div>
          </div>

         

<div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Residential HVAC</h3>
            </div>
          </div>




            <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Commercial HVAC</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Installs</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Replacement</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Repairs</h3>
            </div>
          </div>

          <div className='row'>
            <div className='icon__container'>
              <FaCheck />
            </div>
            <div className='details'>
              <p className="text__muted"></p>
              <h3>Maintenance</h3>
            </div>
          </div>


            

          
        </div>
         <div className='buttons__container'>
          <Link to="project" smooth={true} className="btn">Explore</Link>
          {/* <Link to="Contact" smooth={true} className="btn btn__primary">Get a quote</Link> */}

         </div>
        </div>
      </div>
    </section>
  )
}

export default About

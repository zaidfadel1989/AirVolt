// Services.jsx
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import "./Services.css"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import blog1 from "../../assets/blog-1.jpeg";
import service2 from "../../assets/blog-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null)
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    })
    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".sub__title", { y: -50, opacity: 0 })
      .fromTo(
        ".service__img",
        { y: 100, opacity: 0 },
        { opacity: 1, stagger: .5, y: 0 }
      )
  }, { scope: container })

  return (
    <section id='services' ref={container}>
      <div className='container'>
        <div className='services__top'>
          <h1 className='title'>Our <span className='g-text'>Services</span></h1>
          <h3 className='sub__title'>Advanced HVAC systems paired with precise, high-quality electrical services.</h3>
        </div>
        <br />

        <div className='services__container'>
          {/* 👇 Make Electric card clickable */}
<Link to="/electric" className="service__item">
  <img src={blog1} alt="Service 1" className="service__img" />
  <h4 className="service__title">Choose Electric Service</h4>
</Link>

          {/* HVAC card stays the same for now */}
          <Link to="/hvac" className="service__item">
  <img src={service2} alt="HVAC Service" className="service__img" />
  <h4 className="service__title">Choose HVAC Service</h4>
</Link>
        </div>
      </div>
    </section>
  )
}

export default Services

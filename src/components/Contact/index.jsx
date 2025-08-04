import React, { useRef } from 'react';
import "./Contact.css";
import { contacts } from "../../data";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    });

    timeline
      .fromTo(".contact__form", 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo(".option", 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.5 }
      );
  }, { scope: container });

  return (
    <section id='contact' ref={container}>
      <div className='container'>
        <div className='contact__form'>
          <div className='contact__form__top'>
            <h1 className='title'>
              <span className='g-text'>Join forces with us!</span>
            </h1>
            <p className='text__muted'>
              We build with precision and passion, creating structures that stand 
              the test of time. It's as straightforward as that!
            </p>
          </div>

          {/* ✅ Formspree Form */}
          <form 
            action="https://formspree.io/f/xwpqrvyv"
            method="POST"
            className='contact__form__middle'
          >
            <div className='row'>
              <input type='text' name="firstname" placeholder='First name' className='control' required />
              <input type='text' name="lastname" placeholder='Last name' className='control' required />
            </div>

            <div className='row'>
              <input type='email' name="email" placeholder='Email address' className='control' required />
              <input type='tel' name="phone" placeholder='Phone number' className='control' />
            </div>

            <textarea name='message' placeholder='Message' className='control' rows={5} required></textarea>

            <div className='contact__form__bottom'>
              <button type="submit" className='btn btn__primary'>Send Now</button>
            </div>
          </form>
        </div>

        {/* ✅ Contact Options */}
        <div className='contact__options'>
          {contacts.map((contact, index) => (
            <div className='option' key={index}>
              <div className='icon__container'>
                {contact.icon}
              </div>
              <h3 className='name'>{contact.name}</h3>
              <h4 className='text__muted'>{contact.value}</h4>
              <div>
                <a 
                  href={contact.link} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='btn btn__primary'
                >
                  {contact.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

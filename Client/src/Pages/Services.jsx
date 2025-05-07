import React, { useEffect, useRef } from 'react';
import { FaPhotoVideo, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import './Services.css';
import { FaCentos } from "react-icons/fa";
import { FaMagento } from "react-icons/fa6";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdAutoMode } from "react-icons/md";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { SiBentobox } from "react-icons/si";
import { SiHtop } from "react-icons/si";
import { IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ourServices = [
    { 
      no: "01",
      icon: <FaPhotoVideo />, 
      title: "Social Media Management", 
      colour: "#8B5CF6",
      p: (
        <>
          Our ideas and strategies evolve with the<br /> ever changing social media landscape
          and thrive on<br /> delivering tangible results
        </>
      )
    },
    { 
      no: "02", 
      icon: <FaCentos />, 
      title: "SEO Optimization", 
      colour: "#C084FC",
      p: (
        <>
          As a result-oriented SEO company in Kerala,<br />
          we help you rise to the forefront of the search results<br />
          and bring more sales-qualified visitors to your website.<br />
        </>
      )
    },
    { 
      no: "03", 
      icon: <FaMagento />, 
      title: "Pay-Per-Click", 
      colour: "#EC4899",
      p: (
        <>
          Our strategies are tailored to your brand to<br /> increase visibility
          and drive results.
        </>
      )
    },
    { 
      no: "04", 
      icon: <IoFingerPrintOutline />, 
      title: "Branding", 
      colour: "#8B5CF6",
      p: (
        <>
          We are committed to becoming your partners<br /> in your journey
          and are with you from brand integration<br />
          to constant refining of your brand strategy.
        </>
      )
    },
    { 
      no: "05", 
      icon: <MdAutoMode />, 
      title: "Web Development", 
      colour: "#C084FC",
      p: (
        <>
          We understand that your website is a bridge<br />
          that connects your audience to yours,
          and so we make this a<br /> personalized experience.
        </>
      )
    },
    { 
      no: "06", 
      icon: <TiPointOfInterestOutline />, 
      title: "Digital PR & Communication", 
      colour: "#EC4899",
      p: (
        <>
          Our services include effective media outreach,<br />
          relationship-building, crisis communication,<br />
          and rapid communication.
        </>
      )
    },
    { 
      no: "07", 
      icon: <SiBentobox />, 
      title: "Creative", 
      colour: "#F9A8D4",
      p: (
        <>
          Our creative team refines those values<br />
          to effectively bring out the brand’s<br /> unique selling points.

        </>
      )
    },
    { 
      no: "08", 
      icon: <SiHtop />, 
      title: "Performance Marketing", 
      colour: "#8B5CF6",
      p: (
        <>
          From concept to creation,<br />
          our production team delivers visually stunning<br />
          and captivating content for your brand.
        </>
      )
    },
  ];
  

  return (
    <div id='services' className="services-container fade-in">
      <h2 className="services-title">Our Services</h2>
        <p className='services-p'>Elevate Your Brand Presence with Innovative Digital Solutions</p>
      <div className="services-scroll" ref={scrollRef}>
        {ourServices.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundColor: service.colour }}
          >
            <div className="service-icon">{service.icon}</div>
            <div className='service-inner'>
                <div className="service-no">{service.no}</div>
                <div className="service-title">{service.title}</div>
            </div>
            <p className="service-description">{service.p}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button left" onClick={() => scroll('left')}>
        <IoIosArrowBack />
      </button>
      <button className="scroll-button right" onClick={() => scroll('right')}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Services;

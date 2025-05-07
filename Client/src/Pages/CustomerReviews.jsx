import React, { useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './CustomerReviews.css';

const CustomerReviews = () => {
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

  const reviews = [
    {
      no: 1,
      profilepic: <CgProfile />,
      name: 'Arun Raj',
      date: '16.February,2021',
      rate: '/images/fivestart.png',
      comment: 'Nice One'
    },
    {
      no: 2,
      profilepic: <CgProfile />,
      name: 'Muhammed Irfan',
      date: '01.April,2024',
      rate: '/images/fivestart.png',
      comment: `The agency has a diverse team of talented and passionate 
      professionals who are dedicated to creating amazing work. We were 
      truly impressed with their level of expertise and creativity.-Team Bigwig Inceptions`
    },
    {
      no: 3,
      profilepic: <CgProfile />,
      name: 'Zayyan Noor',
      date: '27.November,2020',
      rate: '/images/fivestart.png',
      comment: `We, NV Brothers Engineering had the opportunity to work with DigitalWave 
      for a brochure and website project, and we must say we are thoroughly impressed with the results. 
      The designer listened to my needs and created a brochure that accurately reflects my business and speaks to my target audience. The design is eye-catching and professional, and the overall layout is easy to navigate. The website is also fantastic. It has a clean, modern look and is user-friendly. The designer was quick to respond to any changes or updates we requested, and they made sure the website was optimized for search engines. We highly recommend Quadcubes for anyone looking for top-notch work.`
    },
    {
      no: 4,
      profilepic: <CgProfile />,
      name: 'Samuel',
      date: '12.March,2019',
      rate: '/images/fivestart.png',
      comment: `Doyen Legals is very much happy with the branding work done by DigitalWave. The agency's communication and project management skills were top-notch. They kept us informed and involved throughout the entire process.`
    },
  ];

  return (
    <div className="customer-reviews-container fade-in">
      <h2 className="customer-reviews-title">HAPPY STORIES</h2>
      <p className="customer-reviews-subtitle">
        Take a look at digital marketing agency experience by our happy clients in Kerala
      </p>

        <div className="reviews-wrapper">
            <div className="excellent">
                <h3>Excellent</h3>
                <img src="/images/fivestart.png" alt="fivestar" className="star-rating" />
                <p>Based on <span>36 reviews</span></p>
                <img src="/images/googleiconbig.png" alt="Google" className="google-icon" />
            </div>

            <div className="customer-reviews-scroll" ref={scrollRef}>
                {reviews.map((item) => (
                <div key={item.no} className="review-card">
                    <div className="review-header">
                    <div className="review-profile-icon">{item.profilepic}</div>
                    <div className="review-user-info">
                        <span className="review-user-name">{item.name}</span>
                        <span className="review-date">{item.date}</span>
                    </div>
                    </div>
                    <img src={item.rate} alt="rating" className="review-rating" />
                    <div className="review-comment">{item.comment}</div>
                </div>
                ))}
            </div>
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

export default CustomerReviews;

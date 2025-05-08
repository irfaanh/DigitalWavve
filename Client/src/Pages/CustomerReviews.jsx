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
      comment: `We partnered with DigitalWave to revamp our
       online strategy, and the results have been phenomenal.`
    },
    {
      no: 3,
      profilepic: <CgProfile />,
      name: 'Zayyan Noor',
      date: '27.November,2020',
      rate: '/images/fivestart.png',
      comment: `What sets DigitalWave apart is their strategic approach.
       They don’t just run campaigns—they take time to understand your brand, goals, and audience.`
    },
    {
      no: 4,
      profilepic: <CgProfile />,
      name: 'Fathima',
      date: '07.March,2021',
      rate: '/images/fivestart.png',
      comment: `As a small startup, we were hesitant about investing in digital 
      marketing. DigitalWave tailored a budget-friendly plan that delivered real value.`
    },{
        no: 5,
        profilepic: <CgProfile />,
        name: 'Alex',
        date: '29.June,2011',
        rate: '/images/fivestart.png',
        comment: `While the initial onboarding took a bit longer than
         expected, once everything was in place, the campaigns ran smoothly.`
      }
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

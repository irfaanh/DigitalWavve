import React, { useEffect, useState } from 'react';
// import { CgProfile } from "react-icons/cg";
import './CustomerReviews.css';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      no: 1,
      profilepic: '/images/profileimg/pf4-removebg-preview.png',
      name: 'Arun Raj',
      date: '16.February,2021',
      comment: 'Nice One'
    },
    {
      no: 2,
      profilepic: '/images/profileimg/pf3-removebg-preview.png',
      name: 'Muhammed Irfan',
      date: '01.April,2024',
      comment: `We partnered with DigitalWave to revamp our
      online strategy, and the results have been phenomenal.`
    },
    {
      no: 3,
      profilepic: '/images/profileimg/pf2-removebg-preview.png',
      name: 'Zayyan Noor',
      date: '27.November,2020',
      comment: `What sets DigitalWave apart is their strategic approach.
      They don’t just run campaigns—they take time to understand your brand, goals, and audience.`
    },
    {
      no: 4,
      profilepic: '/images/profileimg/pf5-removebg-preview.png',
      name: 'Fathima',
      date: '07.March,2021',
      comment: `As a small startup, we were hesitant about investing in digital 
      marketing. DigitalWave tailored a budget-friendly plan that delivered real value.`
    },
    {
      no: 5,
      profilepic: '/images/profileimg/pf1-removebg-preview.png',
      name: 'Alex',
      date: '29.June,2011',
      comment: `While the initial onboarding took a bit longer than
      expected, once everything was in place, the campaigns ran smoothly.`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="customer-reviews-container fade-in">
      <h2 className="customer-reviews-title">WHAT OUR CLIENTS SAY</h2>
      <p className="customer-reviews-subtitle">
        Take a look at digital marketing agency experience by our happy clients in Kerala
      </p>

      <div className="review-fade-wrapper">

        {reviews.map((item, index) => (
          <div
            key={item.no}
            className={`review-card fade-transition ${index === currentIndex ? 'active' : ''}`}
          >
            {/* <div className="review-header">
                    <div className="review-profile-icon">{item.profilepic}</div>
                    <div className="review-user-info">
                        <span className="review-user-name">{item.name}</span>
                        <span className="review-date">{item.date}</span>
                    </div> */}
            <div className="review-profile-icon">

              <img src={item.profilepic} alt="profilepic" />
            </div>
            <span className="review-user-name">{item.name}</span>
            <div className="review-comment">{item.comment}</div>
            <span className="review-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;

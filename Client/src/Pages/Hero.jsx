import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className='hero'>
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="herofull row align-items-center">
        <div className="heroleft col-lg-6 text-md-center text-sm-center">
          <h1 className='caption_head fade-in'>Boost Your Business with <span style={{color:'#60A5FA'}}>DigitalWave</span> Marketing
          Solutions!</h1>
          <a href={`tel:${11111111111}`}><button className="cont_btn fade-in-delay">Get Started</button></a>
        </div>
        <div className="col-lg-6 text-md-center text-sm-center">
          <img
            className="center_img mw-100"
            src="/images/heroooo.jpg"
            alt="heroimg"
          />
        </div>
      </div>
      <div className='opentime'>
        <p>MON - SAT</p>
        <p>9AM - 6PM</p>
      </div>
    </div>
  </section>
  )
}

export default Hero
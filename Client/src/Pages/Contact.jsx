import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact' className="bottom-contact fade-in">
      <h2 className="contact-heading">Contact Us</h2>
      
      <div className="contact-content">
      <form className="contact-form" action="https://formspree.io/f/xgvkwjon" method="POST">
        <div className="form-group">
            <input type="text" name="firstName" placeholder="Full Name" required />
            <input type="text" name="contactNumber" placeholder="Contact Number" required />
        </div>

        <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
            <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send</button>
        </form>


        <div className="map-container">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.8484612987397!2d75.90970766962451!3d11.378914599300554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6694f0123bdcf%3A0x1c579a28d7a51bf0!2sNUMERO%20MOBILES!5e0!3m2!1sen!2sin!4v1745289822818!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact

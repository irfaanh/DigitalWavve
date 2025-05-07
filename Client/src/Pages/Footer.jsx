import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2025 DigitalWave . All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Terms & Condition</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
      </div>
      
      
      <div className="footer-socials">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaSquareXTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
    </footer>
  )
}

export default Footer;

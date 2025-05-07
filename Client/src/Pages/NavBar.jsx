import React from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './NavBar.css'

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light px-3 fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logodiv">
            <a href="#home"><img
              className="logoimg"
              src="/images/dmlogonew.png"
              alt="logo"
            />
            </a>
          </div>

          <div className="toggleicon d-lg-none">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        <div className="navlink px-3 w-100">
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar

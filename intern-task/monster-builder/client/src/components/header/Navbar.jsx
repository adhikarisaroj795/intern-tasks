import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header-wrapper">
        <header className="container-navbar">
          <div className="nav-logo">
            <img src="images/monster-logo.png" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li className="svc_arrow1">
                <a href="">
                  Services
                  <span className="svc_arrow"></span>
                </a>

                <div className="nav-modal">
                  <ul>
                    <li>
                      <a href="">Design</a>
                    </li>
                    <li>
                      <a href="">CNC Machine</a>
                    </li>
                    <li>
                      <a href="">Sheet Metal Fabrication</a>
                    </li>
                    <li>
                      <a href="">3D Printing</a>
                    </li>
                    <li>
                      <a href="">Vaccump Casting</a>
                    </li>
                    <li>
                      <a href="">Metal Stamping</a>
                    </li>
                    <li>
                      <a href="">Injection Molding</a>
                    </li>
                    <li>
                      <a href="">Fabrication Materials</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="" className="gbl-btn">
                  Get a Quote
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;

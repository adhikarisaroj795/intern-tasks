import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/aboutus"}>About Us</Link>
              </li>
              <li className="svc_arrow1">
                <Link to="/services">
                  Services
                  <span className="svc_arrow"></span>
                </Link>

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
                <Link to={"faqs"}>FAQs</Link>
              </li>
              <li>
                <Link to={"blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"contact"} className="gbl-btn">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;

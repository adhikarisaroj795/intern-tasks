import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <div className="header-wrapper">
        <header className="container-navbar">
          <div className="nav-logo">
            <img src="images/monster-logo.png" alt="" />
          </div>
          <nav className={isOpen ? "nav-open" : ""}>
            <ul className={isOpen ? "nav-menu-open" : ""}>
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

            <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;

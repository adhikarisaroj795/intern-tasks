import React, { useState, useRef, useEffect } from "react";
import "./acccordion.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentsRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentsRef.current.style.maxHeight = `${contentsRef.current.scrollHeight}px`;
    } else {
      contentsRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return (
    <div className="accordion-card-faq">
      <div className="accordion-heading" onClick={toggleAccordion}>
        <span className={`accord-heading-title ${isOpen ? "open" : ""}`}>
          {title}
        </span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      <div className="accordion-contents-wrapper" ref={contentsRef}>
        <div className="accordion-contents">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

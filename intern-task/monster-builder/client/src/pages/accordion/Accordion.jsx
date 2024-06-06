import React, { useState } from "react";
import "./accordion.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>Your Heading Text</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <span className="accordion-content">
          <p>
            This is the paragraph that will be shown or hidden when the header
            is clicked. This is the paragraph that will be shown or hidden when
            the header is clicked. This is the paragraph that will be shown or
            hidden when the header is clicked. This is the paragraph that will
            be shown or hidden when the header is clicked.
          </p>
        </span>
      )}
    </div>
  );
};
export default Accordion;

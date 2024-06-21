"use client";

import React, { useState } from 'react';

const Accordion = ({ items, className }) => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggle = (index) => {
    setActiveIndices(prevActiveIndices =>
      prevActiveIndices.includes(index)
        ? prevActiveIndices.filter(i => i !== index)
        : [...prevActiveIndices, index]
    );
  };

  return (
    <div className={"accordion " + className} id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button fw-bold fs-5 ${activeIndices.includes(index) ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndices.includes(index)}
              aria-controls={`collapse${index}`}
              style={{
                backgroundColor: activeIndices.includes(index) ? '#daebfd' : '',
              }}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndices.includes(index) ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
          >
            <div className="accordion-body text-start">
              <span className="fs-5">
                {item.answer}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

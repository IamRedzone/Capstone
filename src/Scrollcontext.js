import React, { createContext, useRef } from 'react';

// Create the context
export const ScrollContext = createContext();

// ScrollProvider component
export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};
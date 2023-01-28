import React from "react";

const MultiRenderer = ({ times = 1 ,containerClass="", children}) => {
  return [...Array(times)].map((e, i) => (
    <div className={`${containerClass}`}  key={i}>
    
      {children}
    </div>
  ));
};

export default MultiRenderer;

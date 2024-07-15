import React from "react";

const Button = ({ buttonTitle, className = "", icon }) => {
  return (
    <button className={`styled-button ${className}`}>
      {buttonTitle}
      {icon}
    </button>
  );
};

export default Button;

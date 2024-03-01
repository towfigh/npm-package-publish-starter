import React from "react";
import "./style.css";

const Button = ({ children, ...props }) => {
  return (
    <button className="base_button" {...props}>
      {children}
    </button>
  );
};

export default Button;

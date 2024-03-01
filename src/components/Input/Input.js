import React from "react";
import "./style.css";

const Input = ({
  placeholder = "",
  type = "text",
  value = "",
  className = "",
  style = {},
  onChange,
  ...props
}) => {
  return (
    <input
      className={`base_input ${className}`}
      style={style}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;

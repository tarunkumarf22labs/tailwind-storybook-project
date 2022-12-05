import React from "react";
import PropTypes from "prop-types";

export const Card = ({ children, isdisabled, isoutlined }) => {
  return (
    <button
      className={`w-full p-2 mb-4 text-white border-black border-4 ${
        isdisabled ? "opacity-60" : "opacity-100"
      }
        ${isoutlined ? "bg-transparent text-black" : "bg-black"}
      `}
      disabled={isdisabled}
    >
      {children}
    </button>
  );
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
  isdisabled: PropTypes.bool,
  isoutlined: PropTypes.bool,
};

Card.defaultProps = {
  children : 'Hello world'
}
export default Card;

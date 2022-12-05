import React from "react";
import PropTypes from "prop-types";

function Button({
  children = "Hello world",
  isdisabled = false,
  isoutlined = false,
}) {
  return (
    <button
      className={`w-full p-2 mb-4 text-white border-black border-4 ${
        isdisabled ? "opacity-60" : "opacity-100"
      }
        ${isoutlined ? "bg-transparent text-black" : "bg-black"}
      `}
      disabled={isdisabled}
      type="submit"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isdisabled: PropTypes.bool,
  isoutlined: PropTypes.bool,
};
Button.defaultProps = {
  // children: "Hello world",
  isdisabled: false,
  isoutlined: false,
};
export default Button;

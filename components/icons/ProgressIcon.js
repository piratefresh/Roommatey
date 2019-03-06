import React from "react";
import PropTypes from "prop-types";

function ProgressIcon({ className, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      className={className}
    >
      <path
        fill={fill}
        d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"
      />
    </svg>
  );
}

ProgressIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ProgressIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default ProgressIcon;

import React from "react";
import PropTypes from "prop-types";

function CalenderIcon({ className, fill }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill={fill}
        d="M9 10H7v2h2v-2m4 0h-2v2h2v-2m4 0h-2v2h2v-2m2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V8h14v11z"
      />
    </svg>
  );
}

CalenderIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

CalenderIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default CalenderIcon;

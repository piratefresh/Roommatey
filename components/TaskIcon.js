import React from "react";
import PropTypes from "prop-types";

function TaskIcon({ className, fill, height, width }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill={fill}
        d="M3 3h6v4H3V3m12 7h6v4h-6v-4m0 7h6v4h-6v-4m-2-4H7v5h6v2H5V9h2v2h6v2z"
      />
    </svg>
  );
}

TaskIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

TaskIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default TaskIcon;

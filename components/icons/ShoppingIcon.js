import React from "react";
import PropTypes from "prop-types";

function ShoppingIcon({ className, fill, height, width }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill={fill}
        d="M3 5h6v6H3V5m2 2v2h2V7H5m6 0h10v2H11V7m0 8h10v2H11v-2m-6 5l-3.5-3.5 1.41-1.41L5 17.17l4.59-4.58L11 14l-6 6z"
      />
    </svg>
  );
}

ShoppingIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string
};

ShoppingIcon.defaultProps = {
  className: undefined,
  fill: "rgba(0, 0, 0, 0.35)"
};

export default ShoppingIcon;

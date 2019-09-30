import React from "react";
import PropTypes from "prop-types";

const VisibilityFilter = ({ onClick, filters }) => {
  return (
    <>
      {Object.keys(filters).map((filter, index) => {
        return (
          <button key={index} onClick={() => onClick(filter)}>
            {filters[filter]}
          </button>
        );
      })}
    </>
  );
};

VisibilityFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};

export default VisibilityFilter;

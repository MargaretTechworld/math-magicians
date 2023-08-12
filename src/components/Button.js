import React from 'react';
import PropTypes from 'prop-types';

function Button({ value, className, onClick }) {
  const handleButtonClick = () => {
    onClick(value);
  };
  return (
    <button type="button" className={className} onClick={handleButtonClick}>
      {value}
    </button>
  );
}

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

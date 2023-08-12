import React from 'react';
import PropTypes from 'prop-types';

function Input({ value }) {
  return <div className="child output">{ value }</div>;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;

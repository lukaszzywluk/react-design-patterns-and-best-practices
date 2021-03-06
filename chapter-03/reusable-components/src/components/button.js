import React from 'react';

const Button = ({ children }) => (
  <button className="btn">{children}</button>
);

Button.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element,
  ]),
};

export default Button;

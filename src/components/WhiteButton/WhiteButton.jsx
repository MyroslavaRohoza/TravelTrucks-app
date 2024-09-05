import React from 'react';
import css from './whiteButton.module.css';

const WhiteButton = React.forwardRef(({ children, addClass = "", onClick, ...otherProps }, ref) => {
  return (
    <button
      className={`${css.btn} ${addClass}`}
      onClick={onClick}
      ref={ref} 
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default WhiteButton;

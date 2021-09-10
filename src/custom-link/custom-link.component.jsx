import React from 'react';
import { NavLink } from 'react-router-dom';
import './custom-link.styles.scss';

const CustomLink = ({ children, ...otherProps }) => (
  <div className="CustomLink">
    <NavLink to="/" {...otherProps}>
      {children}
    </NavLink>
  </div>
);

export default CustomLink;

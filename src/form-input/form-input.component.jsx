import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="FormInput">
    <input
      className="FormInput-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''} FormInput-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

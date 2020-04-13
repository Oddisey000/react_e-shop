import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChanges, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChanges} {...otherProps} />
    {/** Checking if input hase a label, if has then generate and render it */}
    {label ? 
      (<label
        /** Apply class 'shrink' when user typed anything into input field or click on input field
         * also allways apply class 'form-input-label' 
         **/
        className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
      >
        {label /** Render the label text */}
      </label>) 
    : null}
  </div>
);

export default FormInput;
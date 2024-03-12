import React, { forwardRef } from "react";

const Form = forwardRef(
  ({ formName, type, inputRef, value, setValue }, ref) => {
    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor={formName} className="col-form-label">
            {formName}
          </label>
        </div>
        <div className="col-auto">
          <input
            type={type}
            id={formName}
            className="form-control"
            aria-describedby="passwordHelpInline"
            ref={inputRef}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
);

export default Form;
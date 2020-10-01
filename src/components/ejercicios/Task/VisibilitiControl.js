import React from "react";

export const VisibilityControl = (props) => {
  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          checked={props.isChecked}
          onChange={(e) => props.callback(e.target.checked)}
        />
        Show Completed
      </label>
    </div>
  );
};

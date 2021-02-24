import { useState } from "react";

function Checkbox({ label, handleChange }) {
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleInputChange = (event) => {
    setCheckboxValue(event.target.checked);
    handleChange(label);
  };
  return (
    <p>
      <label>
        <input
          type="checkbox"
          onChange={handleInputChange}
          checked={checkboxValue}
        />
        <span>{label}</span>
      </label>
    </p>
  );
}

export default Checkbox;

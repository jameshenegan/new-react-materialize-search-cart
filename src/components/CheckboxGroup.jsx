import Checkbox from "./Checkbox";
import { useState } from "react";

export default function CheckboxGroup({
  labels,
  groupName,
  handleGlobalChange,
}) {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleChange = (label) => {
    if (checkedBoxes.includes(label)) {
      setCheckedBoxes(checkedBoxes.filter((lab) => lab !== label));
    } else {
      setCheckedBoxes([...checkedBoxes, label]);
    }
    handleGlobalChange(label);
  };

  return (
    <div>
      <h4>{groupName}</h4>
      {labels.map((label) => {
        return (
          <Checkbox
            label={label}
            key={label}
            handleChange={handleChange}
          ></Checkbox>
        );
      })}
    </div>
  );
}

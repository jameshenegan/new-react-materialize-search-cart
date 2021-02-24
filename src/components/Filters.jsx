import CheckboxGroup from "./CheckboxGroup";

function Filters({ setCheckedBoxes, checkedBoxes }) {
  const handleGlobalChange = (label) => {
    if (checkedBoxes.includes(label)) {
      setCheckedBoxes(checkedBoxes.filter((lab) => lab !== label));
    } else {
      setCheckedBoxes([...checkedBoxes, label]);
    }
  };
  return (
    <div>
      <h2>Filters</h2>
      <CheckboxGroup
        labels={["form", "derived", "instrument"]}
        groupName={"source"}
        handleGlobalChange={handleGlobalChange}
      ></CheckboxGroup>
      <CheckboxGroup
        labels={["make", "it", "to", "monday"]}
        groupName={"covenant"}
        handleGlobalChange={handleGlobalChange}
      ></CheckboxGroup>
      <CheckboxGroup
        labels={["any", "thing", "you", "want"]}
        groupName={"you got it"}
        handleGlobalChange={handleGlobalChange}
      ></CheckboxGroup>
    </div>
  );
}

export default Filters;

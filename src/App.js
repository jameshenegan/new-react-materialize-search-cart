import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import Filters from "./components/Filters";
import data from "./data/targetVariables.json";

function App() {
  const [searchString, setSearchString] = useState("");
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [allSearchResults, setAllSearchResults] = useState([]);

  useEffect(() => {
    let filteredData = [];

    const keywords = searchString.split(" ");

    // Use Checkboxes

    if (checkedBoxes.length > 0) {
      filteredData = data.filter((datum) =>
        checkedBoxes.includes(datum.source.toLowerCase())
      );
    } else {
      filteredData = data;
    }

    for (const keyword of keywords) {
      filteredData = filteredData.filter(
        (datum) =>
          datum.label.toLowerCase().includes(keyword) ||
          datum.sheet.toLowerCase().includes(keyword) ||
          datum.source.toLowerCase().includes(keyword) ||
          datum.name.toLowerCase().includes(keyword)
      );
    }

    setAllSearchResults(filteredData);
  }, [searchString, checkedBoxes]);

  return (
    <div className="container">
      <SearchBox setSearchString={setSearchString}></SearchBox>
      <Filters
        checkedBoxes={checkedBoxes}
        setCheckedBoxes={setCheckedBoxes}
      ></Filters>
    </div>
  );
}

export default App;

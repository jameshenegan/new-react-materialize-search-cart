import { useState, useEffect } from "react";
import { Checkbox, Row, Col } from "react-materialize";
import QueryBuilder from "./QueryBuilder";
import AllSearchResults from "./Components/AllSearchResults";

function App() {
  const [searchString, setSearchString] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkBox1Value, setCheckBox1Value] = useState(false);
  const [checkBox2Value, setCheckBox2Value] = useState(false);

  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleCheckBox1Change = (event) => {
    setCheckBox1Value(event.target.checked);
  };

  const handleCheckBox2Change = (event) => {
    setCheckBox2Value(event.target.checked);
  };

  // Update the search query
  useEffect(() => {
    const filters = {
      form: checkBox1Value,
      derived: checkBox2Value,
    };
    const qb = new QueryBuilder(searchString, filters);
    setSearchQuery(qb.buildQuery());
  }, [searchString, checkBox1Value, checkBox2Value]);

  return (
    <div className="container">
      <Row>
        <Col s={1}>
          <Row>
            <input
              type="text"
              placeholder="Search..."
              onInput={handleSearchChange}
            />
          </Row>
          <Row>Source</Row>
          <Row>
            <Checkbox
              id="CheckBox1"
              label="Form"
              onInput={handleCheckBox1Change}
            />
          </Row>
          <Row>
            <Checkbox
              id="CheckBox2"
              label="Derived"
              onInput={handleCheckBox2Change}
            />
          </Row>
        </Col>
        <Col s={1}></Col>
        <Col s={9}>
          <AllSearchResults searchQuery={searchQuery}></AllSearchResults>
        </Col>
      </Row>
    </div>
  );
}

export default App;

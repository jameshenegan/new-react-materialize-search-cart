import { Divider, Section, Button, Row, Col } from "react-materialize";

// Display the current search results

function ResultsToView(props) {
  const {
    dataToView,
    startIndex,
    endIndex,
    total,
    realPageNumber,
    numPages,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    setSortMode,
  } = props;

  let realStartIndex;
  if (dataToView.length === 0) {
    realStartIndex = 0;
  } else {
    realStartIndex = startIndex;
  }

  const handleAddButtonClick = (itemName) => {
    console.log(itemName);
    addItemToCart(itemName);
  };

  const handleRemoveButtonClick = (itemName) => {
    console.log(itemName);
    removeItemFromCart(itemName);
  };

  return (
    <div>
      <p>
        On page {realPageNumber} of {numPages}, viewing {realStartIndex}-
        {endIndex} of {total} total results.
      </p>
      <p>
        Sort by:{" "}
        <a onClick={() => setSortMode("sheet")} href="#">
          Sheet
        </a>
        ,{" "}
        <a onClick={() => setSortMode("name")} href="#">
          Name
        </a>
      </p>
      {dataToView.map((datum, i) => (
        <div key={i}>
          <Divider></Divider>
          <Section>
            <Row className="valign-wrapper">
              <Col s={8}>
                <h4>{datum.name}</h4>

                <ul>
                  <li>
                    <b>Sheet</b>: {datum.sheet}
                  </li>
                  <li>
                    <b>Name</b>: {datum.name}
                  </li>
                  <li>
                    <b>Label</b>: {datum.label}
                  </li>
                  <li>
                    <b>Source</b>: {datum.source}
                  </li>
                </ul>
              </Col>
              <Col s={4}>
                {cartItems.includes(datum.name) ? (
                  <Button
                    className="red"
                    onClick={() => handleRemoveButtonClick(datum.name)}
                    small={true}
                  >
                    <i className="material-icons">remove_shopping_cart</i>
                  </Button>
                ) : (
                  <Button
                    small={true}
                    onClick={() => handleAddButtonClick(datum.name)}
                  >
                    <i className="material-icons">add_shopping_cart</i>
                  </Button>
                )}
              </Col>
            </Row>
          </Section>
        </div>
      ))}
    </div>
  );
}

export default ResultsToView;

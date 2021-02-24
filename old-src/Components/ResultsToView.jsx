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
      <table className="striped">
        <thead>
          <tr>
            <th>
              {" "}
              <a onClick={() => setSortMode("name")} href="#">
                Name
              </a>
            </th>
            <th>
              {" "}
              <a onClick={() => setSortMode("label")} href="#">
                Label
              </a>
            </th>
            <th>
              {" "}
              <a onClick={() => setSortMode("sheet")} href="#">
                Sheet
              </a>
            </th>
            <th>
              {" "}
              <a onClick={() => setSortMode("source")} href="#">
                Source
              </a>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {dataToView.map((datum, i) => (
            <tr key={i}>
              <td>{datum.name}</td>
              <td>{datum.label}</td>
              <td>{datum.sheet}</td>
              <td>{datum.source}</td>
              <td>
                {" "}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        On page {realPageNumber} of {numPages}, viewing {realStartIndex}-
        {endIndex} of {total} total results.
      </p>
    </div>
  );
}

export default ResultsToView;

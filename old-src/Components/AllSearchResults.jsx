import { useState, useEffect } from "react";
import { Row, Col } from "react-materialize";

import getAllSearchResults from "../GetAllSearchResults";
import SomeSearchResults from "./SomeSearchResults";
import CartItems from "./CartItems";

// Get all of the search results based on the current search query
// keep track of the vurrent page number

function AllSearchResults(props) {
  const resultsPerPage = 5;

  const { searchQuery } = props;
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [allSearchResults, setAllSearchResults] = useState([]);

  const [sortMode, setSortMode] = useState("");

  // Update the Shopping Cart Items

  const [cartItems, updateCartItems] = useState([]);

  const addItemToCart = (name) => {
    updateCartItems([...cartItems, name]);
  };

  const removeItemFromCart = (name) => {
    updateCartItems(cartItems.filter((item) => item !== name));
  };

  useEffect(() => {
    setAllSearchResults(getAllSearchResults(searchQuery));
  }, [props]);

  useEffect(() => {
    setPageNumber(1);
    setNumPages(Math.ceil(allSearchResults.length / resultsPerPage));
  }, [allSearchResults]);

  const handleNextClick = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <Row>
      <Col s={9}>
        <Row>
          <SomeSearchResults
            resultsPerPage={resultsPerPage}
            allSearchResults={allSearchResults}
            pageNumber={pageNumber}
            numPages={numPages}
            addItemToCart={addItemToCart}
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
            setSortMode={setSortMode}
            sortMode={sortMode}
          ></SomeSearchResults>
        </Row>
        <Row>
          Page Selector
          <ul className="pagination">
            <li className="waves-effect">
              <a href="#!" onClick={() => handlePrevClick()}>
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            <li className="active">
              <a href="#!"> {pageNumber}</a>
            </li>
            <li className="waves-effect">
              <a href="#!" onClick={() => handleNextClick()}>
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </Row>
      </Col>

      <Col s={1}></Col>

      <Col s={2}>
        <Row>
          <CartItems
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
          ></CartItems>
        </Row>
      </Col>
    </Row>
  );
}

export default AllSearchResults;

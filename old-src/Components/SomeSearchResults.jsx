import React from "react";
import ResultsToView from "./ResultsToView";

// Get indices based on current page number

function SomeSearchResults(props) {
  const {
    resultsPerPage,
    allSearchResults,
    pageNumber,
    numPages,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    setSortMode,
    sortMode,
  } = props;

  const startIndex = (pageNumber - 1) * resultsPerPage + 1;
  const endIndex = Math.min(
    pageNumber * resultsPerPage,
    allSearchResults.length
  );

  let realPageNumber;
  if (numPages === 0) {
    realPageNumber = 0;
  } else {
    realPageNumber = pageNumber;
  }

  let sortedSearchResults;

  if (sortMode === "") {
    sortedSearchResults = allSearchResults;
  } else {
    sortedSearchResults = allSearchResults.sort((a, b) =>
      a[sortMode] > b[sortMode] ? 1 : -1
    );
  }

  return (
    <div>
      <ResultsToView
        dataToView={sortedSearchResults.slice(startIndex - 1, endIndex)}
        startIndex={startIndex}
        endIndex={endIndex}
        total={allSearchResults.length}
        realPageNumber={realPageNumber}
        numPages={numPages}
        addItemToCart={addItemToCart}
        cartItems={cartItems}
        removeItemFromCart={removeItemFromCart}
        setSortMode={setSortMode}
      ></ResultsToView>
    </div>
  );
}

export default SomeSearchResults;

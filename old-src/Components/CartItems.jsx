import React from "react";
import { Button, Icon, Row, Col, Divider, Section } from "react-materialize";
import DownloadLink from "react-download-link";
import CSVBuilder from "../CSVBuilder";
import data from "../targetVariables.json";

function CartItems(props) {
  const { cartItems, removeItemFromCart } = props;

  const getOutputText = () => {
    const filteredData = data.filter((datum) => cartItems.includes(datum.name));

    const colNames = ["sheet", "name", "label", "source"];

    const csvb = new CSVBuilder(colNames, filteredData);

    return csvb.makeOutputString();
  };

  if (cartItems.length > 0) {
    console.log("cart has items");
    return (
      <div>
        <Row className="valign-wrapper">
          <Col s={10}>
            {" "}
            <h4>Cart</h4>
          </Col>
          <Col s={2}>
            <DownloadLink
              label={<Icon>save</Icon>}
              filename="export.csv"
              exportFile={getOutputText}
            ></DownloadLink>
          </Col>
        </Row>
        {cartItems.map((item) => (
          <div>
            <Divider></Divider>
            <Section>
              <Row>
                <Col s={8}>
                  {" "}
                  <b>Name:</b> {item}{" "}
                </Col>
                <Col s={4}>
                  {" "}
                  <Button
                    className="red"
                    onClick={() => removeItemFromCart(item)}
                    small={true}
                  >
                    <Icon tiny>remove_shopping_cart</Icon>
                  </Button>
                </Col>
              </Row>
            </Section>
          </div>
        ))}{" "}
      </div>
    );
  } else {
    console.log("cart has no items");
    return null;
  }
  /*

  const cartHasItems = () => {
    return (
      <div>
        <h4>Cart</h4>
        <ul>
          {cartItems.map((item) => (
            <div>
              {item}{" "}
              <Button className="red" onClick={() => removeItemFromCart(item)}>
                <i className="material-icons">remove_shopping_cart</i>
              </Button>
            </div>
          ))}{" "}
        </ul>
      </div>
    );
  };

  return <div>{cartItems.length > 0}</div>;
  */
}

export default CartItems;

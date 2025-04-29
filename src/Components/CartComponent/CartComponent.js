import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import "./CartElements.Module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
import CartContext from "../../Store/CartContext";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../redux/snackbarSlice";

const CartComponent = (props) => {
  const dispatch = useDispatch();
  const ctx = useContext(CartContext);
  const cartElements = ctx.items;

  const handleAddItem = (item) => {
    ctx.addItem(item);
  };

  const handleRemoveItem = (id) => {
    ctx.removeItem(id);
    dispatch(
      showSnackbar({
        message: "Item Removed from Cart",
        severity: "warning",
      })
    );
  };

  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      <h2 className="h2-heading">
        {" "}
        <BiCart size={30} className="bicart" /> CART ITEMS{" "}
      </h2>
      <ul>
        {cartElements.map((item, index) => (
          <li key={index} className="cart-item">
            <Container>
              <Row>
                <Col md={4}>
                  <img src={item.imageUrl} alt={item.title} className="image" />
                </Col>
                <Col md={8}>
                  <Card
                    bg="light"
                    text="dark"
                    style={{ width: "100%", height: "70%" }}
                  >
                    <Card.Header>${item.price}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>Quantity : {item.quantity} </Card.Text>
                      <Card.Text style={{ margin: "-5px 0px 20px 0px" }}>
                        TotalPrice : {item.quantity * item.price}{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <div className="add-remove-buttons">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      {" "}
                      -{" "}
                    </Button>
                    <h2> 1 </h2>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleAddItem(item)}
                    >
                      {" "}
                      +{" "}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default CartComponent;

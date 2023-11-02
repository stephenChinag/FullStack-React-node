import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormmatter } from "../util/formatting";
import Button from "./UI/Button";
import UserPorgresContext from "../store/UserProgressContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressts = useContext(UserPorgresContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    totalPrice + item.quantity * item.price;
  }, 0);

  const closeModalHandler = () => {
    userProgressts.hideCart();
  };
  return (
    <Modal className="cart" open={userProgressts.progress === "cart"}>
      <h1>Your Cart</h1>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormmatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={closeModalHandler}>
          {" "}
          Close
        </Button>
        <Button> Go to CheckOut</Button>
      </p>
    </Modal>
  );
};

export default Cart;

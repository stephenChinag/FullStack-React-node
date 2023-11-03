import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormmatter } from "../util/formatting";
import Button from "./UI/Button";
import UserPorgresContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserPorgresContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  //

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function addItem(item) {
    cartCtx.addItem(item);
  }
  function removeItem(item) {
    cartCtx.removeItem(item.id);
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h1>Your Cart</h1>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={removeItem}
            onIncrease={addItem}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormmatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}> Go to CheckOut</Button>
      </p>
    </Modal>
  );
};

export default Cart;

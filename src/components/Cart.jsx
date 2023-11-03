import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormmatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const CartCtx = useContext(CartContext);
  const userProgCtx = useContext(UserProgContext);

  const totalPrice = CartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userProgCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgCtx.progress === "cart"}>
      <h2> Your Cart </h2>
      <ul>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            onIncrease={() => {
              CartCtx.addItem(item);
            }}
            onDecrease={() => {
              CartCtx.removeItem(item.id);
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormmatter.format(totalPrice)} </p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}> Go to CheckOut</Button>
      </p>
    </Modal>
  );
}

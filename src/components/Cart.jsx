import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormmatter } from "../util/formatting";
import Button from "./UI/Button";
export default function Cart() {
  const CartCtx = useContext(CartContext);

  const totalPrice = CartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal className="cart">
      <h2> Your Cart </h2>
      <ul>
        {CartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name}- {item.id}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormmatter.format(totalPrice)} </p>
      <p className="modal-actions">
        <Button textOnly> Close</Button>
        <Button> Go to CheckOut</Button>
      </p>
    </Modal>
  );
}

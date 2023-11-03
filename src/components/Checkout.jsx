import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormmatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgContext from "../store/UserProgressContext";
function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgContext);

  function handleClose() {
    userProgressCtx.hideCheckOut();
  }
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2> CheckOut</h2>
        <p> Total {currencyFormmatter.format(cartTotal)}</p>
        <Input label="full Name" type="text" id="name" />
        <Input label="E-mail" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit"> Submit Order!</Button>
        </p>
      </form>
    </Modal>
  );
}
export default Checkout;

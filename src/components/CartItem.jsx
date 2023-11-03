import { useContext } from "react";
import { currencyFormmatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormmatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span> QTY</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

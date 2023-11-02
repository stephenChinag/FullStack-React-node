import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserPorgresContext from "../store/UserProgressContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgrexCtx = useContext(UserPorgresContext);

  //
  const totalCartItem = cartCtx.items.reduce((toalaNumberOfQuantity, item) => {
    return toalaNumberOfQuantity + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgrexCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItem})
        </Button>
      </nav>
    </header>
  );
};

export default Header;

import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartItem = cartCtx.items.reduce((toalaNumberOfQuantity, item) => {
    return toalaNumberOfQuantity + item.quantity;
  }, 0);
  const showModalHandler = () => {};
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1> React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={showModalHandler}>
          {" "}
          Cart ({totalCartItem})
        </Button>
      </nav>
    </header>
  );
};

export default Header;

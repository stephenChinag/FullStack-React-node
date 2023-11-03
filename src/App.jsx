import Meals from "./components/Meals.jsx";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import { UserContextProvider } from "./store/UserProgressContext.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;

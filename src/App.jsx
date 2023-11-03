import Meals from "./components/Meals.jsx";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
    </CartContextProvider>
  );
}

export default App;

import Meals from "./components/Meals.jsx";
import Header from "./components/Header.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import { UserContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;

import Meals from "./components/Meals";
import Header from "./components/Header";
import { CartContextProvider } from "./store/CartContext";
import { UserPorgresContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
function App() {
  return (
    <UserPorgresContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserPorgresContextProvider>
  );
}

export default App;

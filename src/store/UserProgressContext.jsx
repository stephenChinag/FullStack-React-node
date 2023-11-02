import { createContext, useState } from "react";

const UserPorgresContext = createContext({
  progress: "", // "cart", "caheckout",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function UserPorgresContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckOut = () => {
    setUserProgress("checkout");
  };
  const hideCheckOut = () => {
    setUserProgress("");
  };

  const progressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserPorgresContext.Provider value={progressCtx}>
      {children}
    </UserPorgresContext.Provider>
  );
}

export default UserPorgresContext;

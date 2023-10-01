import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../Hooks/useLocalStorage";
const ShoppingCartContext = createContext({});
export function useShopping() {
  return useContext(ShoppingCartContext);
}
export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('clothes',[]);
  const [isopen,setOpen]=useState(false);
  
  const OpenCart=()=>setOpen(!isopen);
  const CloseCart=()=>setOpen(false);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const IncreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const DecreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const RemoveItem = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  const CartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,0
  );
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        IncreaseQuantity,
        DecreaseQuantity,
        RemoveItem,
        OpenCart,
        CloseCart,
        cartItems,
        CartQuantity,
      }}
    >
      {children}
      <ShoppingCart isopen={isopen}/>
      
    </ShoppingCartContext.Provider>
  );
};

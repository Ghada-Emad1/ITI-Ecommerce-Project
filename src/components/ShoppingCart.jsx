import { useShopping } from "../contexts/ShoppingCartContext";
import { GrClose } from "react-icons/gr";
import { CartItem } from "./CartItem";
import { FormatCurrency } from "../utility/FormatCurrency";
import Clothes from "../data/Clothes.json";
export const ShoppingCart = ({ isopen }) => {
  const { CloseCart, cartItems } = useShopping();

  return (
    <div
      className={
        isopen
          ? "w-[50%] sm:w-[450px] right-0 top-0 overflow-auto fixed h-full p-4 bg-platinum"
          : "fixed top-0 left-[-100%] w-[50%] sm:w-[300px] h-full bg-platinum z-10 duration-300"
      }
    >
      <div className="flex justify-between ">
        <h1 className="text-xl font-semibold">Your Cart</h1>
        <GrClose
          size={30}
          style={{ fill: "white" }}
          onClick={CloseCart}
          className="cursor-pointer"
        />
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="font-semibold text-lg">
        Total{" "}
        {FormatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = Clothes.find((item) => item.id === cartItem.id);
            const Total = total + (item?.price || 0) * cartItem.quantity;
            return Total;
          }, 0),
        )}
      </div>
    </div>
  );
};

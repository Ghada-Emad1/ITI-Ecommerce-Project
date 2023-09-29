import { useShopping } from "../contexts/ShoppingCartContext";
import { GrClose } from "react-icons/gr";
import { CartItem } from "./CartItem";
export const ShoppingCart = ({ isopen }) => {
  const { CloseCart, cartItems } = useShopping();
  
  return(
    <div className={isopen?"bg-orange w-[450px] right-0 top-0 overflow-auto fixed h-full p-4":"fixed top-0 left-[-100%] w-[300px] h-full bg-orange z-10 duration-300"}>
        <div className="flex justify-between ">
           <h1 className="text-xl font-semibold">Your Cart</h1>
           <GrClose size={30} style={{fill:'white'}} onClick={CloseCart} className="cursor-pointer"/>
        </div>
        <div>
           {cartItems.map(item=>(
            <CartItem key={item.id} {...item}/>
           ))}
        </div>
    </div>
  );
};

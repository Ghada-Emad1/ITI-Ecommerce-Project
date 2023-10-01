import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useShopping } from "../contexts/ShoppingCartContext";
export const Navbar = () => {
  const [open, setopen] = useState(false);
  const {OpenCart,CartQuantity}=useShopping();
  return (
    <div className="flex justify-between items-center p-4 sticky w-full top-0 bg-black text-white">
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="hidden sm:flex gap-6">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <div>
          <div>
            <BsCart3 size={30} onClick={OpenCart} className="cursor-pointer"/>
            <div className="w-[1.5rem] h-[1.5rem] bg-orange absolute bottom-4 right-2 rounded-full text-center translate-x-[25%] translate-y-[25%] cursor-pointer">
              {CartQuantity}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3 sm:hidden cursor-pointer">
        {!open && <FiMenu size={30} onClick={() => setopen(!open)} />}
        <div>
            <BsCart3 size={30} onClick={OpenCart}/>
            <div className="w-[1.5rem] h-[1.5rem] bg-orange absolute bottom-4 right-14 rounded-full text-center translate-x-[25%] translate-y-[25%] cursor-pointer">
              {CartQuantity}
            </div>
          </div>
      </div>

      {open && (
        <div className="sm:hidden fixed top-0 right-0 w-[40%] bg-black h-full z-10 block p-4 transition-all ease-in-out duration-150">
          <div>
          <AiOutlineClose
            className="cursor-pointer absolute right-0 "
            size={30}
            onClick={() => setopen(!open)}
          />
          </div>
          
          <div className="mt-[40px] flex justify-center  flex-col gap-4 max-w-[200px]">
            <Link to="login" className="bg-orange mx-6 py-1 rounded-lg text-center font-semibold">Login</Link>
            <Link to="register" className="bg-orange mx-6 py-1 rounded-lg text-center font-semibold">signUp</Link>
            
          </div>
          
        </div>
      )}
    </div>
  );
};

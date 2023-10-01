import { useShopping } from "../contexts/ShoppingCartContext";
import Clothes from "../data/Clothes.json";
import { FormatCurrency } from "../utility/FormatCurrency";
export const CartItem = ({ id, quantity }) => {
  const { RemoveItem } = useShopping();
  const Item = Clothes.find((item) => item.id === id);
  if (Item == null) return null;
  return (
    <div className="overflow-auto flex flex-col items-center text-darkGray font-semibold">
      <img src={Item.img} className="w-[200px] h-[200px] object-cover mt-4" />
      <div className="flex gap-1 mt-1">
        <p>{Item.name}</p>
        {quantity > 1 && <span className="text-xs">x{quantity}</span>}
      </div>
      <div>{FormatCurrency(Item.price)}</div>
      <div className="flex flex-col items-center justify-center">
        <div>Total: {FormatCurrency(Item.price * quantity)}</div>
        <button
          className="bg-orange text-white px-4 py-2 rounded-lg mt-4 ease-in-out transition-all duration-150 hover:opacity-75"
          onClick={() => RemoveItem(Item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

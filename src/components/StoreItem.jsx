import { useShopping } from "../contexts/ShoppingCartContext";
import { FormatCurrency } from "../utility/FormatCurrency";
export const StoreItem = ({ id, img, price, name }) => {
  const { getItemQuantity, IncreaseQuantity, DecreaseQuantity, RemoveItem } =
    useShopping();
  const quantity = getItemQuantity(id);
  return (
    <div>
      <div className="p-4 rounded-lg bg-platinum mx-auto flex flex-col ">
        <a href={`/details/${id}`} className="flex items-center justify-center">
          <img src={img} className="w-[500px] h-[500px] object-cover" />
        </a>
        <div className="flex align-center justify-between my-4 text-lg font-semibold text-darkGray ">
          <p>{name}</p>
          <p>{FormatCurrency(price)}</p>
        </div>
        <div className="flex items-center justify-center">
          {quantity === 0 ? (
            <button
              className="bg-orange text-white text-lg px-4 py-2 rounded-lg font-semibold"
              onClick={() => IncreaseQuantity(id)}
            >
              Add to Card+
            </button>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center justify-center gap-3">
                <button
                  className="bg-orange text-white w-[30px] h-[30px] text-center rounded-full hover:opacity-75"
                  onClick={() => IncreaseQuantity(id)}
                >
                  +
                </button>
                <span>{quantity} in the cart</span>
                <button
                  className="bg-orange text-white w-[30px] h-[30px] text-center  rounded-full hover:opacity-75"
                  onClick={() => DecreaseQuantity(id)}
                >
                  -
                </button>
              </div>
              <button
                className="bg-orange px-4 py-2 text-white rounded-lg font-semibold text-lg  text-center  hover:opacity-75"
                onClick={() => RemoveItem(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

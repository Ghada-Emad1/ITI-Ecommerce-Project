import { useShopping } from "../contexts/ShoppingCartContext"
import Clothes from '../data/Clothes.json'
export const CartItem=({id,quantity})=>{
    const {RemoveQuantity}=useShopping();
    const Item=Clothes.find((item)=>item.id===id);
    if(Item==null) return null;
    return(
        <div className="overflow-auto">
            <img src={Item.img} className="w-[200px] h-[200px] object-cover mt-4"/>
        </div>
    )
}
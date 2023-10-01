import { useParams } from "react-router-dom"
import Clothes from '../data/Clothes.json'
import { useQuery } from "@tanstack/react-query";
import { FetchClothes } from "../Api/FetchClothes";
import { FormatCurrency } from "../utility/FormatCurrency";
export const Details=()=>{
  
    const {id}=useParams();
    const Result=useQuery(['clothes',id],FetchClothes);
   if(Result.isLoading){
    return(
        <div>Loading....</div>
    )
   }
   if(Result.error){
    return <div>Error:${Result.error.message}</div>
   }
   const Item=Result.data;
   
    return(
        <div className="flex items-center justify-center mt-8">
          <div className="bg-platinum p-4 flex items-center flex-col font-semibold text-lg text-darkGray rounded-lg">
            <img src={Item.img} className="w-[400px] h-[400px] object-cover"/>
            <div>Name: {Item.name}</div>
            <div>Price: {FormatCurrency(Item.price)}</div>
          </div>
        </div>
    )
}
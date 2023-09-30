import Clothes from "../data/Clothes.json"
export const FetchClothes = async ({ queryKey }) => {
    const id = queryKey[1];

        // Fetch data from your local JSON file
        const response = await fetch('http://localhost:5174/src/data/Clothes.json');
        if (!response.ok) {
          throw new Error('Fetch failed');
        }
    
        const data = await response.json();
        //console.log(data)
        // Find the pet by ID
        const Item = data.find((pet) => pet.id === parseInt(id, 10));
        //console.log(Item)
        if (!Item) {
          throw new Error(`Pet with ID ${id} not found`);
        }
    
        return Item;
       
   
  };
  
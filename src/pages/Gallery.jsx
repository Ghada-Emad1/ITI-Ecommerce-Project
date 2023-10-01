import data from '../data/Clothes.json'
import { StoreItem } from '../components/StoreItem'
function Gallery() {
  return (
    <div>
      <div className='text-center mt-5 text-3xl font-bold text-orange'>
        <h1>My Gallery</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
        {data.map(item=>(
          <div key={item.id}>
            <StoreItem {...item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

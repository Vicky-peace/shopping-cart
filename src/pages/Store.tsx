import StoreItem from "../components/StoreItem"
import products from '../data/products.json'

interface StoreProducts{
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Store: React.FC<StoreProducts> = ({
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
 
}) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product)=>(
          <StoreItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            increaseCartQuantity={increaseCartQuantity}
            decreaseCartQuantity={decreaseCartQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Store
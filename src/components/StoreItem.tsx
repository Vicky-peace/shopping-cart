import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const StoreItem: React.FC<StoreItemProps> = ({
    id,
    name,
    price,
    imageUrl,
    quantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  }) => {

    //Function to format currency
    const formatCurrency = (amount: number) => {
      return `$${amount.toFixed(2)}`;
    }
  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
       {/* Image */}
       <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
       {/*Product Details*/}
       <div className="flex flex-col flex-1 p-4">
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-xl front-semibold">{name}</h2>
          <span className="text-gray-600">{formatCurrency(price)}</span>
        </div>
        {/* Ations */}
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
               <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="text-lg">
                  <span className="font-semibold">{quantity}</span> in cart
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                <Trash2 className="w-4 h-4 inline mr-1" />
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoreItem
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AddToCart({ items }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = items.find(item => item.id === parseInt(id));
    setProduct(selectedProduct);

    // Find similar products (exclude the current product)
    const similar = items.filter(item => item.id !== parseInt(id)).slice(0, 5);
    setSimilarProducts(similar);
  }, [id, items]);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          {product.discount && (
            <p className="text-green-600 text-lg mb-4">Discount: {product.discount}% off</p>
          )}
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <button onClick={decrementQuantity} className="bg-gray-200 px-3 py-1 rounded-l">-</button>
            <span className="bg-gray-100 px-4 py-1">{quantity}</span>
            <button onClick={incrementQuantity} className="bg-gray-200 px-3 py-1 rounded-r">+</button>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Place Order</button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {similarProducts.map(item => (
            <div key={item.id} className="flex-shrink-0 w-64">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
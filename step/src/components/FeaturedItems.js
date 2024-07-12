import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedItems({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg">
          <Link to={`/cart/${item.id}`}>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2" />
          </Link>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.price}</p>
          <Link to={`/cart/${item.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FeaturedItems;
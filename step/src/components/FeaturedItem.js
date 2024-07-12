import React, { useState } from 'react';

const FeaturedItem = ({ item, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(item);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default FeaturedItem;

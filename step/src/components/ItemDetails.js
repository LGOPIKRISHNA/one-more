import React, { useState } from 'react';

const ItemDetails = ({ selectedItem, onPlaceOrder }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handlePlaceOrder = () => {
    const order = {
      item: selectedItem,
      quantity: quantity,
      totalPrice: selectedItem.price * quantity
    };
    onPlaceOrder(order);
  };

  return (
    <div className="item-details">
      <img src={selectedItem.image} alt={selectedItem.name} />
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default ItemDetails;

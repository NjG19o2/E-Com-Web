import React, { useContext } from 'react';
import ProductContext from '../../context/items/ProductContext';
import './sidebar.css'; // Import the CSS file for styling

const Cart = () => {
 const context = useContext(ProductContext);
 const { cartItems, deleteFromCart, updateQuantity } = context;

 // Ensure cartItems is an array before using .map()
 const items = Array.isArray(cartItems) ? cartItems : [];

 const handleRemove = (id) => {
    deleteFromCart(id);
 };

 const handleUpdateQuantity = (id, quantity) => {
    updateQuantity(id, quantity);
 };

 return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-items-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
                <input
                 type="number"
                 min="1"
                 max={item.stock}
                 value={item.quantity}
                 onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                 className="quantity-input"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
 );
};

export default Cart;
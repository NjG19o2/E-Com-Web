import React, { useContext } from 'react';
import ProductContext from '../../context/items/ProductContext';

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
    <div>
       <h1>Your Cart</h1>
       {items.length === 0 ? (
         <p>Your cart is empty.</p>
       ) : (
         <ul>
           {items.map((item) => (
             <li key={item.id} className="cart-item">
               <h2>{item.name}</h2>
               <p>Price: ${item.price}</p>
               <p>Quantity: {item.quantity}</p>
               <button onClick={() => handleRemove(item.id)}>Remove</button>
               <input
                 type="number"
                 min="1"
                 max={item.stock}
                 value={item.quantity}
                 onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
               />
             </li>
           ))}
         </ul>
       )}
    </div>
   );
};

export default Cart;
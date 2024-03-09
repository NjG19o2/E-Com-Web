import React, { useState, useEffect } from 'react';
import ProductContext from '../../context/items/ProductContext';


const ProductProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState([]);
 const [userID, setUserID] = useState(null);

 useEffect(() => {
    const storedUserID = localStorage.getItem('userID');
    if (storedUserID) {
      setUserID(storedUserID);
    }
 }, []);

 const addToCart = async (productId, quantity) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/addtocart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newCartItem = await response.json();
      setCartItems([...cartItems, newCartItem]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
 };

 const deleteFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/deletefromcart/${userID}/${itemId}`, {
        method: 'DELETE',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setCartItems(cartItems.filter(item => item.itemId !== itemId));
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
 };

 return (
    <ProductContext.Provider value={{ cartItems, addToCart, deleteFromCart, userID }}>
      {children}
    </ProductContext.Provider>
 );
};

export default ProductProvider;
import React, { useState, useEffect,useContext } from 'react';
import GamingAccessories from '../images/GamingAccessories.jpg';
import itemContext from "../context/items/itemContext";
import ProductContext from "../context/items/ProductContext";
import './styles.css';

const GamingAccessoriesLink = () => {
 const context = useContext(itemContext);
 const { mode } = context;
 const { addToCart } = useContext(ProductContext);

 // State for storing the items fetched from the backend


 // Function to handle adding an item to the cart
 const handleAddToCart = (productId, quantity) => {
    addToCart(productId, quantity);
 };

 const items = [
  {
    id: 1,
    image: GamingAccessories,
    title: "Item  1",
    description: "Description  1",
    productId: "215241612112541",
    quantity: 100,
  },
  // ... more items
];


 return (
    <div className={`album py-5 bg-body-tertiary bg-${mode} text-${mode === "light" ? "dark" : "light"}`}>
      <div className={`container bg-${mode} text-${mode === "light" ? "dark" : "light"}`}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {items.map((item) => (
            <div className="col item" key={item.id}>
              <div className="card shadow-sm">
                <img src={item.image} alt={item.title} />
                <div className="card-body">
                 <p className="card-text">{item.description}</p>
                 <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleAddToCart(item.productId, item.quantity)}
                      >
                        Add to cart
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default GamingAccessoriesLink;
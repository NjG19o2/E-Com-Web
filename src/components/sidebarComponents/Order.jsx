import React, { useState, useEffect } from 'react';

const Order = () => {
 const [orders, setOrders] = useState([]);

 useEffect(() => {
    // Simulate fetching orders from an API
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders'); // Replace with your actual API endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
 }, []);

 return (
    <div>
      <h1>Your Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h2>{order.title}</h2>
            <p>{order.status}</p>
            {/* Add more details or actions as needed */}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Order;
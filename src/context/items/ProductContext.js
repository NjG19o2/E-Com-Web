import { createContext } from 'react';

const ProductContext = createContext({
 cartItems: [],
 addToCart: () => {},
 deleteFromCart: () => {},
 userID: null,
});

export default ProductContext;
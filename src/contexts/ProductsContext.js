import { createContext, useState, useEffect, useContext } from 'react';

import { getDocuments, addCollectionAndDocuments } from '../utils/firebase.js';

// import SHOP_DATA from '../shopData.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   addCollectionAndDocuments('products', SHOP_DATA);
  //   console.log('effect');
  // }, [])
  
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

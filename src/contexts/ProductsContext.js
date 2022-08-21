import { createContext, useState, useEffect, useContext } from 'react';

import {
  getProducts,
  getAllCategories,
  getAllColors,
  // CreateProductDocuments
} from '../utils/firebase.js';

// import SHOP_DATA from '../shopData.js';

export const ProductsContext = createContext({
  products: [],
  categories: [],
  colors: [],
  setParams: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [params, setParams] = useState({});

  // useEffect(() => {
  //   CreateProductDocuments(SHOP_DATA);
  //   console.log('effect');
  // }, [])

  useEffect(() => {
    (async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
      const allColors = await getAllColors();
      setColors(allColors);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const criteria = {
        gender: params.genderCriteria,
        category: params.categoryCriteria,
        color: params.colorCriteria,
      };
      const allProducts = await getProducts(criteria);
      setProducts(allProducts);
    })();
  }, [params]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        colors,
        setParams,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

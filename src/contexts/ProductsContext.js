import { createContext, useState, useEffect, useContext } from 'react';

import {
  getProducts,
  getAllCategories,
  getAllColors,
} from '../utils/firebase.js';

// import SHOP_DATA from '../shopData.js';

export const ProductsContext = createContext({
  products: [],
  categories: [],
  colors: [],
  genderCriteria: '',
  categoryCriteria: '',
  colorCriteria: '',
  setGenderCriteria: () => {},
  setCategoryCriteria: () => {},
  setColorCriteria: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [genderCriteria, setGenderCriteria] = useState('');
  const [categoryCriteria, setCategoryCriteria] = useState('');
  const [colorCriteria, setColorCriteria] = useState('');

  // useEffect(() => {
  //   addCollectionsAndDocuments('products', SHOP_DATA);
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
        gender: genderCriteria,
        category: categoryCriteria,
        color: colorCriteria,
      };
      const allProducts = await getProducts(criteria);
      setProducts(allProducts);
    })();
  }, [genderCriteria, categoryCriteria, colorCriteria]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        colors,
        genderCriteria,
        categoryCriteria,
        colorCriteria,
        setGenderCriteria,
        setCategoryCriteria,
        setColorCriteria,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);

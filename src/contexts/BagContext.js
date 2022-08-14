import { createContext, useState, useContext } from 'react';

export const BagContext = createContext({
  bagItems: [],
  addItemToBag: () => {},
});

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const addItemToBag = (item, quantity = 1) => {
    console.log('Item to add:');
    console.log(item);

    const existingBagItem = bagItems.find(
      (bagItem) => bagItem._id === item._id
    );

    if (existingBagItem) {
      const bagItemsUpdated = bagItems.map((bagItem) =>
        bagItem._id === item._id
          ? { ...bagItem, quantity: bagItem.quantity + quantity }
          : bagItem
      );

      setBagItems(bagItemsUpdated);
    } else {
      setBagItems([...bagItems, { ...item, quantity }]);
    }
  };

  return (
    <BagContext.Provider value={{ bagItems, addItemToBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);

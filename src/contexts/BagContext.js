import { createContext, useState, useContext } from 'react';

export const BagContext = createContext({
  bagItems: [],
  addItemToBag: () => {},
  removeItemFromBag: () => {},
});

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const addItemToBag = (item, quantity = 1) => {
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

  const removeItemFromBag = (item) => {
    const existingBagItem = bagItems.find(
      (bagItem) => bagItem._id === item._id
    );

    if (existingBagItem) {
      const bagItemsUpdated = bagItems.filter(
        (bagItem) => bagItem._id !== item._id
      );

      setBagItems(bagItemsUpdated);
    }
  };

  return (
    <BagContext.Provider value={{ bagItems, addItemToBag, removeItemFromBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);

import { createContext, useState, useContext, useEffect } from 'react';

export const BagContext = createContext({
  bagItems: [],
  addItemToBag: () => {},
  removeItemFromBag: () => {},
  bagItemsCount: 0,
  bagTotalPrice: 0,
});

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);
  const [bagItemsCount, setBagItemsCount] = useState(0);
  const [bagTotalPrice, setBagTotalPrice] = useState(0);

  useEffect(() => {
    const updatedCount = bagItems.reduce(
      (acc, item) => (acc += item.quantity), 0
    );

    setBagItemsCount(updatedCount);
  }, [bagItems]);

  useEffect(() => {
    const updatedTotalPrice = bagItems.reduce(
      (acc, item) => (acc += item.price * item.quantity), 0
    );

    setBagTotalPrice(updatedTotalPrice);
  }, [bagItems]);

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
    <BagContext.Provider value={{ bagItems, addItemToBag, removeItemFromBag, bagItemsCount, bagTotalPrice }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);

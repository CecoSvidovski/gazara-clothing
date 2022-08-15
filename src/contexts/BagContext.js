import {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

export const BagContext = createContext({
  bagItems: [],
  bagItemsCount: 0,
  bagTotalPrice: 0,
  addItemToBag: () => { },
  removeItemFromBag: () => { },
});

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);
  const [bagItemsCount, setBagItemsCount] = useState(0);
  const [bagTotalPrice, setBagTotalPrice] = useState(0);

  useEffect(() => {
    const updatedCount = bagItems.reduce(
      (acc, item) => acc += item.quantity, 0);

    setBagItemsCount(updatedCount);
  }, [bagItems]);

  useEffect(() => {
    const updatedTotalPrice = bagItems.reduce(
      (acc, item) => acc += item.price * item.quantity, 0);

    setBagTotalPrice(updatedTotalPrice);
  }, [bagItems]);

  const findItem = (item) =>
    bagItems.find((bagItem) => bagItem._id === item._id);

  const addItemToBag = (item, quantity = 1) => {
    if(quantity <= 0) return;

    const existingBagItem = findItem(item);

    if (!existingBagItem) return setBagItems([...bagItems, { ...item, quantity }]);

    const bagItemsUpdated = bagItems.map((bagItem) =>
      bagItem._id === item._id
        ? { ...bagItem, quantity: bagItem.quantity + quantity }
        : bagItem
    );

    return setBagItems(bagItemsUpdated);
  };

  const removeItemFromBag = (item, quantity = 1) => {
    if(quantity === 0) return;

    const existingBagItem = findItem(item);

    if (!existingBagItem) return console.error('Item cannot be found');

    //If quantity is less than 0 the item is completely removed
    if (quantity >= item.quantity || quantity < 0) {
      const bagItemsUpdated = bagItems.filter(
        (bagItem) => bagItem._id !== item._id
      );

      return setBagItems(bagItemsUpdated);
    }

    const bagItemsUpdated = bagItems.map((bagItem) =>
      bagItem._id === item._id
        ? { ...bagItem, quantity: bagItem.quantity - quantity }
        : bagItem
    );

    return setBagItems(bagItemsUpdated);
  };

  return (
    <BagContext.Provider
      value={{
        bagItems,
        bagItemsCount,
        bagTotalPrice,
        addItemToBag,
        removeItemFromBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);

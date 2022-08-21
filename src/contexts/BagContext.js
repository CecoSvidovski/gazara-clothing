import { createContext, useContext, useReducer } from 'react';

import { createAction } from '../utils/reducer';

const BAG_ACTION_TYPES = {
  SET_BAG_ITEMS: 'SET_BAG_ITEMS',
  SET_BAG_COUNT: 'SET_BAG_COUNT',
  SET_BAG_TOTAL: 'SET_BAG_TOTAL',
};

const INITIAL_STATE = {
  bagItems: [],
  bagItemsCount: 0,
  bagTotalPrice: 0,
};

const bagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case BAG_ACTION_TYPES.SET_BAG_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in bagReducer`);
  }
};

export const BagContext = createContext({
  bagItems: [],
  bagItemsCount: 0,
  bagTotalPrice: 0,
  addItemToBag: () => { },
  removeItemFromBag: () => { },
  deliveryFee: 0,
});

export const BagProvider = ({ children }) => {
  const [{ bagItems, bagItemsCount, bagTotalPrice }, dispatch] = useReducer(
    bagReducer,
    INITIAL_STATE
  );

  const updateBagItemsReducer = (bagItems) => {
    const newBagItemsCount = bagItems.reduce(
      (total, bagItem) => total + bagItem.quantity,
      0
    );

    const newBagTotalPrice = bagItems.reduce(
      (total, bagItem) => total + bagItem.quantity * bagItem.price,
      0
    );

    const payload = {
      bagItems,
      bagItemsCount: newBagItemsCount,
      bagTotalPrice: newBagTotalPrice,
    };

    dispatch(createAction(BAG_ACTION_TYPES.SET_BAG_ITEMS, payload));
  };

  const deliveryFee = bagTotalPrice >= 100 || !bagItems.length ? 0 : 5;

  const findItem = (item) =>
    bagItems.find((bagItem) => bagItem._id === item._id);

  const addItemToBag = (item, quantity = 1) => {
    if (quantity <= 0) return;

    const existingBagItem = findItem(item);

    if (!existingBagItem)
      return updateBagItemsReducer([...bagItems, { ...item, quantity }]);

    const bagItemsUpdated = bagItems.map((bagItem) =>
      bagItem._id === item._id
        ? { ...bagItem, quantity: bagItem.quantity + quantity }
        : bagItem
    );

    return updateBagItemsReducer(bagItemsUpdated);
  };

  const removeItemFromBag = (item, quantity = 1) => {
    if (quantity === 0) return;

    const existingBagItem = findItem(item);

    if (!existingBagItem) return console.error('Item cannot be found');

    //If quantity is less than 0 the item is completely removed
    if (quantity >= item.quantity || quantity < 0) {
      const bagItemsUpdated = bagItems.filter(
        (bagItem) => bagItem._id !== item._id
      );

      return updateBagItemsReducer(bagItemsUpdated);
    }

    const bagItemsUpdated = bagItems.map((bagItem) =>
      bagItem._id === item._id
        ? { ...bagItem, quantity: bagItem.quantity - quantity }
        : bagItem
    );

    return updateBagItemsReducer(bagItemsUpdated);
  };

  return (
    <BagContext.Provider
      value={{
        bagItems,
        bagItemsCount,
        bagTotalPrice,
        addItemToBag,
        removeItemFromBag,
        deliveryFee,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => useContext(BagContext);

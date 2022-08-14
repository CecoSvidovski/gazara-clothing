import { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext({
  favoriteItems: [],
  addItemToFavorites: () => {},
  removeItemFromFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addItemToFavorites = (item) => {
    const existingFavoriteItem = favoriteItems.find(
      (favoriteItem) => favoriteItem._id === item._id
    );

    if (existingFavoriteItem) {
      alert('Item already added to favorites.');
    } else {
      setFavoriteItems([
        ...favoriteItems,
        {
          _id: item._id,
          name: item.name,
          imageUrl: item.imageUrl,
          price: item.price,
        },
      ]);
    }
  };

  const removeItemFromFavorites = (item) => {
    const existingFavoriteItem = favoriteItems.find(
      (favoriteItem) => favoriteItem._id === item._id
    );

    if (existingFavoriteItem) {
      const favoriteItemsUpdated = favoriteItems.filter(
        (favoriteItem) => favoriteItem._id !== item._id
      );

      setFavoriteItems(favoriteItemsUpdated);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteItems, addItemToFavorites, removeItemFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);

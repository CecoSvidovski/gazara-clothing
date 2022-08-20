import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import {
  onAuthStateChangedListener,
  getUserFavoriteItems,
  addDocumentToFavorites,
  removeDocumentFromFavorites,
} from '../utils/firebase';

export const FavoritesContext = createContext({
  favoriteItems: [],
  addItemToFavorites: () => {},
  removeItemFromFavorites: () => {},
  findItemInFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (currUser) => {
      if (currUser) {
        const favorites = await getUserFavoriteItems();
        setFavoriteItems(favorites);
      } else {
        setFavoriteItems([]);
      }
    });

    return unsubscribe;
  }, []);

  const addItemToFavorites = (item) => {
    const existingFavoriteItem = favoriteItems.find(
      (favoriteItem) => favoriteItem._id === item._id
    );

    if (existingFavoriteItem) {
      alert('Item already added to favorites.');
      return;
    }

    (async () => {
      const result = await addDocumentToFavorites(item);

      if (result) {
        setFavoriteItems([
          ...favoriteItems,
          {
            _id: item._id,
            name: item.name,
            previewUrl: item.previewUrl,
            price: item.price,
          },
        ]);
      }
    })();
  };

  const removeItemFromFavorites = (item) => {
    const existingFavoriteItem = favoriteItems.find(
      (favoriteItem) => favoriteItem._id === item._id
    );

    if (existingFavoriteItem) {
      if (existingFavoriteItem) {
        (async () => {
          const result = await removeDocumentFromFavorites(item);

          if (result) {
            const favoriteItemsUpdated = favoriteItems.filter(
              (favoriteItem) => favoriteItem._id !== item._id
            );

            setFavoriteItems(favoriteItemsUpdated);
          }
        })();
      }
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

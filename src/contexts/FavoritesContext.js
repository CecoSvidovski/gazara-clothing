import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import {
  auth,
  onAuthStateChangedListener,
  getUserFavoriteItems,
  addDocumentToFavorites,
  removeDocumentFromFavorites,
} from '../utils/firebase';
import { toast } from 'react-toastify';

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
    const user = auth.currentUser;
    if (!user) {
      toast.warn(
        'You need to be logged in in order to add items to your favorites.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
      return;
    }

    const existingFavoriteItem = favoriteItems.find(
      (favoriteItem) => favoriteItem._id === item._id
    );

    if (existingFavoriteItem) {
      toast.warn(
        'Item already in favorites.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
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
      toast.success(
        'Item successfully added to favorites.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    })();
  };

  const removeItemFromFavorites = (item) => {
    const user = auth.currentUser;
    if (!user) {
      toast.warn(
        'You need to be logged in in order to remove items from your favorites.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );

      return;
    }

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

        toast.success(
          'Item successfully removed from favorites.',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
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

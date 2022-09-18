import { useFavoritesContext } from '../../contexts/FavoritesContext';

import ProductCard from '../../components/ProductCard';

import './styles.scss';

const Favorites = () => {
  const { favoriteItems } = useFavoritesContext();

  return (
    <div className='user-favorites-container'>
      {favoriteItems.length ? (
        <div className='products-container'>
          {favoriteItems.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className='no-items'>
          <h2>You currently have no items in favorites.</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;

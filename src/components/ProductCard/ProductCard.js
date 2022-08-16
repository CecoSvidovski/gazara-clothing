import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

import Button from '../Button/Button';
import { ReactComponent as HeartIcon } from './assets/heart.svg';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToBag } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } =
    useFavoritesContext();

  const handleAddToBag = () => addItemToBag(product);
  const handleAddToFavorites = () => addItemToFavorites(product);
  const handleRemoveFromFavorites = () => removeItemFromFavorites(product);

  const itemAlreadyInFavorites = favoriteItems.find(
    (i) => i._id === product._id
  );

  return (
    <div className='product-card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <div className='footer'>
        <span className='product-name'>{name}</span>
        <span className='product-price'>{price}</span>
      </div>
      <div className='button-container'>
        <Button
          buttonType='smallInverted'
          style={{ width: '37%', padding: '0 10px' }}
        >
          View
        </Button>
        <Button
          buttonType='smallInverted'
          style={{ width: '58%', padding: '0 10px' }}
          onClick={handleAddToBag}
        >
          Add to bag
        </Button>
      </div>
      <div className='favorites-container'>
        {itemAlreadyInFavorites ? (
          <span
            className='add-to-favorites active'
            onClick={handleRemoveFromFavorites}
          >
            <HeartIcon className='heart-icon' />
          </span>
        ) : (
          <span className='add-to-favorites' onClick={handleAddToFavorites}>
            <HeartIcon className='heart-icon' />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

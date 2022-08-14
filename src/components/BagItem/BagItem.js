import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as XIcon } from './assets/x.svg';

import './BagItem.scss';

const BagItem = ({
  item,
  removeItem,
  favoriteItems,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { name, imageUrl, price, quantity } = item;

  const handleRemoveItem = () => removeItem(item);
  const handleAddToFavorites = () => addToFavorites(item);
  const handleRemoveFromFavorites = () => removeFromFavorites(item);

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === item._id);

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <div className='name-container'>
          <span className='name'>{name}</span>
          <span className='price'>
            {quantity} x ${price}
          </span>
          {!itemAlreadyInFavorites ? (
            <span className='favorite' onClick={handleAddToFavorites}>
              <HeartIcon className='heart-icon' />
              Add to favorites
            </span>
          ) : (
            <span className='favorite active' onClick={handleRemoveFromFavorites}>
              <HeartIcon className='heart-icon' />
              Added to favorites
            </span>
          )}
        </div>
        <div className='total-price-container'>
          <span className='total-price'>${quantity * price}</span>
        </div>
      </div>
      <div className='remove' onClick={handleRemoveItem}>
        <XIcon className='x-icon' />
      </div>
    </div>
  );
};

export default BagItem;

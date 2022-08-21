import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as XIcon } from './assets/x.svg';

import './BagNavItem.scss';

const BagNavItem = ({
  item,
  removeItem,
  favoriteItems,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { name, price, quantity } = item;

  const handleRemoveItem = () => removeItem(item, -1);
  const handleAddToFavorites = () => addToFavorites(item);
  const handleRemoveFromFavorites = () => removeFromFavorites(item);

  const itemAlreadyInFavorites = favoriteItems.find((i) => i._id === item._id);

  return (
    <div className='cart-item-container'>
      <div className='image-container'>
        <img src={item.previewUrl} alt={name} />
      </div>
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
            <span
              className='favorite active'
              onClick={handleRemoveFromFavorites}
            >
              <HeartIcon className='heart-icon' />
              Added to favorites
            </span>
          )}
        </div>
        <div className='item-total-container'>
          <span className='item-total-price'>${quantity * price}</span>
        </div>
      </div>
      <div className='remove' onClick={handleRemoveItem}>
        <XIcon className='x-icon' />
      </div>
    </div>
  );
};

export default BagNavItem;

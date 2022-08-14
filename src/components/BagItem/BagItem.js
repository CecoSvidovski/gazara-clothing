import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as XIcon } from './assets/x.svg';

import './BagItem.scss';

const BagItem = ({ item, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  const handleRemoveItem = () => removeItem(item);

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <div className='name-container'>
          <span className='name'>{name}</span>
          <span className='price'>
            {quantity} x ${price}
          </span>
          <span className='favorite'>
            <HeartIcon className='heart-icon' />
            Add to favorites
          </span>
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

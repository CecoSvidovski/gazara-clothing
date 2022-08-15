import { ReactComponent as XIcon } from './assets/x.svg';

import './BagItem.scss';

const BagItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className='bag-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>
        <span className='multiplied'>x</span>
        ${price}
      </span>
      <span className='total-price'>${price * quantity}</span>
      <div className='remove'>
        <XIcon className='x-icon' />
      </div>
    </div>
  );
};

export default BagItem;

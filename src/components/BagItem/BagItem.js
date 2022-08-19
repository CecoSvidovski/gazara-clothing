import { useState, useEffect } from 'react';

import { getImgUrl } from '../../utils/firebase';

import { ReactComponent as XIcon } from './assets/x.svg';
import { ReactComponent as ChevronLeftIcon } from './assets/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from './assets/chevron-right.svg';

import './BagItem.scss';

const BagItem = ({ item, addItem, removeItem }) => {
  const { name, price, quantity } = item;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    (async () => setImageUrl(await getImgUrl(item.previewPath)))();
  }, [item]);

  const handleIncreaseQuantity = () => addItem(item);
  const handleDecreaseQuantity = () => removeItem(item, 1);
  const handleRemoveItem = () => removeItem(item, -1);

  return (
    <div className='bag-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='icon-btn chevron' onClick={handleDecreaseQuantity}>
          <ChevronLeftIcon className='chevron-left' />
        </div>
        <div className='value'>{quantity}</div>
        <div className='icon-btn chevron' onClick={handleIncreaseQuantity}>
          <ChevronRightIcon className='chevron-right' />
        </div>
      </span>
      <span className='price'>
        <span className='multiplied'>x</span>${price}
      </span>
      <span className='total-price'>${price * quantity}</span>
      <div className='icon-btn remove' onClick={handleRemoveItem}>
        <XIcon className='x-icon' />
      </div>
    </div>
  );
};

export default BagItem;

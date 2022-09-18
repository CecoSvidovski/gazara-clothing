import { useBagContext } from '../../contexts/BagContext';

import BagItem from '../../components/BagItem';
import Button from '../../components/Button';

import './styles.scss';

const Bag = () => {
  const {
    bagItems,
    bagTotalPrice,
    addItemToBag,
    removeItemFromBag,
    deliveryFee,
  } = useBagContext();

  return (
    <div className='bag-container'>
      <div className='bag'>
        <div className='header'>
          <span className='title'>
            <h2>Shopping Bag</h2>
          </span>
        </div>
        <div className='items-container'>
          {bagItems.length ? (
            bagItems.map((item) => (
              <BagItem
                key={item._id}
                item={item}
                addItem={addItemToBag}
                removeItem={removeItemFromBag}
              />
            ))
          ) : (
            <div className='no-items'>
              <h4>Your shopping bag is empty.</h4>
            </div>
          )}
        </div>
      </div>
      <div className='total-container'>
        <div className='header'>
          <span className='title'>
            <h2>Summary</h2>
          </span>
        </div>
        <div className='body'>
          <div className='body-block'>
            <span className='block-name'>Subtotal</span>
            <span className='block-value'>${bagTotalPrice}</span>
          </div>
          <div className='body-block'>
            <span className='block-name'>Delivery fee*</span>
            <span className='block-value'>
              {deliveryFee ? `$${deliveryFee}` : 'FREE'}
            </span>
          </div>
          <div className='body-block'>
            <span className='block-name'>Total</span>
            <span className='block-value'>${bagTotalPrice + deliveryFee}</span>
          </div>
        </div>
        <div className='footer'>
          <span>*Orders over $100 qualify for free delivery</span>
          <Button style={{ width: '100%' }}>Go to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Bag;

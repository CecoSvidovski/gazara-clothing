import { useBagContext } from '../../contexts/BagContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import NavLink from '../NavLink';
import Button from '../Button/Button';
import BagItem from '../BagItem/BagItem';

import './ShoppingBag.scss';

const ShoppingBag = () => {
  const { bagItems, removeItemFromBag } = useBagContext();

  const [totalPrice, itemsCount] = bagItems.reduce(
    (acc, item) => {
      acc[0] += item.price * item.quantity;
      acc[1] += item.quantity;
      return acc;
    },
    [0, 0]
  );

  const dropdownContent = (
    <>
      {itemsCount ? (
        <>
          <div className='items'>
            {bagItems.map((item) => (
              <BagItem
                key={item._id}
                item={item}
                removeItem={removeItemFromBag}
              />
            ))}
          </div>

          <div className='total-price-container'>
            <span className='total-text'>Total:</span>
            <span className='total-price'>${totalPrice}</span>
          </div>

          <Button style={{ width: '100%' }}>Go to checkout</Button>
          <Button buttonType='onlyText' style={{ alignSelf: 'center' }}>
            View bag
          </Button>
        </>
      ) : (
        <div className='empty-message'>
          <h4>Your shopping bag is empty.</h4>
        </div>
      )}
    </>
  );

  return (
    <NavLink dropdownContent={dropdownContent} dropdownWidth='420px'>
      <ShoppingBagIcon className='bag-icon' />
      <span className='item-count'>{itemsCount > 99 ? '99+' : itemsCount}</span>
    </NavLink>
  );
};

export default ShoppingBag;

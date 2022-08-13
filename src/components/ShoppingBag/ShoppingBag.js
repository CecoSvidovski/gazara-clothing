import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import NavLink from '../NavLink';
import Button from '../Button/Button';

import './ShoppingBag.scss';

const ShoppingBag = () => {
  const dropdownContent = (
    <>
      <div className='items'>
        
      </div>
      <Button buttonType='small' style={{width: '100%'}}>Checkout</Button>
    </>
  );

  return (
    <NavLink dropdownContent={dropdownContent} dropdownWidth='340px'>
      <ShoppingBagIcon className='bag-icon' />
      <span className='item-count'>0</span>
    </NavLink>
  );
};

export default ShoppingBag;

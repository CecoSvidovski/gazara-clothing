import { useBagContext } from '../../contexts/BagContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import NavLink from '../NavLink';
import Button from '../Button/Button';
import BagItem from '../BagItem/BagItem';

import './ShoppingBag.scss';

const ShoppingBag = () => {
  const { bagItems } = useBagContext();

  const dropdownContent = (
    <>
      <div className='items'>
        {bagItems.map((item) => (
          <BagItem key={item._id} item={item} />
        ))}
      </div>
      <div className='total-price-container'>
        <span className='total-price'></span>
      </div>
      <Button style={{ width: '100%' }}>
        Go to checkout
      </Button>
      <Button buttonType='onlyText' style={{ alignSelf: 'center' }}>
        View bag
      </Button>
    </>
  );

  return (
    <NavLink dropdownContent={dropdownContent} dropdownWidth='420px'>
      <ShoppingBagIcon className='bag-icon' />
      <span className='item-count'>{bagItems.length}</span>
    </NavLink>
  );
};

export default ShoppingBag;

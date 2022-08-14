import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import NavLink from '../NavLink';
import Button from '../Button/Button';
import BagItem from '../BagItem/BagItem';

import './BagNav.scss';

const BagNav = () => {
  const { bagItems, removeItemFromBag, bagItemsCount, bagTotalPrice } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } = useFavoritesContext();

  const dropdownContent = (
    <>
      {bagItemsCount ? (
        <>
          <div className='items'>
            {bagItems.map((item) => (
              <BagItem
                key={item._id}
                item={item}
                removeItem={removeItemFromBag}
                favoriteItems={favoriteItems}
                addToFavorites={addItemToFavorites}
                removeFromFavorites={removeItemFromFavorites}
              />
            ))}
          </div>

          <div className='total-price-container'>
            <span className='total-text'>Total:</span>
            <span className='total-price'>${bagTotalPrice}</span>
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
      {bagItemsCount ? (
        <span className='item-count'>
          {bagItemsCount > 99 ? '99+' : bagItemsCount}
        </span>
      ) : (
        ''
      )}
    </NavLink>
  );
};

export default BagNav;

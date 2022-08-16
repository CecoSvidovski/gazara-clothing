import { useNavigate } from 'react-router-dom';

import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import NavLink from '../NavLink';
import Button from '../Button/Button';
import BagNavItem from '../BagNavItem/BagNavItem';

import './BagNav.scss';

const BagNav = () => {
  const {
    bagItems,
    bagItemsCount,
    bagTotalPrice,
    removeItemFromBag,
    deliveryFee,
  } = useBagContext();
  const { favoriteItems, addItemToFavorites, removeItemFromFavorites } =
    useFavoritesContext();

  const navigate = useNavigate();
  const handleNavigateToBag = () => navigate('/bag');

  const dropdownContent = (
    <>
      {bagItemsCount ? (
        <>
          <div className='items'>
            {bagItems.map((item) => (
              <BagNavItem
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
            <span className='total-price'>${bagTotalPrice + deliveryFee}</span>
          </div>

          <span className='fee-message'>{'(Delivery fee included)'}</span>

          <Button style={{ width: '100%' }}>Go to checkout</Button>
          <Button
            buttonType='onlyText'
            style={{ alignSelf: 'center' }}
            onClick={handleNavigateToBag}
          >
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
      <ShoppingBagIcon className='bag-nav-icon' />
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

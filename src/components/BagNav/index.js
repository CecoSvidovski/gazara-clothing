import { useNavigate } from 'react-router-dom';

import { useBagContext } from '../../contexts/BagContext';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

import NavLink from '../NavLink';
import Button from '../Button';
import BagNavItem from '../BagNavItem';

import {
  BagNavIcon,
  EmptyMessage,
  FeeMessage,
  ItemCount,
  Items,
  TotalPrice,
  TotalPriceContainer,
  TotalText,
} from './styled';

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
          <Items>
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
          </Items>

          <TotalPriceContainer>
            <TotalText>Total:</TotalText>
            <TotalPrice>${bagTotalPrice + deliveryFee}</TotalPrice>
          </TotalPriceContainer>

          <FeeMessage>{'(Delivery fee included)'}</FeeMessage>

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
        <EmptyMessage>
          <h4>Your shopping bag is empty.</h4>
        </EmptyMessage>
      )}
    </>
  );

  return (
    <NavLink dropdownContent={dropdownContent} dropdownWidth='420px'>
      <BagNavIcon />
      {bagItemsCount ? (
        <ItemCount>{bagItemsCount > 99 ? '99+' : bagItemsCount}</ItemCount>
      ) : (
        ''
      )}
    </NavLink>
  );
};

export default BagNav;

import { useFavoritesContext } from '../../contexts/FavoritesContext';

import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import NavLink from '../NavLink';

import './FavoritesNav.scss';

const FavoritesNav = () => {
  const { favoriteItems } = useFavoritesContext();

  const itemsCount = favoriteItems.length;

  return (
    <NavLink className='favorites-nav'>
      <HeartIcon className='heart-icon' />
      {itemsCount ? (
        <span className='item-count'>
          {itemsCount > 99 ? '99+' : itemsCount}
        </span>
      ) : (
        ''
      )}
    </NavLink>
  );
};

export default FavoritesNav;

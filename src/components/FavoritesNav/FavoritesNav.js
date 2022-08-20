import { useNavigate } from 'react-router-dom';

import { useFavoritesContext } from '../../contexts/FavoritesContext';

import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import NavLink from '../NavLink';

import './FavoritesNav.scss';
import { auth } from '../../utils/firebase';

const FavoritesNav = () => {
  const { favoriteItems } = useFavoritesContext();

  const navigate = useNavigate();

  const itemsCount = favoriteItems.length;

  const handleClick = () => {
    const user = auth.currentUser;
    if (!user) {
      return alert(
        'You need to be logged in in order to see your favorite items.'
      );
    }
    navigate('/favorites');
  };

  return (
    <NavLink className='favorites-nav' onClick={handleClick}>
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

import { useNavigate } from 'react-router-dom';
import { useFavoritesContext } from '../../contexts/FavoritesContext';

import { auth } from '../../utils/firebase';
import { toast } from 'react-toastify';

import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import NavLink from '../NavLink';

import './styles.scss';


const FavoritesNav = () => {
  const { favoriteItems } = useFavoritesContext();

  const navigate = useNavigate();

  const itemsCount = favoriteItems.length;

  const handleClick = () => {
    const user = auth.currentUser;
    if (!user) {
      return toast.warn(
        'You need to be logged in in order to see your favorite items.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
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

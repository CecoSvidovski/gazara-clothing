import { Outlet, Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { signOutUser } from '../../utils/firebase';

import BagNav from '../../components/BagNav';
import UserNav from '../../components/UserNav';
import FavoritesNav from '../../components/FavoritesNav';

import './styles.scss';

const Navigation = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className='nav'>
        <div className='logo-container'>
          <Link className='logo' to='/'>
            Gazara
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <FavoritesNav />
          <UserNav user={user} signOut={signOutUser} />
          <BagNav />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

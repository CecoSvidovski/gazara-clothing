import { Outlet, Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { signOutUser } from '../../utils/firebase';

import ShoppingBag from '../../components/ShoppingBag';

import './Navigation.scss';
import UserNavLink from '../../components/UserNavLink';

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
          <UserNavLink user={user} signOut={signOutUser} />
          {/* {user ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )} */}
          <ShoppingBag />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

import { Outlet, Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { signOutUser } from '../../utils/firebase';

import './Navigation.scss';

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
          {user ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

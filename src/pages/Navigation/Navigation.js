import { Outlet, Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => (
  <>
    <div className='nav'>
      <div className='logo-container'>
        <Link className='logo' to='/'>Gazara</Link>
      </div>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/auth'>
          Sign In
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;

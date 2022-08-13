import { Link } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import Button from '../Button/Button';
import NavLink from '../NavLink';

import './UserNavLink.scss';

const UserNavLink = ({ user, signOut }) => {
  console.log(user);
  const dropdownContent = user ? (
    <>
      <span>Hello, {user.displayName}</span>
      <Button buttonType='small' style={{ width: '100%' }} onClick={signOut}>
        Sign Out
      </Button>
    </>
  ) : (
    <Link to='/auth'>
      <Button buttonType='small' style={{ width: '100%' }}>
        Sign In
      </Button>
    </Link>
  );

  return (
    <NavLink dropdownContent={dropdownContent}>
      <UserIcon className='user-icon' />
    </NavLink>
  );
};

export default UserNavLink;

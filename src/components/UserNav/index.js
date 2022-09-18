import { useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as UserIcon } from '../../assets/user.svg';
import Button from '../Button';
import NavLink from '../NavLink';

import './styles.scss';

const UserNav = ({ user, signOut }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const signInHandler = () => navigate('/auth', {state: {from: location}})

  const dropdownContent = user ? (
    <>
      <span>Hello, {user.displayName}</span>
      <Button buttonType='small' style={{ width: '100%' }} onClick={signOut}>
        Sign Out
      </Button>
    </>
  ) : (
    <Button buttonType='small' style={{ width: '100%' }} onClick={signInHandler}>
      Sign In
    </Button>
  );

  return (
    <NavLink dropdownContent={dropdownContent}>
      <UserIcon className='user-icon' />
    </NavLink>
  );
};

export default UserNav;

import Dropdown from './Dropdown';

import './NavLink.scss';

const NavLinkDropdown = ({ children, dropdownContent, dropdownWidth, ...props }) => {

  return (
    <div
      className='nav-link-container'
      {...props}
    >
      {children}
      {dropdownContent
        ? <Dropdown width={dropdownWidth}>{dropdownContent}</Dropdown>
        : ''
      }
    </div>
  );
};

export default NavLinkDropdown;

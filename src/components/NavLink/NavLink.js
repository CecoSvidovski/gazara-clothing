import Dropdown from './Dropdown';

import './NavLink.scss';

const NavLinkDropdown = ({
  children,
  dropdownContent,
  dropdownWidth,
  className,
  ...props
}) => {
  return (
    <div
      className={
        className
          ? `nav-link-container ${className}`
          : 'nav-link-container'
      }
      {...props}
    >
      {children}
      {dropdownContent ? (
        <Dropdown width={dropdownWidth}>{dropdownContent}</Dropdown>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavLinkDropdown;

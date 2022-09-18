import Dropdown from '../Dropdown';

import './styles.scss';

const NavLinkDropdown = ({
  children,
  dropdownContent,
  dropdownWidth,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={
        className
          ? `nav-link-container ${className}`
          : 'nav-link-container'
      }
      onClick={onClick}
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

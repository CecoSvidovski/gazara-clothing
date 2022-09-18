import './styles.scss';

const Dropdown = ({ children, width, ...props }) => {
  const style = width && { width: width };

  return (
    <div className='dropdown-container'>
      <div className='dropdown' style={style} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

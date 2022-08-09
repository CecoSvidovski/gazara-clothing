import './Button.scss';

const BUTTON_TYPE_CLASSES = {
  default: '',
  inverted: 'inverted-btn',
  google: 'google-btn',
};

const Button = ({ children, buttonStyle = 'default', ...props }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonStyle]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

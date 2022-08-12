import './Button.scss';

const BUTTON_STYLE_CLASSES = {
  default: '',
  inverted: ' inverted-btn',
  google: ' google-btn',
  small: ' small-btn',
  smallInverted: ' small-btn inverted-btn'
};

const Button = ({ children, buttonStyle = 'default', ...props }) => {
  return (
    <button
      className={`button${BUTTON_STYLE_CLASSES[buttonStyle]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

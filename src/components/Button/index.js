import { StyledButton } from './styled';

const BUTTON_TYPE_CLASSES = {
  default: '',
  inverted: ' inverted-btn',
  google: ' google-btn',
  small: ' small-btn',
  smallInverted: ' small-btn inverted-btn',
  onlyText: ' only-text',
};

const Button = ({ children, buttonType = 'default', ...props }) => {
  const className = `button${BUTTON_TYPE_CLASSES[buttonType]}`;

  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

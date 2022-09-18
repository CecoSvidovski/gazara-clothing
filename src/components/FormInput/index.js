import './styles.scss';

const FormInput = ({ name, label = null, ...props }) => {
  return (
    <div className='form-group'>
      <input className='form-input' name={name} {...props} />
      {label && (
        <label
          htmlFor={name}
          className={`${props.value && props.value.length ? 'shrink' : null} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

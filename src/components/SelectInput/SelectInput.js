import './SelectInput.scss';

const SelectInput = ({ children, name, label, value, onChange, ...props }) => {
  return (
    <div className='select-input-container' {...props}>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} onChange={onChange} value={value}>
        {children}
      </select>
    </div>
  );
};

export default SelectInput;

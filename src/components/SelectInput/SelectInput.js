import './SelectInput.scss';

const SelectInput = ({ children, name, label, onChange, ...props }) => {
  return (
    <div className='select-input-container' {...props}>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

export default SelectInput;

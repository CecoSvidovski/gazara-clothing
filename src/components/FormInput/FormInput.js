const FormInput = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} />
    </div>
  );
};

export default FormInput;

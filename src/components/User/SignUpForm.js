import { useState } from 'react';

import { createAuthUser, createUserDocument } from '../../utils/firebase';
import { kebabToCamelcase } from '../../utils/stringUtils';
import FormInput from '../FormInput';

const SignUpForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(initialFormData);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name: nameKebab, value } = e.target;
    const name = kebabToCamelcase(nameKebab);

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await createAuthUser(email, password);
      await createUserDocument(user, { firstName, lastName });

      setFormFields(initialFormData);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use.');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='First Name'
          name='first-name'
          type='text'
          onChange={handleChange}
          value={firstName}
          required
        />

        <FormInput
          label='Last Name'
          name='last-name'
          type='text'
          onChange={handleChange}
          value={lastName}
          required
        />

        <FormInput
          label='Email'
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label='Password'
          name='password'
          type='password'
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label='Confirm Password'
          name='confirm-password'
          type='password'
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { createAuthUser, createUserAuthDocument } from '../../utils/firebase';
import { kebabToCamelCase } from '../../utils/stringUtils';

import FormInput from '../FormInput';
import Button from '../Button/Button';
import './SignUpForm.scss';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormData);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name: nameKebab, value } = e.target;
    const name = kebabToCamelCase(nameKebab);

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

      await createUserAuthDocument(user, { firstName, lastName });

      setFormFields(initialFormData);
      window.scrollTo(0, 0);
      if (location.state.from) navigate(location.state.from.pathname);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use.');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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

        <Button type='submit' style={{ width: '100%' }}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

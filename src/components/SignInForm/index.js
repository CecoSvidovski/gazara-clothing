import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { signInUser, signInWithGooglePopup } from '../../utils/firebase';
import { kebabToCamelCase } from '../../utils/stringUtils';
import { toast } from 'react-toastify';

import FormInput from '../FormInput';
import Button from '../Button';
import './styles.scss';

const initialFormData = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormData);
  const { email, password } = formFields;

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name: nameKebabCase, value } = e.target;
    const name = kebabToCamelCase(nameKebabCase);

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUser(email, password);

      setFormFields(initialFormData);
      window.scrollTo(0, 0);
      if (location.state.from) navigate(location.state.from.pathname);
    } catch (error) {
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        toast.warn(
          'Invalid email or password!',
          {
            position: toast.POSITION.BOTTOM_RIGHT,
          }
        );
      } else {
        console.log(error.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

    window.scrollTo(0, 0);
    if (location.state.from) navigate(location.state.from.pathname);
  };
  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit' style={{width: '33%'}}>Sign In</Button>
          <Button type='button' buttonType='google' style={{width: '66%'}} onClick={signInWithGoogle}>
            <i className='fa-brands fa-google google-icon'></i> Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

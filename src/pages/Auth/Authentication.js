import SignInForm from '../../components/UserForm/SignInForm';
import SignUpForm from '../../components/UserForm/SignUpForm';
import './Authentication.scss'

const Authentication = () => {

  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

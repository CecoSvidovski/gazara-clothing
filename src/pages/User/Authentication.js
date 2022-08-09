import SignInForm from '../../components/User/SignInForm';
import SignUpForm from '../../components/User/SignUpForm';
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

import {
  signInWithGooglePopup,
  createUserDocument,
} from '../../utils/firebase';

import SignUpForm from '../../components/User/SignUpForm';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

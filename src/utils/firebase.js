import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB0ug2_VBUcFA8gR76VcKA4GN9s8h24-dU',
  authDomain: 'gazara-clothing.firebaseapp.com',
  projectId: 'gazara-clothing',
  storageBucket: 'gazara-clothing.appspot.com',
  messagingSenderId: '43590823668',
  appId: '1:43590823668:web:312b0f787fcd6a68c678a1',
};

initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        firstName: '',
        lastName: '',
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUser = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
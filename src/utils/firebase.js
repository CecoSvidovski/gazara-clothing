import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  where,
  collectionGroup,
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { titleToKebabCase, toTitleCase } from './stringUtils';

const firebaseConfig = {
  apiKey: 'AIzaSyB0ug2_VBUcFA8gR76VcKA4GN9s8h24-dU',
  authDomain: 'gazara-clothing.firebaseapp.com',
  projectId: 'gazara-clothing',
  storageBucket: 'gazara-clothing.appspot.com',
  messagingSenderId: '43590823668',
  appId: '1:43590823668:web:312b0f787fcd6a68c678a1',
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const CreateProductDocuments = async (shopData) => {
  const collectionRef = collection(db, 'products');
  const batch = writeBatch(db);

  try {
    Object.entries(shopData).forEach(([genderKey, genderCollection]) => {
      const docRef = doc(collectionRef, genderKey);

      batch.set(docRef, {
        title: genderKey,
      });

      const genderCollectionRef = collection(
        collectionRef,
        genderKey,
        'categories'
      );

      genderCollection.forEach((documentObject) => {
        console.log(documentObject.categoryTitle);
        const key = titleToKebabCase(documentObject.categoryTitle);
        const docRef = doc(genderCollectionRef, key);

        batch.set(docRef, {
          title: documentObject.categoryTitle,
        });

        const newCollectionRef = collection(genderCollectionRef, key, 'items');

        documentObject.items.forEach((item) => {
          const newDocRef = doc(newCollectionRef, item._id);
          batch.set(newDocRef, item);
        });
      });
    });
  } catch (error) {
    console.log('Error setting the batch for collections', error.message);
  }

  try {
    await batch.commit();
  } catch (error) {
    console.log('Error creating the collection', error.message);
  }
};

export const getDocumentsFromQuery = async (q) => {
  const documentsResult = await getDocs(q);

  return documentsResult.docs.map((docSnapshot) => ({
    _id: docSnapshot.id,
    ...docSnapshot.data(),
  }));
};

export const getProducts = async (criteria) => {
  const gender =
    criteria && criteria.gender && (criteria.gender !== 'all')
      ? criteria.gender
      : null;

  const category =
    (criteria && criteria.category) && (criteria.category !== 'all')
      ? criteria.category
      : null;
      
  const color =
    (criteria && criteria.color) && (criteria.color !== 'all')
      ? criteria.color
      : null;

  let q = query(collectionGroup(db, 'items'));
  let queries = [];

  try {
    if (gender) {
      const g = gender.toLowerCase();

      if (category) {
        color && queries.push(where('color', '==', color));
        q = query(
          collection(db, `products/${g}/categories/${category}/items`),
          ...queries
        );
      } else {
        queries.push(where('gender', '==', g));
        color && queries.push(where('color', '==', color));
        q = query(collectionGroup(db, 'items'), ...queries);
      }
    } else if (category) {
      queries.push(where('category', '==', category));
      color && queries.push(where('color', '==', color));
      q = query(collectionGroup(db, 'items'), ...queries);
    } else if (color) {
      queries.push(where('color', '==', color));
      q = query(collectionGroup(db, 'items'), ...queries);
    }
  } catch (error) {
    console.log('Error while creating the query', error.message);
  }

  try {
    return await getDocumentsFromQuery(q);
  } catch (error) {
    console.log('Error while getting the documents', error.message);
  }
};

export const getAllCategories = async () => {
  const q = query(collectionGroup(db, 'categories'));
  const categories = await getDocumentsFromQuery(q);
  return [...new Map(categories.map((item) => [item['_id'], item])).values()];
};

export const getAllColors = async () => {
  const q = query(collectionGroup(db, 'colors'));
  return await getDocumentsFromQuery(q);
};

export const createColorCollection = async () => {
  const allProducts = await getProducts();
  const uniqueColors = [
    ...new Map(allProducts.map((item) => [item['color'], item])).values(),
  ].map((item) => ({ color: item.color, title: toTitleCase(item.color) }));

  const collectionRef = collection(db, 'colors');
  const batch = writeBatch(db);

  uniqueColors.forEach((item) => {
    const docRef = doc(collectionRef, item.color);
    batch.set(docRef, {
      title: item.title,
    });
  });

  console.log(await batch.commit(), 'resolved');
};

export const createUserDocument = async (user, additionalInfo = {}) => {
  if (!user) return;

  const userDocRef = doc(db, 'users', user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = user;
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

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getImgUrl = async (path) => {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch (error) {
    console.log('Error getting the image', error.message);
  }
};

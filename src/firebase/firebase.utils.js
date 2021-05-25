import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDCoPTD7NsKZb3G-32fCS7MbsOxe_G_gzM",
    authDomain: "crwn-db-66294.firebaseapp.com",
    projectId: "crwn-db-66294",
    storageBucket: "crwn-db-66294.appspot.com",
    messagingSenderId: "48634600481",
    appId: "1:48634600481:web:04bc49ff9ff1372f3ed760",
    measurementId: "G-BDVBVYT6KF"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

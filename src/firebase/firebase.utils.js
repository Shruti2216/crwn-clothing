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

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
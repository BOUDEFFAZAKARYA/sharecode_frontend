// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoA6_M5hFUSsjegKJqsLfWsHGGtJII0_Q",
  authDomain: "sharecode-366421.firebaseapp.com",
  projectId: "sharecode-366421",
  storageBucket: "sharecode-366421.appspot.com",
  messagingSenderId: "77610035595",
  appId: "1:77610035595:web:d36698ca7a8abd9bfe678e",
  measurementId: "G-TQWLHMLF61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  // authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  // databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  // projectId: process.env.REACT_APP_FIREBASE_projectId,
  // storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  // appId: process.env.REACT_APP_FIREBASE_appId,
  apiKey: "AIzaSyCLLZ2cgpW_9Z0dAn0IGrcz13SjxAx0tRc",
  authDomain: "mhmtclk-reduxthunk.firebaseapp.com",
  projectId: "mhmtclk-reduxthunk",
  storageBucket: "mhmtclk-reduxthunk.appspot.com",
  messagingSenderId: "246743130668",
  appId: "1:246743130668:web:11db3954a3e15dd87b6789"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

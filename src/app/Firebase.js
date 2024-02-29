import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8saT3k1inAUamYgYW3GZQ3pviawTuozk",
  authDomain: "slotbooking-ccf7f.firebaseapp.com",
  projectId: "slotbooking-ccf7f",
  storageBucket: "slotbooking-ccf7f.appspot.com",
  messagingSenderId: "926310151355",
  appId: "1:926310151355:web:320c327601708b37b3e59e",
};

// Initialize Firebase
let app, auth;
export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
  auth = getAuth();
};
export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const signIn = (email, password,href) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = href;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
export const signout = () =>
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("signout")
    })
    .catch((error) => {
      // An error happened.
    });

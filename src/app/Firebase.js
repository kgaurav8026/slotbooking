import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6laLzmw3F-rzmBlpfhlLbPASO6-ZnIbI",
  authDomain: "slotbooking-5baa4.firebaseapp.com",
  projectId: "slotbooking-5baa4",
  storageBucket: "slotbooking-5baa4.appspot.com",
  messagingSenderId: "670879189130",
  appId: "1:670879189130:web:c2acf4d2264d4fbe3a4573",
  measurementId: "G-PW7HEC5YWV",
};

// Initialize Firebase
let auth, app, db;
export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth();
};
export const createUser = (email, password, href) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = href;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const signIn = (email, password, href) =>
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
      console.log("signout");
    })
    .catch((error) => {
      // An error happened.
    });

// Initialize Cloud Firestore and get a reference to the service
// fun to store data in firestore database
export async function addData(data, coll) {
  try {
    const docRef = await addDoc(collection(db, coll), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getUserId, setUserId } from "./Login/userState";
import { doc, setDoc } from "firebase/firestore";

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
export const createUser = (email, password, adminCode, href) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      // Check if the admin code is 123
      const isAdmin = Number(adminCode) === 123;

      // Create a document in the 'users' collection with the user's ID
      setDoc(doc(db, "users", user.uid), {
        admin: isAdmin, // Add a field 'admin' which is by default false
      })
        .then(() => {
          console.log("User added to Firestore");
          window.location.href = href;
        })
        .catch((error) => {
          console.error("Error adding user to Firestore: ", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });

export const signIn = (email, password, href) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUserId(user.uid); // Set the user ID
      console.log(getUserId());
      window.location.href = href;

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

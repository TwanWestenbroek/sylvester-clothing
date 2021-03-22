import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDDxnZQl2F5OMw8dDPjIVphcRZKxRZAgGs",
  authDomain: "sylvester-db.firebaseapp.com",
  projectId: "sylvester-db",
  storageBucket: "sylvester-db.appspot.com",
  messagingSenderId: "149868580955",
  appId: "1:149868580955:web:c3d61cee996da1cad36f7e",
  measurementId: "G-M9S70DH4H5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOzrN14VFjctJK9B8lZhK3_7-OwK-i9kg",
  authDomain: "crwn-db-9b9c3.firebaseapp.com",
  databaseURL: "https://crwn-db-9b9c3.firebaseio.com",
  projectId: "crwn-db-9b9c3",
  storageBucket: "crwn-db-9b9c3.appspot.com",
  messagingSenderId: "89944234849",
  appId: "1:89944234849:web:bebd60058c919a36e68320",
  measurementId: "G-6X8N0LCWBX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if the userAuth object is null,
  //meaning when the user signs out or is not signed in at all,
  //return from this method without doing anything.
  if (!userAuth) {
    return;
  }

  //If userAuth object is not null, then check if it exists in firestore,
  //if not, then create it.

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user. " + error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

// Util function for adding collections/items to the firebase store prgramatically.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // Get a collection reference
  const collectionRef = firestore.collection(collectionKey);

  // Get a batch object from Firebase so that we can batch all the set() calls together.
  // Firebase only allows 1 set() call at a time for consistency.
  const batch = firestore.batch();

  // For each item in the 'objectsToAdd' array, we need to create a new Document Reference in Firebase.
  objectsToAdd.forEach((obj) => {
    // Create a new Document Reference in Firebase using the Collection Reference.
    // By providing no args, Firebase will generate a new ID.
    const newDocRef = collectionRef.doc();

    // Invoke the set() now on the batch object instead of the Doc Reference object directly.
    batch.set(newDocRef, obj);
  });

  // Fire off the batch call now. This returns a promise, which returns a void when resolved.
  return await batch.commit();
};

// Function for converting the Collections Data array to an Object
// Takes in the Collections Object and maps over the docs property of the collections returned from Firebase
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    //De-structure title and items from the data and add the missing elements i.e route
    const { title, items } = doc.data();
    return {
      route: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // we need to return the transformed Array after changing it to an oject
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//Utility function to check if the user us authenticated
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
